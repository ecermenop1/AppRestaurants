import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Account from "../screens/Account";

const Stack=createStackNavigator()
const Tab=createBottomTabNavigator();
export default function AccountStack() {
  return (
   
      <Tab.Screen name="account" component={Account} options={{title:"Cuenta"}}/>
    
 
  )
}