import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CurrentWeather from './src/components/screens/CurrentWeather';
import UpcommingWeather from './src/components/screens/UpcommingWeather';
import City from './src/components/screens/City';
import RowText from './src/components/RowText';


export default function App() {
  return (
      <View style={styles.container}>
        <CurrentWeather/>

      </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  
  },

});
