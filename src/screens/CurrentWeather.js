import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType';

export default function CurrentWeather() {
  const {wrapper, container, temp, feels, highlowWrapper, highlow, bodyWrapper, description, message, image} = styles
  return (
    <SafeAreaView style={wrapper}>
        <ImageBackground 
            source={require('../../assets/cloud.jpg')} 
            style={image}
        >  
      <View style={container}>

        <FontAwesome5 name="cloud-sun" size={104} color="black" />
          <Text style={temp}>6</Text>
          <Text style={feels}>Feels like a 5</Text>

          <RowText 
            messageOne={'High: 8'} 
            messageTwo={'Low: 6'} 
            containerStyles={highlowWrapper} 
            messageOneStyles={highlow} 
            messageTwoStyles={highlow}
            />
      
      </View>
      <RowText 
            messageOne={'Its Sunny'} 
            messageTwo={weatherType['Thunderstorm'].message} 
            containerStyles={bodyWrapper} 
            messageOneStyles={description} 
            messageTwoStyles={message}
            />
      </ImageBackground>

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
    justifyContent: 'center',
    marginTop: 30
  },
  temp: {
    fontSize: 48,
  },
  feels: {
    fontSize: 30,

  },
  highlow: {
    fontSize: 20

  },
  highlowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    backgroundColor: 'black',
    paddingLeft: 25,
    paddingBottom: 40
  },
  description:{
    fontSize: 48,
    color: 'white'


  },
  message:{
    fontSize: 30,
    color: 'white'

  },
  image:{
    flex: 1
  }

});