import React from 'react';
import CurrentWeather from '../components/screens/CurrentWeather';
import UpcommingWeather from '../components/screens/UpcommingWeather';
import City from '../components/screens/City';
import RowText from '../components/RowText';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'


const Tab = createBottomTabNavigator()


export default function Tabs() {
  return (
    <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey'
        }}>
        <Tab.Screen name={'Current'} component={CurrentWeather} options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'droplet'}
              size={25}
              color={focused ? 'tomato' : 'black'} 
              />)
        }} />
        <Tab.Screen name={'Upcoming'} component={UpcommingWeather} options={{
          tabBarIcon: ({focused}) =>(
            <Feather name={'clock'} size={25} color={focused ? 'tomato' : 'black'}
            />
          )
        }} />
        <Tab.Screen name={'City'} component={City} options={{
          tabBarIcon: ({focused}) =>(
            <Feather name={'home'} size={25} color={focused ? 'tomato' : 'black'}
            />
          )
        }} />
      </Tab.Navigator>
  )
}
