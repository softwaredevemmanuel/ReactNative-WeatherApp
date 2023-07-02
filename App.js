import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import Counter from './src/demonstration/Counter';


export default function App() {

  return (
    <NavigationContainer>
      <Counter/>
    </NavigationContainer>
  );
}




