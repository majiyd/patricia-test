import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreateAccount from './screens/CreateAccount'
import Home from './screens/Home'
import Orders from './screens/Orders'
import FoodItem from './screens/FoodItem'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <CreateAccount />      */}
      {/* <Home /> */}
      {/* <Orders /> */}
      <FoodItem />
    </View>
  );
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
