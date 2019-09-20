import React, { Component } from 'react'
import { 
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class Meal extends Component {
  render() { 
    const { name, description} = this.props
    return ( 
      <View style={mealStyles.meal}>
        <View>
          <Image 
            source={require(`../../assets/jollof-rice.jpg`)}
            style={mealStyles.image}
          />
        </View>
        <View style={{padding: '3%'}}>
          <Text style={mealStyles.name}>{name}</Text>
          <Text style={{paddingBottom: 5}}>{description}</Text>
          <View style={mealStyles.flex}>
            <Ionicons name="md-star" size={24} color="gold" />
            <Ionicons name="md-star" size={24} color="gold" />
            <Ionicons name="md-star" size={24} color="gold" />
            <Ionicons name="md-star" size={24} color="gold" />
            <Ionicons name="md-star" size={24} color="gold" />
          </View>
        </View>
      </View>
    );
  }
}

const mealStyles = StyleSheet.create({
  flex: {
    display: 'flex',
    flexDirection: 'row',
  },
  meal: {
    marginBottom: 15,
    borderRadius: 10,
    marginTop: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2
  },
  name: {
    fontWeight: 'bold',
    paddingVertical: 5
  },
  image: {
    height: 120,
    resizeMode: 'cover',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  }
})
export default Meal;