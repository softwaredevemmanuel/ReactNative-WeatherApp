import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function OurButton() {
    const onPress = () =>{
        console.log('pressed')
    }
  return (
    <TouchableOpacity style={StyleSheet.container} onPress={onPress}>
        <Text style={styles.buttonText}>Hello</Text> 
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        elevation: 8,
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 5
    },
    buttonText:{
        fontSize: 15,
        color: 'white',
        alignSelf: 'center'
    }
})