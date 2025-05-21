import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, TouchableHighlight } from 'react-native';
import { useState, useEffect } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';

export default function App() {

  const [isBiometricSupported, setIsBiometricSupported] = useState(false);

  // para lector facial o lector de huella
  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();  // verificar si el celular es apto para la lectura
      setIsBiometricSupported(compatible);
    })();
  });

  const fallBackToDefaultAuth = () => {
    console.log('fall back to password auth');
  }

  const alertComponent = (title, mess, btnTxt, btnFunc) => {
    return Alert.alert(title, mess, [
      {
        text: btnTxt,
        onPress: btnFunc,
      }
    ]);
  };

  const TwoButtonAlert = () => 
    Alert.alert('Binvenido a la aplicacion', 'Now', [
      {
        text: 'Atras',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      },
      {
        text: 'OK',
        onPress: () => console.log("OK Pressed")
      }
    ]);
  
  const handleBiometricAuth = async () => {
    // verificar si el dispositivo soporta la lectura
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();

    // si no es posible la auth devolver a login normal
    if(!isBiometricAvailable)
      return alertComponent(
        'Por favor digite su contraseña',
        'Autenticacion por huella digital no es valida',
        'Ok',
        () => fallBackToDefaultAuth()
      );

    // verificar que tipo de autenticacion es valida en el dispositivo (huello, rostro)
    let suppertedBiometrics;
    if (isBiometricAvailable) 
      suppertedBiometrics = await LocalAuthentication.supportedAuthenticationTypesAsync();

    // verificar que los datos biometricos esten guardados localmente en el usuario
    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
      if (!savedBiometrics)
        return alertComponent(
          'No hay datos biometricos guardados',
          'Por favor digite su contraseña',
          'Ok',
          () => fallBackToDefaultAuth()
        );

    // autenticacion con datos biometricos
    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Autenticacion Biometrica",
      cancelLabel: "cancel",
      disableDeviceFallback: true,
    });

    // log de usuarios con auth existosa
    if (biometricAuth) {TwoButtonAlert()};
    console.log({isBiometricAvailable});
    console.log({suppertedBiometrics});
    console.log({savedBiometrics});
    console.log({biometricAuth});
  };

  return (
    <SafeAreaView> 
      <View style={styles.container}>
        <Text>
          {isBiometricSupported ? 'Su dispositivo es compatible para la autenticacion biometrica' : 'Reconocimiento facil y scaner dactilar es posible en este dispositivo'}
        </Text>
        <TouchableHighlight style={{ height: 60, marginTop: 200 }}>
          <Button
            title='Logueo con datos biometricos'
            color='black'
            onPress={handleBiometricAuth}
          />
        </TouchableHighlight>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});