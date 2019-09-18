import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native'


class HeaderText extends Component {
  
  render() {
    const {children} = this.props
    return (
      <View style={styles.parent}>
        <Text style={styles.text}>{children} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    marginVertical: 5,
  },
  text: {
    fontSize: 24
  }
}) 

export default HeaderText
