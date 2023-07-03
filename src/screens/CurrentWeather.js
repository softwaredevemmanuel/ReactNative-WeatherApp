import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType';

export default function CurrentWeather({weatherData}) {
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    highlowWrapper,
    highlow,
    bodyWrapper,
    description,
    message,
    image
  } = styles

  console.log(weatherData)

  const { main: {
    temp,
    feels_like,
    temp_max,
    temp_min },
    weather
  } = weatherData
  
  const weatherCondition = weather[0]?.main

  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor }]}>
      <ImageBackground
        source={require('../../assets/cloud.jpg')}
        style={image}
      >
        <View style={container}>

          <Feather name={weatherType[weatherCondition]?.icon} size={104} color="white" />
          <Text style={tempStyles}>{`${temp}°`} </Text>
          <Text style={feels}>{`Feels like ${feels_like}°`}</Text>

          <RowText
            messageOne={`High: ${temp_max}° `}
            messageTwo={`Low: ${temp_min}°`}
            containerStyles={highlowWrapper}
            messageOneStyles={highlow}
            messageTwoStyles={highlow}
          />

        </View>
        <RowText
          messageOne={weather[0]?.description}
          messageTwo={weatherType[weatherCondition]?.message}
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
  tempStyles: {
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
  description: {
    fontSize: 48,
    color: 'white'


  },
  message: {
    fontSize: 30,
    color: 'white'

  },
  image: {
    flex: 1
  }

});
