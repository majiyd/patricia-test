import React, {Component} from 'react'
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  SafeAreaView
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import HeaderText from '../../components/HeaderText'
import Meal from '../../components/Meal'

class Home extends Component {
  render() { 
    return ( 
      
      <SafeAreaView style={{flex: 1}}>
      <ScrollView >
        <View style={[homeStyles.flex, homeStyles.justifyEnd]}>
          <Ionicons name="md-cart" size={20} color="black" />
        </View>
        <View style={homeStyles.bottomMargin}>
          <HeaderText>Hello John</HeaderText>
          <Text style={homeStyles.greyText}>Select your meal for the day</Text>
        </View>
        {/* search starts */}
        <View style={homeStyles.search}>
          <View>
            <Ionicons name="md-search" size={24} color="black" />
          </View>
          <View style={homeStyles.input}>
            <TextInput 
              style={{flex: 1, fontSize: 16}}
              autoCorrect={false}
              placeholder={"search for meals, dishes"}
              placeholderTextColor="black"
              underlineColorAndroid="transparent"
            />
          </View>
        </View>
        {/*search ends  */}
        {/* meals start */}
        <View>
          <Meal 
            name={"Cheese Burger"}
            description={"Beef Veggie & chilli"}
            image={"../../../assets/cheese-burger.jpg"}
          />
          <Meal 
            name={"Jollof Rice"}
            description={"Grilled Chicken, Veggies & Sauce"}
          />
        </View>
        {/* meals end */}
        {/* recomendation starts */}
        <View>
          <View style={homeStyles.flex}>
            <Text style={{flex: 1, fontWeight: 'bold'}}>Recommended</Text>
            <Text>View all</Text>
          
          </View>
          <View style={[homeStyles.flex, homeStyles.justifySpace]}>
            <Image
              style={homeStyles.image}
              source={require('../../assets/cheese-burger.jpg')}
            />
            <Image
              style={homeStyles.image}
              source={require('../../assets/jollof-rice.jpg')}
            />
            <Image
              style={homeStyles.image}
              source={require('../../assets/cheese-burger.jpg')}
            />
            <Image
              style={homeStyles.image}
              source={require('../../assets/jollof-rice.jpg')}
            />
          </View>
        </View>
        {/* recomendation ends */}
      </ScrollView></SafeAreaView>
    );
  }
}

const homeStyles = StyleSheet.create({
  bottomMargin: {
    marginBottom: '2%'
  },
  greyText: {
    color: "#999"
  },
  flex:{
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: '3%',
  },
  justifySpace: {
    justifyContent: "space-around"
  },
  justifyEnd: {
    justifyContent: 'flex-end'
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 10
  },
  search: {
    backgroundColor: '#ccc',
    display: 'flex',
    flexDirection: 'row',
    padding: '3%',
    marginVertical: '3%',
    marginBottom: '5%',
    borderRadius: 10,
  },
  input: {
    display: 'flex',
    flex: 1,
    marginLeft: '4%',
    
  }
  
})
export default Home;
