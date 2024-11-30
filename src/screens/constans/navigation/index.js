import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Stack } from 'expo-router';
import WelcomeScreen from '../../screen/WelcomeScreen';

const stack = createNativeStackNavigator();
export default function Appnavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={{
              headerShown: false,  
            }}
        >
         <Stack.Screen name='Home' component={HomeScreen} />
         <Stack.Screen name='Welcome' component={WelcomeScreenScreen} />
        </Stack.Navigator>
    
    </NavigationContainer>
    
  )
}