import React from "react";
import { 
    SafeAreaView, 
    Text,  
    StyleSheet, 
    ImageBackground, 
    StatusBar,
    View
} from "react-native";
import {Feather} from '@expo/vector-icons'
import IconText from "../components/IconText";



export default function City() {
    const {
        container, 
        cityName, 
        cityText, 
        countryName, 
        populationWrapper, 
        populationText, 
        riseSetWrapper, 
        riseSetText,
        rowLayout,
        imageLayout
    } = styles

  return (
    <SafeAreaView style={container}>
        <ImageBackground 
            source={require('../../assets/cloud.jpg')} 
            style = {imageLayout}>
            
            <View style = {styles.section}>
                <Text style={[cityName, cityText]}>London</Text>
                <Text style={[countryName, cityText]}>UKs</Text>
                <View style={[populationWrapper, rowLayout]}>
                    <IconText 
                    iconName = {'user'} 
                    iconColor = {'white'} 
                    bodyText={8000} 
                    bodyTextStyles={populationText}/>

                </View>
                <View style={[riseSetWrapper, rowLayout]}>
                    <IconText 
                        iconName={'sunrise'} 
                        iconColor={'white'} 
                        bodyText={'10:46:58am'} 
                        bodyTextStyles={riseSetText}/>

                    
                    <IconText 
                        iconName={'sunset'} 
                        iconColor={'black'} 
                        bodyText={'17:46:58pm'} 
                        bodyTextStyles={riseSetText}/>
                

                </View>
            </View>

        </ImageBackground>
    </SafeAreaView>
  )
}

const styles= StyleSheet.create({
    container:{
        flex : 1,
        marginTop: StatusBar.currentHeight || 0
    },
    section:{
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 16,
        marginTop: 1
    },
    imageLayout:{
        flex: 1,
    },
    cityName:{
   
        fontSize: 50,
       
    },
    countryName:{
        fontSize: 30,
    },
    cityText:{
        justifyContent: 'center',
        alignSelf: 'center',
    },
    populationWrapper:{
        justifyContent:'center',
        marginTop: 30,
    },
    populationText:{
        fontSize: 25,
        marginLeft: 7.5,
    },
    riseSetWrapper:{
        justifyContent: 'space-around',
        marginTop: 30
    },
    riseSetText:{
        fontSize: 25,
        color: 'green'
    },
    rowLayout:{
        flexDirection:'row',
        alignItems: 'center'
    }
})
