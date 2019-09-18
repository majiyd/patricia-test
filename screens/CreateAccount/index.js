import React, {Component} from 'react'
import {
  Text,
  View,
  KeyboardAvoidingView,
  StyleSheet
} from "react-native";
import HeaderText from '../../components/HeaderText'
import FormInput from '../../components/FormInput'
import Button from '../../components/Button'

class Login extends Component {
  render() { 
    return ( 
      <KeyboardAvoidingView 
        behaviour="padding"
      >
        <View style={loginStyles.bottomMargin}>
          <HeaderText>Create your Account</HeaderText>
          <Text style={loginStyles.greyText}>It's free and easy to set up!</Text>
        </View>
        <View style={loginStyles.form}>
          <FormInput placeholder={"Username"}/>
          <FormInput placeholder={"Email"}/>
          <FormInput placeholder={"Password"}/>
          <Button>Signup</Button>
          <View style={[loginStyles.flex, loginStyles.justifyCenter]}>
            <Text style={loginStyles.plainText}>Existing user?</Text>
            <Text style={loginStyles.actionText}> Signin</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

loginStyles = StyleSheet.create({
  bottomMargin: {
    marginBottom: '8%'
  },
  greyText: {
    color: "#999"
  },
  form:{
    paddingVertical: "3%"
  },
  flex:{
    display: 'flex',
    flexDirection: 'row'
  },
  rememberMe:{
    justifyContent: "space-between",
    marginBottom: "5%"
  },
  rememberMeText: {
    marginTop: 5,
  },
  plainText: {
    color: "#999"
  },
  actionText: {
    color: "#e35f38"
  },
  justifyCenter: {
    justifyContent: "center"
  }

})
export default Login;
