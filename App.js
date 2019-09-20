import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreateAccount from './screens/CreateAccount'
import Home from './screens/Home'
import Orders from './screens/Orders'
import FoodItem from './screens/FoodItem'
import AppNavigator from './AppNavigator'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <CreateAccount />      */}
      {/* <Home /> */}
      {/* <Orders /> */}
      {/* <FoodItem /> */}
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: "7%",
  },
});
