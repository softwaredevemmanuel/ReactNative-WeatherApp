import React from 'react'
import {StyleSheet, Text, View, StatusBar} from 'react-native'
import {Feather} from '@expo/vector-icons'


export default ListItem = (props)=>{
    const {dt_txt, min, max, condition} = props
    const {item, date, temp_min, temp_max} = styles

    return(
        <View style={item}>
            <Feather name={'sun'} size={50} color={'white'}/>
            <Text style={date}>{dt_txt}</Text>
            <Text style={temp_min}>{min}</Text>
            <Text style={temp_max}>{max}</Text>

        </View>
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
        borderColor: 'white',
        backgroundColor: 'black'
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

})
