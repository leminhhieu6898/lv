import 'react-native-gesture-handler';
import { Container, Text, Content } from 'native-base';
import { Icon } from 'native-base';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default class Charts extends Component {
    render() {
        return <Container>
            <Text>This is Charts screen</Text>
        </Container>
    }
}