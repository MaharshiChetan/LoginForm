import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Splash from "./Splash";
import Login from "./src/components/Login/Login";

export default class App extends Component {
  render() {
    return (
      <Login />
    );
  }
}