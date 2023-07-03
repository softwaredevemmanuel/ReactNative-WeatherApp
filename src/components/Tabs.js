import React from 'react';
import CurrentWeather from '../screens/CurrentWeather';
import UpcommingWeather from '../screens/UpcommingWeather';
import City from '../screens/City';
import RowText from '../components/RowText';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'


const Tab = createBottomTabNavigator()


export default function Tabs({ weather }) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: 'lightblue',

        },
        headerStyle: {
          backgroundColor: 'lightblue',

        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: 'tomato',
          textAlign: 'center'
        }
      }}>
      <Tab.Screen
        name={'Current'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'droplet'}
              size={25}
              color={focused ? 'tomato' : 'black'}
            />)
        }} 
      >
        
        {() => <CurrentWeather weatherData = {weather.list[0]}/>}

      </Tab.Screen>

      <Tab.Screen
        name={'Upcoming'}
        component={UpcommingWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'clock'}
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          )
        }} 
      />

      <Tab.Screen
        name={'City'}
        component={City}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'home'}
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          )
        }} 
      />

    </Tab.Navigator>
  )
}
