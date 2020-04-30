import 'react-native-gesture-handler';
import { Container, Text, Content } from 'native-base';
import {Button, View} from 'react-native';
import { Icon } from 'native-base';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default class Main extends Component {
    render() {
        return <View>
            <Text>This is Main screen</Text>
        </View>
    }
}

