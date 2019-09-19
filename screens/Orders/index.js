import React, {Component} from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import HeaderText from '../../components/HeaderText'
import Button from '../../components/Button'

class Orders extends Component {
  render() { 
    return ( 
      <View>
        <View style={orderStyles.bottomMargin}>
          <HeaderText>My Orders</HeaderText>
          <Text style={orderStyles.greyText}>Welcome to your cart, preview items below</Text>
        </View>
        <View style={orderStyles.orders}>
          <View style={orderStyles.order}>
            <View >
              <Image 
                style={orderStyles.image}
                source={require('../../assets/burger.jpg')}
              />
            </View>
            <View style={orderStyles.info}>
              <Text style={{fontWeight: 'bold'}}>Cheese Burger</Text>
              <Text>Beef, veggie & chilli</Text>
              
            </View>
            <View style={{padding: 7, justifyContent: 'center'}}><Text>NGN 2,700</Text></View>
            <View 
              style={{justifyContent: 'center'}} 
            >
              <View style={{backgroundColor: 'pink', padding: 5, paddingHorizontal: 10, borderRadius: '50%'}}>
                <Ionicons name="md-trash" size={20} color="black" />
              </View>
              
            </View>
          </View>
          <View style={orderStyles.order}>
            <View >
              <Image 
                style={orderStyles.image}
                source={require('../../assets/burger.jpg')}
              />
            </View>
            <View style={orderStyles.info}>
              <Text style={{fontWeight: 'bold'}}>Large Pizza</Text>
              <Text >Extra Cheese & Toppings</Text>
              
            </View>
            <View style={{padding: 7, justifyContent: 'center'}}><Text>NGN 2,070</Text></View>
            <View 
              style={{justifyContent: 'center'}} 
            >
              <View style={{backgroundColor: 'pink', padding: 5, paddingHorizontal: 10, borderRadius: '50%'}}>
                <Ionicons name="md-trash" size={20} color="black" />
              </View>
              
            </View>
          </View>
          <View style={orderStyles.order}>
            <View >
              <Image 
                style={orderStyles.image}
                source={require('../../assets/burger.jpg')}
              />
            </View>
            <View style={orderStyles.info}>
              <Text style={{fontWeight: 'bold'}}>Grilled Turkey</Text>
              <Text>Sauce and Pepper</Text>
              
            </View>
            <View style={{padding: 7, justifyContent: 'center'}}><Text>NGN 3,500</Text></View>
            <View 
              style={{justifyContent: 'center'}} 
            >
              <View style={{backgroundColor: 'pink', padding: 5, paddingHorizontal: 10, borderRadius: '50%'}}>
                <Ionicons name="md-trash" size={20} color="black" />
              </View>
              
            </View>
          </View>
          <View style={orderStyles.order}>
            <View >
              <Image 
                style={orderStyles.image}
                source={require('../../assets/burger.jpg')}
              />
            </View>
            <View style={orderStyles.info}>
              <Text style={{fontWeight: 'bold'}}>Peppersoup</Text>
              <Text>Beef & Mutton</Text>
              
            </View>
            <View style={{padding: 7, justifyContent: 'center'}}><Text>NGN 4,000</Text></View>
            <View 
              style={{justifyContent: 'center'}} 
            >
              <View style={{backgroundColor: 'pink', padding: 5, paddingHorizontal: 10, borderRadius: '50%'}}>
                <Ionicons name="md-trash" size={20} color="black" />
              </View>
              
            </View>
          </View>
        
        </View>
        <View style={orderStyles.flex}>
          <Text>Total:</Text>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>NGN 20,000</Text>
        </View>
        <View>
          <Button>Checkout</Button>         
        </View>
      </View>
    );
  }
}

const orderStyles = StyleSheet.create({
  bottomMargin: {
    marginBottom: '2%'
  },
  greyText: {
    color: "#999"
  },
  flex:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: '3%',
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: "center"
  },
  orders: {
    paddingVertical: "7%"
  },
  order: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 5
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'cover'
  },
  info: {
    flexGrow: 1, 
    flexShrink: 1,
    paddingVertical: 5, 
    paddingHorizontal: 7
}

})
export default Orders;
