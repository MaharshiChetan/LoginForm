import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, KeyboardAvoidingView } from 'react-native';
import LoginForm from "./LoginForm";

export default class Login extends Component {
    
    image = require('../../images/github.png');

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={this.image}
                    />
                    <Text style={styles.title}>An App made for github using React Native</Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm/>
                </View>
            </KeyboardAvoidingView>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },
    formContainer: {

    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    logo: {
        height: 100,
        width: 100
    },
    title: {
        color: '#fff',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.9
    }
});
