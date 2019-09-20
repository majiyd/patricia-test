import React from 'react';
import { Button, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './screens/Home'
import Orders from './screens/Orders'
import FoodItem from './screens/FoodItem'
import Login from './screens/Login'
import CreateAccount from './screens/CreateAccount'

const Navigators = (props)=>{
  return (
  <View style={{paddingTop: 50, display: 'flex', alignItems: 'space-between'}}>
    <Button
      style={{marginBottom:30}}
      title="Home"
      onPress={() => props.navigation.navigate('Home')}
    />
    <Button
    style={{marginBottom:30}}
      title="Orders"
      onPress={() => props.navigation.navigate('Orders')}
    />
    <Button
    style={{marginBottom:30}}
      title="FoodItem"
      onPress={() => props.navigation.navigate('FoodItem')}
    />
    <Button
    style={{marginBottom:30}}
      title="Login"
      onPress={() => props.navigation.navigate('Login')}
    />
    <Button
    style={{marginBottom:30}}
      title="CreateAccount"
      onPress={() => props.navigation.navigate('CreateAccount')}
    />
  </View>)
}
const AppNavigator = createStackNavigator({
  Home:  Home ,
  Orders: Orders,
  FoodItem: FoodItem,
  Navigators: Navigators,
  Login: Login,
  CreateAccount: CreateAccount
},
{
  initialRouteName: 'Navigators',
});

export default createAppContainer(AppNavigator);