import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import LineChartApp from './src/screen/linechart'; 

export default function App() {
  return (
    <View>
      <LineChartApp /> 
      <StatusBar style="auto" />
    </View>
  );
}