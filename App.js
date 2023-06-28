import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CurrentWeather from './src/components/screens/CurrentWeather';
import UpcommingWeather from './src/components/screens/UpcommingWeather';

export default function App() {
  return (
      <View style={styles.container}>
        <UpcommingWeather/>

      </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  
  },

});
