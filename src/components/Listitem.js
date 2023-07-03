import React from 'react'
import {StyleSheet, Text, View, StatusBar} from 'react-native'
import {Feather} from '@expo/vector-icons'
import { weatherType } from '../utilities/weatherType'
import moment from 'moment'


export default ListItem = (props)=>{
    const {dt_txt, min, max, condition} = props
    const {item, date, temp_min, temp_max, dateTextWrapper} = styles

    return(
        <View style={item}>
            <Feather name={weatherType[condition].icon} size={50} color={'white'}/>
            <View style={styles.dateTextWrapper}>
                <Text style={date}>{moment(dt_txt).format('ddd')}</Text>
                <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
            </View>
            
            <Text style={temp_min}>{`${Math.round(min)} °/ ${Math.round(max)}`}</Text>

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
    dateTextWrapper:{
        flexDirection:'column'
    }

})
