import React from 'react'
import { SafeAreaView, StyleSheet, FlatList, StatusBar, ImageBackground} from 'react-native'
import Listitem from '../components/Listitem'


export default function UpcommingWeather({weatherData}) {
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
            source={require('../../assets/cloud.jpg')} 
            style={image}
        >   

      <FlatList
        data={weatherData}
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
    },
    header:{
      paddingTop: 40,
      paddingBottom: 20,
      fontSize: 20,
      color: 'white',
      textAlign: 'center'
    }

})
