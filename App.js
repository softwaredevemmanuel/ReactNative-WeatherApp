import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CurrentWeather from './src/components/screens/CurrentWeather';
import UpcommingWeather from './src/components/screens/UpcommingWeather';
import City from './src/components/screens/City';
import RowText from './src/components/RowText';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {

  return (
    <NavigationContainer>

      <View style={styles.container}>
        <CurrentWeather/>
      </View>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  
  },

});
