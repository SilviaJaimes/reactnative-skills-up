import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
/* import 'react-native-gesture-handler'; */
import { NavigationContainer } from '@react-navigation/native';
import Saludar from './src/components/Saludar';
import NavigationStack from './src/navigation/NavigationStack';
import NavigationTab from './src/navigation/NavigationTab';
import NavigationDrawer from './src/navigation/NavigationDrawer';

export default function App() {
  return (
    <NavigationContainer>
      {/* 
      <View style={styles.container}>
        <Text>Curso React Native</Text>
        {/* <Saludar name="Karen Velasquez" /> */} 
        {/* Lo que se realizo aqui fue que junto al componente saludar se creo name y ahi se va alamcenando los datos que queremos que tenga name */}
        {/* <Saludar /> */} 
        {/* Va a estar vacio o con solo el string que se le dice en el componente */}
        {/* <Saludar firstname="Isabella" lastname="Velasquez" /> */}
        {/* Se hace envio de dos props al componente 
      </View>
      */}

{/*       <NavigationStack /> */}    
{/*       <NavigationTab /> */}
      <NavigationDrawer />
 </NavigationContainer>
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
