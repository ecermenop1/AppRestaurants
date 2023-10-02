import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


const Stack=createStackNavigator()

export default function TopRestaurantsStack() {
  return (
      <Stack.Screen name="top-restaurants" component={TopRestaurantsStack} options={{title:"Los Mejores Restaurantes"}}/>
    
  )
}