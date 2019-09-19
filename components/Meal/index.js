import React, { Component } from 'react'
import { 
  View,
  Text
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class Meal extends Component {
  render() { 
    return ( 
      <View>
        <View>
          <Text>Image</Text>
        </View>
        <View>
          <Text>Name</Text>
          <Text>Description</Text>
          <View>

          </View>
        </View>
      </View>
    );
  }
}

export default Meal;