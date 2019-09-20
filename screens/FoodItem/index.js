import React, { Component } from 'react'
import { 
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Button from '../../components/Button'

class FoodItem extends Component {
  render() { 
    return ( 
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={foodItemStyles.container}>
          <View style={foodItemStyles.flex}>
            <Ionicons name="md-menu" size={32} color="black" />
            <Ionicons name="md-cart" size={32} color="black" />
          </View>
          <View style={foodItemStyles.flex}>
            <Text style={foodItemStyles.name}>Cheese Burger</Text>
            <View style={{display: 'flex', alignItems: 'flex-end'}}>
              <Text style={{fontSize: 16}}>NGN</Text>
              <Text style={{fontSize: 24, fontWeight: 'bold'}}>200</Text>
            </View>
          </View>
          <View style={foodItemStyles.image}>
          <Image
            style={{height: 100, resizeMode: 'contain'}}
            source={require('../../assets/burger.jpg')}
          />
          </View>
          <View>
            <Text style={{textAlign: "center"}}> Lorem ipsum abdonai additi revasidch adinfjds hdikk djsdni siude is juernej dnksldj9ie iuskd iudkjwdw nhdwdjhwj sioduhsdn udhwdn idfwi.</Text>
          </View>
          <View style={{marginTop: "7%"}}>
            <Text style={{textAlign: "center", fontWeight: "bold"}}>Size</Text>
            <View style={foodItemStyles.sizes}>
              <View style={foodItemStyles.sizeItem}>
                <Text>S</Text>
              </View>
              <View style={foodItemStyles.selectedItem}>
                <Text>M</Text>
              </View>
              <View style={foodItemStyles.sizeItem}>
                <Text>L</Text>
              </View>
            </View>
          </View>
          <Button>Proceed to Checkout</Button>
        </ScrollView>
      </SafeAreaView>
      
    );
  }
}

const foodItemStyles =StyleSheet.create({
  container: {
    marginVertical: "3%",
  },
  flex: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingVertical: "3%",
  },
  name: {
    fontSize: 24,
    width: "40%",
    fontWeight: "bold"
  },
  image: {
    marginVertical: "5%",
  },
  foodItemImage: {
    height: 180,   
  },
  icon: {
    height: 50
  },
  sizes: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: "9%"
  },
  sizeItem: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#ccc',
    borderRadius: 10
  },
  selectedItem: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    // boxShadow: "0px 4px 37px 16px rgba(0,0,0,0.15)"
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height:3
    },
    shadowOpacity: 0.2,
    shadowRadius: 27
  }
})

export default FoodItem;