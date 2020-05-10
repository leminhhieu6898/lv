import 'react-native-gesture-handler';

import React from 'react';
import { View, StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch
} from 'react-native-paper';
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';

import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

import{ AuthContext } from '../components/context';

import Home from './Home';
import Maps from '../chart/Maps';
import Charts from '../chart/Charts';
import Profile from './Profile';

import { SafeAreaProvider } from 'react-native-safe-area-context';

const HomeStack = createStackNavigator();
const MapsStack = createStackNavigator();
const ChartsStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="md-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Maps"
        component={MapsStackScreen}
        options={{
          tabBarLabel: 'Maps',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="md-globe" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Charts"
        component={ChartsStackScreen}
        options={{
          tabBarLabel: 'Charts',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="md-stats" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="md-person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={Home} options={{
        title:'Overview',
        headerLeft: () => (
            <Icon.Button name="md-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</HomeStack.Navigator>
);

const MapsStackScreen = ({navigation}) => (
<MapsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <MapsStack.Screen name="Maps" component={Maps} options={{
        headerLeft: () => (
            <Icon.Button name="md-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</MapsStack.Navigator>
);

const ChartsStackScreen = ({navigation}) => (
<ChartsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <ChartsStack.Screen name="Charts" component={Charts} options={{
        headerLeft: () => (
            <Icon.Button name="md-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</ChartsStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => (
<ProfileStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <ProfileStack.Screen name="Profile" component={Profile} options={{
        headerLeft: () => (
            <Icon.Button name="md-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</ProfileStack.Navigator>
);

