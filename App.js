import React, {useState, useEffect} from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import Counter from './src/demonstration/Counter';
import * as Location from 'expo-location';
import { WEATHER_API_KEY } from "@env";
import { useGetWeather } from './src/hooks/useGetWeather';
import ErrorItem from './src/components/ErrorItem';
import OurButton from './src/demonstration/OurButton';

export default function App() {

  const [loading, error, weather] = useGetWeather()
  
  // console.log(loading, error, weather)

  if (weather && weather.list && !loading){
    return (
      <NavigationContainer>
        <Tabs weather= {weather}/>
      </NavigationContainer>
    );
  }

    return(
      <View style={styles.container}>
        {error ? (
          <ErrorItem/>
          ):(
           <ActivityIndicator size={'large'} color={'blue'} />  
          )}
      </View>
    )
}

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    flex: 1,
  }
})



