import React from 'react'
import { SafeAreaView, StyleSheet, Text, FlatList, View, StatusBar, ImageBackground} from 'react-native'
import {Feather} from '@expo/vector-icons'

const DATA = [
          {
            dt_txt: "2022-08-30 16:00:00",
            main: {
                temp_max: 296.31,
                temp_min: 296.2,
            },
            weather: [
              {
                main: "Clear",
              
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
const Item = (props)=>{
    const {dt_txt, min, max, condition} = props

    return(
        <View style={styles.item}>
            <Feather name={'sun'} size={50} color={'white'}/>
            <Text style={styles.date}>{dt_txt}</Text>
            <Text style={styles.temp_min}>{min}</Text>
            <Text style={styles.temp_max}>{max}</Text>
        </View>
    )
}
export default function UpcommingWeather() {
    const renderItem = ({item})=>(
        <Item condition={item.weather[0].main} dt_txt={item.dt_txt} min = {item.main.temp_min} max = {item.main.temp_max}/>
    )
  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground 
            source={require('../../assets/cloud.jpg')} 
            style={styles.image}
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
    item :{
        padding :20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 2,
        backgroundColor: 'pink'
    },
    temp_min:{
        color: 'green',
        fontSize: 20
    },
    temp_max:{
        color: 'red',
        fontSize: 20
    },
    date:{
        color: 'white',
        fontSize: 15
    },
    image:{
        flex: 1
    }

})
