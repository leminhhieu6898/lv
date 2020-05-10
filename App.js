import 'react-native-gesture-handler';
import React, { Component } from "react";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeTabScreen from './screens/HomeScreen'



const Drawer= createDrawerNavigator();
const App = () => {
  return(
    <NavigationContainer>
      <HomeTabScreen />
    </NavigationContainer>
  );
}

export default App;