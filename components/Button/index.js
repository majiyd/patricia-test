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

buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: "#e35f38",
    padding: 15,
    borderRadius: 10,
    textTransform: "uppercase"
  },
  buttonText:{
    color: "white",
    textAlign: "center"

  },

})

export default Button;