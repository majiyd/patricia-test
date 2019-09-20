import React, { Component } from 'react'
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

class Button extends Component {
  render() { 
    const {children} = this.props
    return ( 
      <View style={{
        marginTop: "7%",
        marginBottom: "5%"
      }}>
        <TouchableOpacity 
          style={buttonStyles.button} 
          activeOpacity={.5}
        >
          <Text style={buttonStyles.buttonText}>
            {children}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: "#e35f38",
    padding: 15,
    borderRadius: 10,   
  },
  buttonText:{
    color: "white",
    textAlign: "center",
    textTransform: "uppercase"

  },

})

export default Button;