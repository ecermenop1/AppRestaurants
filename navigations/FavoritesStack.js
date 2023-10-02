import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favorites from '../screens/Favorites';

const Stack=createStackNavigator()
const Tab=createBottomTabNavigator();
export default function FavoritesStack() {
  return (
  
      <Tab.Screen name="favoritos" component={Favorites} options={{title:"Favoritos"}}/>
    

  )
}