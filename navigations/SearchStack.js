import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../screens/Searcht';

const Stack=createStackNavigator()
const Tab=createBottomTabNavigator();
export default function SearchStack() {
  return (
   
      <Tab.Screen name="search" component={Search} options={{title:"Buscar"}}/>
 
  )
}