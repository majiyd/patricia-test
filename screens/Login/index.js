import React, {Component} from 'react'
import {
  Text,
  View,
  KeyboardAvoidingView,
  CheckBox,
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
          <HeaderText>Welcome Back!</HeaderText>
          <Text style={loginStyles.greyText}>Login to your account</Text>
        </View>
        <View style={loginStyles.form}>
          <FormInput placeholder={"username"}/>
          <FormInput placeholder={"password"}/>
          <View style={[loginStyles.flex, loginStyles.rememberMe]}>
            <View style={loginStyles.flex}>
              <CheckBox />
              <Text style={[loginStyles.rememberMeText, loginStyles.plainText]}>Remember Me</Text>
            </View>
            <Text style={loginStyles.actionText}>Forgot password?</Text>
          </View>
          <Button>Login</Button>
          <View style={[loginStyles.flex, loginStyles.justifyCenter]}>
            <Text style={loginStyles.plainText}>New user?</Text>
            <Text style={loginStyles.actionText}> Signup</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const loginStyles = StyleSheet.create({
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
