import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CurrentWeather from './src/components/screens/CurrentWeather';
import UpcommingWeather from './src/components/screens/UpcommingWeather';
import City from './src/components/screens/City';


export default function App() {
  return (
      <View style={styles.container}>
        <City/>

      </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  
  },

});
