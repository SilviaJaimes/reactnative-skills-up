import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import { useEffect, useState } from 'react';

export default function App() {
  const [error, setError] = useState();
  const [userInfo, setUserInfo] = useState();

  const configureGoogleSignin = () => {
    GoogleSignin.configure({
      webClientId: "308843749272-0oqvjsg9drrc83lcm1t1tl1llibqrhqu.apps.googleusercontent.com",
      androidClientId: "308843749272-cns56qrk5tvrve89dicp56ajsp6ahk2b.apps.googleusercontent.com",
      /* iosClientId : "" */
    });
  };

  useEffect(() => {
    configureGoogleSignin();
  }, []);  

  const signIn = async () => {
    console.log("Press enter to sign in");

    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUserInfo(userInfo);
      setError();
    } catch (e) {
      setError(e);
    }
  };

  const logout = async () => {
    setUserInfo(undefined);
    GoogleSignin.revokeAccess();
    GoogleSignin.signOut();
  }

  console.log("*******************************************************");
  if (error) {
    console.log("Error:", JSON.stringify(error));
  }
  if (userInfo && userInfo.user) {
    console.log("User Info:", JSON.stringify(userInfo.user));
  }
  console.log("*******************************************************");  

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(error)}</Text>
      {userInfo && <Text>{JSON.stringify(userInfo.user)}</Text>}
      {userInfo ? (
        <Button title="Logout" onPress={logout} />
      ): (
        <GoogleSigninButton 
        size={GoogleSigninButton.Size.Standard} 
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
      />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
