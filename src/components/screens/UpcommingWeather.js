import React from 'react'
import { SafeAreaView, StyleSheet, Text, FlatList, StatusBar, ImageBackground} from 'react-native'
import Listitem from '../Listitem'
const DATA = [
          {
            dt_txt: "2022-08-30 16:00:00",
            main: {
                temp_max: 296.31,
                temp_min: 296.2,
            },
            weather: [
              {
                main: "y",
              
              }
            ]
        },
        {
            dt_txt: "2022-08-30 16:00:01",
            main: {
                temp_max: 296.31,
                temp_min: 296.2,
            },
            weather: [
              {
                main: "Rain",
              
              }
            ]
        },
        {
            dt_txt: "2022-08-30 16:00:02",
            main: {
                temp_max: 296.31,
                temp_min: 296.2,
            },
            weather: [
              {
                main: "Cloud",
              
              }
            ]
        },   
        
]

export default function UpcommingWeather() {
    const renderItem = ({item})=>(
        <Listitem 
        condition={item.weather[0].main} 
        dt_txt={item.dt_txt} 
        min = {item.main.temp_min} 
        max = {item.main.temp_max}/>
    )
    const {container, image} = styles
  return (
    <SafeAreaView style={container}>
        <ImageBackground 
            source={require('../../../assets/cloud.jpg')} 
            style={image}
        >   
        <Text> Upcoming Weather</Text> 

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt_txt}
      />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // backgroundColor: 'orange',
        marginTop: StatusBar.currentHeight || 0

    },
    image:{
        flex: 1
    }

})
