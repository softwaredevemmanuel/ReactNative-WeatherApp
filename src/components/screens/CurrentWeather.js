import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function CurrentWeather() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>

      <FontAwesome5 name="cloud-sun" size={104} color="black" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like a 5</Text>
        <View style={styles.highlowWrapper}>
          <Text style={styles.highlow}>High: 8</Text>
          <Text style={styles.highlow}>Low: 6</Text>

        </View>
      </View>

      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>Its sunny</Text>
        <Text style={styles.message}>Its perfect t-Shirt weather</Text>
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 30
  },
  temp: {
    color: 'blue',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'green'

  },
  highlow: {
    color: 'red',
    fontSize: 20

  },
  highlowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    backgroundColor: 'orange',
    paddingLeft: 25,
    marginBottom: 40
  },
  description:{
    fontSize: 48,

  },
  message:{
    fontSize: 30
  }

});
