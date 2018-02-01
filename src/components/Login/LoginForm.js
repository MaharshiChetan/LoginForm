import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, StatusBar } from "react-native";

export default class LoginForm extends Component {

    state = {
        userName: String,
        passwordInput: String,
    }
    onPress = () => {
        console.log(this.state.passwordInput);
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle = 'light-content'
                />
                <TextInput
                    placeholder="Username or Email"
                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                    returnKeyType="next"
                    style={styles.input}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={userName => this.setState({ userName })}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    autoCorrect={false}
                />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                    secureTextEntry
                    returnKeyType="go"
                    style={styles.input}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    onChangeText={passwordInput => this.setState({ passwordInput })}
                    //ref={input => this.passwordInput = input}
                />
                <TouchableOpacity style={styles.buttonContainer} onPress={this.onPress}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 10,
        color: '#fff',
        paddingHorizontal: 10,
        fontSize: 18,
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: '700',
        opacity: 0.7,
    }
});
