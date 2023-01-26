import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';


import HomeScreen from "./screens/Home";
import StartMapScren from "./screens/StarMap";
import DailyPicScreen from "./screens/DailyPic";
import SpaceCraftScreen from "./screens/SpaceCraft";

const Stack = createStackNavigator();

function App() {
  return(
      <NavigationContainer>
        <Stack.Navigator initialRoutName="Home" screenOptions={{
          headerShown: false 
        }}> 
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="StarMap" component={StarMapSCreen}/>
          <Stack.Screen name="DailyPic" component={DailyPicSCreen}/>
          <Stack.Screen name="SpaceCraft" component={SpaceCraftSCreen}/>

            </Stack.Navigator>
          </NavigationContainer>


  
  
    );
  }



export  default App();
 

