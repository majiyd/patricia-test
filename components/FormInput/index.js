import React, { Component } from 'react';
import { StyleSheet, TextInput, View  } from 'react-native';

class FormInput extends Component {
  
  render() { 
    return ( 
      <View style={formInputStyles.container}>
        <TextInput
          style={formInputStyles.input}
          autoCorrect={false}
          placeholder={this.props.placeholder}
          placeholderTextColor="#ccc"
          underlineColorAndroid="#888"
          clearButtonMode="always"
        />
      </View>
    );
  }
}

const formInputStyles = StyleSheet.create({
  container: {
    paddingVertical: "2%"
  },
  input:{
    paddingLeft: 2,
    paddingVertical: 10
  }

})
export default FormInput;