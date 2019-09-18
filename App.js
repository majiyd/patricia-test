import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login'
import CreateAccount from './screens/CreateAccount'
import FoodItem from './screens/FoodItem'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
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
