import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.example.com/data');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();

    return () => {
    };
  }, []);

  return (
    <View>
      {data ? (
        <Text>La data recibida es: {JSON.stringify(data)}</Text>
      ) : (
        <Text>Cargando...</Text>
      )}
    </View>
  );
};

export default MyComponent;
