import 'react-native-gesture-handler';
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Main from './screens/Main';
import Maps from './chart/Maps';
import Charts from './chart/Charts';
import Account from './screens/Account';
import Settings from './screens/Settings';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

/*function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Maps')}
      />
    </View>
  );
}*/

function HomeStackScreen() {
  return(
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Main} />
    </Stack.Navigator>
  );
}
function MapsStackScreen() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Maps" component={Maps} />
    </Stack.Navigator>
  )
}
function ChartsStackScreen() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Charts" component={Charts} />
    </Stack.Navigator>
  )
}
function AccountStackScreen() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  )
}
function SettingsStackScreen() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  )
}


export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) =>{
                let iconName;
                if (route.name === 'Home') {
                  iconName = focused
                  ? 'md-home'
                  : 'md-home';
                } else if (route.name === 'Maps') {
                  iconName = focused
                  ? 'md-globe'
                  : 'md-globe';
                } else if (route.name === 'Charts') {
                  iconName = focused
                  ? 'md-stats'
                  : 'md-stats';
                } else if (route.name === 'Account') {
                  iconName = focused
                  ? 'md-person'
                  : 'md-person';
                } else if (route.name === 'Settings') {
                  iconName = focused
                  ? 'md-settings'
                  : 'md-settings';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: 'green',
              inactiveTintColor: 'gray',
            }}
            >
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Maps" component={MapsStackScreen} />
            <Tab.Screen name="Charts" component={ChartsStackScreen} />
            <Tab.Screen name="Account" component={AccountStackScreen} />
            <Tab.Screen name="Settings" component={SettingsStackScreen} />
          </Tab.Navigator>
          </NavigationContainer>
    );
  }
}
