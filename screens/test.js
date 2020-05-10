import 'react-native-gesture-handler';
import React, { Component, useEffect } from "react";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Platform, StyleSheet, Text, View, Button, ActivityIndicator } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootStackScreen from './RootStackScreen';
import MainTabScreen from './MainTabScreen';
import {DrawerContent} from './DrawerContent';
import Profile from './Profile';
import Manages from './Manages';
import Settings from './Settings';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import{ AuthContext } from '../components/context';


const Drawer= createDrawerNavigator();
const ProfileStack=createStackNavigator();
const SettingsStack = createStackNavigator();
const ManagesStack = createStackNavigator();

const Test = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [userToken, setUserToken] = React.useState(null); 

    const authContext = React.useMemo(() => ({
        signIn: async(foundUser) => {
            setUserToken('fgkj');
            setIsLoading(false);
            
          },
          signOut: async() => {
            setUserToken(null);
            setIsLoading(false);
          },
          signUp: () => {
            setUserToken('fgkj');
            setIsLoading(false);
          },
          toggleTheme: () => {
            setIsDarkTheme( isDarkTheme => !isDarkTheme );
          }
        }), []);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [])
    if(isLoading)
    {
        return(
            <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator size="large"/>
            </View>
        )
    }

    return(
    <AuthContext.Provider value={authContext}>
        <NavigationContainer>
            {userToken!==null ? (
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
                <Drawer.Screen name="MainTabScreen" component={MainTabScreen}/>
                <Drawer.Screen name="Profile" component={ProfileStackScreen}/>
                <Drawer.Screen name="Manages" component={ManagesStackScreen}/>
                <Drawer.Screen name="Settings" component={SettingsStackScreen}/>
            </Drawer.Navigator>
            )
        :
        <RootStackScreen />
        }   
        </NavigationContainer>
    </AuthContext.Provider>
    );
}

export default Test;


const ManagesStackScreen = ({navigation}) => (
    <ManagesStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <ManagesStack.Screen name="Manages" component={Manages} options={{
            headerLeft: () => (
                <MaterialIcon.Button name="arrow-left" size={25} backgroundColor="#009387" onPress={() => navigation.goBack()}></MaterialIcon.Button>
            )
            }} />
    </ManagesStack.Navigator>
  );
  
  const SettingsStackScreen = ({navigation}) => (
    <SettingsStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <SettingsStack.Screen name="Settings" component={Settings} options={{
            headerLeft: () => (
                <MaterialIcon.Button name="arrow-left" size={25} backgroundColor="#009387" onPress={() => navigation.goBack()}></MaterialIcon.Button>
            )
            }} />
    </SettingsStack.Navigator>
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
                <MaterialIcon.Button name="arrow-left" size={25} backgroundColor="#009387" onPress={() => navigation.goBack()}></MaterialIcon.Button>
            )
            }} />
    </ProfileStack.Navigator>
    );
  