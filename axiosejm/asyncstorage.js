import { AsyncStorage } from 'react-native';
// Guardar datos
AsyncStorage.setItem('clave', 'valor').then(() => {
    console.log('Datos guardados exitosamente');
  }).catch((error) => {
    console.error('Error al guardar datos:', error);
  });
  
  // Obtener datos
  AsyncStorage.getItem('clave').then((value) => {
    if (value !== null) {
      console.log('Valor recuperado:', value);
    } else {
      console.log('No se encontraron datos');
    }
  }).catch((error) => {
    console.error('Error al obtener datos:', error);
  });
  
  // Eliminar datos
  AsyncStorage.removeItem('clave').then(() => {
    console.log('Datos eliminados exitosamente');
  }).catch((error) => {
    console.error('Error al eliminar datos:', error);
  });
// Ejemplo usando async/await
try {
    // Guardar datos
    await AsyncStorage.setItem('clave', 'valor');
    console.log('Datos guardados exitosamente');
  
    // Obtener datos
    const value = await AsyncStorage.getItem('clave');
    if (value !== null) {
      console.log('Valor recuperado:', value);
    } else {
      console.log('No se encontraron datos');
    }
  
    // Eliminar datos
    await AsyncStorage.removeItem('clave');
    console.log('Datos eliminados exitosamente');
  } catch (error) {
    console.error('Error:', error);
  }
    