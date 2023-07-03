import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function ErrorItem() {
  return (
    <View style = {styles.container}>
        <Text style={styles.errorMessage}> Sorry Something went Wrong</Text>
        <Feather name={'frown'} size={100} color={'white'}/>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorMessage:{
        fontSize: 30,
        color : 'white',
        marginHorizontal: 10,
        textAlign: 'center'
    }
})