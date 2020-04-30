import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image,
    TouchableWithoutFeedback,StatusBar, TextInput, Keyboard,
    SafeAreaView, TouchableOpacity, 
    KeyboardAvoidingView } from "react-native";

export default class Register extends Component {
    render() {
        return(
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content" />
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                        <TouchableWithoutFeedback style={styles.container}
                            onPress={Keyboard.dismiss}>
                            <View style={styles.logoContainer}>
                                <View style={styles.logoContainer}>
                                    <Image style={styles.logo}
                                        source={require('../images/register.png')}
                                    ></Image>
                                    <Text style={styles.title}>Đăng ký tài khoản</Text>
                                </View>
                                <View style={styles.infoContainer}>
                                    <TextInput style={styles.input}
                                        placeholder="Nhập tên tài khoản..."
                                        placeholderTextColor='rgba(255,255,255,0.8)'
                                        returnKeyType='next'
                                        autoCorrect={false}
                                        onSubmitEditing={()=> this.refs.txtPassword.focus()}
                                    />
                                        
                                    <TextInput style={styles.input}
                                        placeholder="Nhập mật khẩu"
                                        placeholderTextColor='rgba(255,255,255,0.8)'
                                        returnKeyType='go'
                                        secureTextEntry
                                        autoCorrect={false}
                                        ref={"txtPassword"}
                                    />
                                    <TouchableOpacity style={styles.buttonContainer}>
                                        <Text style={styles.buttonText}>ĐĂNG KÝ</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </KeyboardAvoidingView>
            </SafeAreaView>                 
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(32,53,70)',
        flexDirection: 'column',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    logo: {
        width: 128,
        height: 60
    },
    title: {
        color: '#f7c744',
        fontSize: 18,
        textAlign: 'center',
        opacity: 0.9
    },
    infoContainer: {
        position:'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        padding: 20,
        //backgroundColor: 'green'
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        marginBottom: 20,
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#f7c744',
        paddingVertical: 10
    },
    buttonText: {
        textAlign: 'center',
        color: 'rgb(32, 53, 70)',
        fontWeight: 'bold', 
        fontSize: 18
    }
});