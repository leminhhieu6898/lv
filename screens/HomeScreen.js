import 'react-native-gesture-handler';
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './Home';
import Maps from '../chart/Maps';
import Charts from '../chart/Charts';
import Account from './Account';
import Settings from './Settings';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer= createDrawerNavigator();
const Manage= createDrawerNavigator();


function HomeStackScreen({ navigation }) {
  return(
    <Stack.Navigator screenOptions={{
      headerStyle: {
      backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
      fontWeight: 'bold'
      }
  }}>
      <Stack.Screen name="Home" component={Home} options={{
      title:'Overview',
      headerLeft: () => (
          <Ionicons.Button name="md-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Ionicons.Button>
      )
      }} />
    </Stack.Navigator>
  );
}
function MapsStackScreen({ navigation }) {
  return(
    <Stack.Navigator screenOptions={{
      headerStyle: {
      backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
      fontWeight: 'bold'
      }
  }}>
      <Stack.Screen name="Maps" component={Maps} options={{
      title:'Maps',
      headerLeft: () => (
          <Ionicons.Button name="md-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Ionicons.Button>
      )
      }} />
    </Stack.Navigator>
  );
}
function ChartsStackScreen({ navigation }) {
  return(
    <Stack.Navigator screenOptions={{
      headerStyle: {
      backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
      fontWeight: 'bold'
      }
  }}>
      <Stack.Screen name="Charts" component={Charts} options={{
      title:'Charts',
      headerLeft: () => (
          <Ionicons.Button name="md-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Ionicons.Button>
      )
      }} />
    </Stack.Navigator>
  );
}
function AccountStackScreen({ navigation }) {
  return(
    <Stack.Navigator screenOptions={{
      headerStyle: {
      backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
      fontWeight: 'bold'
      }
  }}>
      <Stack.Screen name="Account" component={Account} options={{
      title:'Account',
      headerLeft: () => (
          <Ionicons.Button name="md-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Ionicons.Button>
      )
      }} />
    </Stack.Navigator>
  );
}
function SettingsStackScreen({ navigation }) {
  return(
    <Stack.Navigator screenOptions={{
      headerStyle: {
      backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
      fontWeight: 'bold'
      }
  }}>
      <Stack.Screen name="Settings" component={Settings} options={{
      title:'Settings',
      headerLeft: () => (
          <Ionicons.Button name="md-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Ionicons.Button>
      )
      }} />
    </Stack.Navigator>
  );
}

function Tabs() {
  return(
    <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) =>{
                let iconName;
                if (route.name === 'Trang chủ') {
                  iconName = focused
                  ? 'md-home'
                  : 'md-home';
                } else if (route.name === 'Bản đồ') {
                  iconName = focused
                  ? 'md-globe'
                  : 'md-globe';
                } else if (route.name === 'Biểu đồ') {
                  iconName = focused
                  ? 'md-stats'
                  : 'md-stats';
                } else if (route.name === 'Thông tin') {
                  iconName = focused
                  ? 'md-person'
                  : 'md-person';
                } else if (route.name === 'Cài đặt') {
                  iconName = focused
                  ? 'md-settings'
                  : 'md-settings';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: '#009387',
              inactiveTintColor: 'gray',
            }}
            >
            <Tab.Screen name="Trang chủ" component={HomeStackScreen} />
            <Tab.Screen name="Bản đồ" component={MapsStackScreen} />
            <Tab.Screen name="Biểu đồ" component={ChartsStackScreen} />
            <Tab.Screen name="Thông tin" component={AccountStackScreen} />
            <Tab.Screen name="Cài đặt" component={SettingsStackScreen} />
          </Tab.Navigator>
  )
}

function Drawers() {
  return(
  <Drawer.Navigator
  screenOptions={({ route }) => ({
    drawerIcon: ({ focused, color, size }) =>{
      let iconName;
      if (route.name === 'Trang chủ') {
        iconName = focused
        ? 'md-home'
        : 'md-home';
      } else if (route.name === 'Quản lý') {
        iconName = focused
        ? 'md-briefcase'
        : 'md-briefcase';
      } else if (route.name === 'Lịch sử') {
        iconName = focused
        ? 'md-refresh'
        : 'md-refresh';
      } else if (route.name === 'Thông tin') {
        iconName = focused
        ? 'md-information-circle'
        : 'md-information-circle';
      } else if (route.name === 'Cài đặt') {
        iconName = focused
        ? 'md-settings'
        : 'md-settings';
      }
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  })}
  drawerContentOptions={{
    activeTintColor: '#009387',
    inactiveTintColor: 'gray',
  }}
  >
    <Drawer.Screen name = "Trang chủ" component={Tabs} />
    <Drawer.Screen name="Quản lý" component={MapsStackScreen} />
    <Drawer.Screen name="Lịch sử" component={ChartsStackScreen} />
    <Drawer.Screen name="Thông tin" component={AccountStackScreen} />
    <Drawer.Screen name="Cài đặt" component={SettingsStackScreen} />
  </Drawer.Navigator>
  )
}

export default class HomeScreen extends Component {
  render() {
    return (
        <Drawers />    
    );
  }
}
