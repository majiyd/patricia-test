import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login'
import CreateAccount from './screens/CreateAccount'
import FoodItem from './screens/FoodItem'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        {/* <Login /> */}
        {/* <CreateAccount /> */}
        <FoodItem />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF',
    paddingTop: 0,
    padding: "7%",
  },
});
