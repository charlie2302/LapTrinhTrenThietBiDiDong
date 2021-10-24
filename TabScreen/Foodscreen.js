import { StatusBar } from 'expo-status-bar';
// import BottomBar from 'inquirer/lib/ui/bottom-bar';
import React, { useState } from 'react';
// import { render } from 'react-dom';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity} from 'react-native';
import SearchBar from '../components/SearchBar';
import FoodItem from '../components/FoodItem';
import ItemType from '../components/ItemType';
import { Fontisto } from '@expo/vector-icons';

//Gọi json
const Data = require('../Data/Food.json')

//Các mục sản phẩm hay còn gọi là loại sản phẩm
const types = [
  {
    type: 'CAKES',
    image: require('../assets/cake.png'),
  },
  {
    type: 'BREAD',
    image: require('../assets/bread.png'),
  },
  {
    type: 'COFFEE',
    image: require('../assets/coffee.png'),
  },
  {
    type: 'TEA',
    image: require('../assets/tea.png'),
  }
];

const Foodscreen = ({navigation, route}) => { //navigation là cái chuyển hướng các stack screen với nhau
  //con route là cái nhận giá trị giữa screen muốn chuyển và nhận
  // mình ắn login -> home - >giỏ
  // khi từ giỏ ra nó sẽ lấy trong stack ra cái gần nhất đc push vào
  // dựa trên cơ chê stack này thì mới có thể goHome đc
  const renderFood = (item,index) => {
    return <FoodItem key = {index.toString()} navigationFood = {navigation} data={item} />
  }
  const [state, setState] = useState({
    active : 0,
    ObjectAvive : [0,1,2,3]
  })
  function ChangeSelect(index){
     setState({...state, active : state.ObjectAvive[index]})
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.wrap} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <View style={styles.headerTitle}>
              <Text style={styles.heading}>What do you have taste for?</Text>
              <TouchableOpacity>
                <Text style={styles.description}>NgocHuong Bakery & Coffee</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress = {()=>navigation.navigate("Order", types)}>
            <View style={styles.headerCart}>
              <View style={styles.buttonCart}>
                <Fontisto name="shopping-basket-add" size={24} color="white" />
              </View>
            </View>
            </TouchableOpacity>
          </View>
            
          <SearchBar/>
          
          <ScrollView horizontal = {true} showsHorizontalScrollIndicator = {false}>
            {types.map((item, index) => {
              return(
              <TouchableOpacity 
                key = {index.toString()}
                onPress = {()=>ChangeSelect(index)}
              >
                <ItemType background={(state.active == state.ObjectAvive[index] || index === state.active) ? Color : '#fff'} selected = {index ===state.active}  {...item} /> 
              </TouchableOpacity>)
            })}
          </ScrollView>

          <View style={styles.listFood}>
            <Text style={styles.listFoodText}>
              Dishes are ready!!!
            </Text>
            </View>
            <View style={styles.listFd}>
              {state.active === 0 && (Data.Cakes.map(renderFood))}
              {state.active === 1 && (Data.Breads.map(renderFood))}
              {state.active === 2 && (Data.Coffee.map(renderFood))}
              {state.active === 3 && (Data.Tea.map(renderFood))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
const Color = "#ED7F3B"
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    backgroundColor: '#F8F5F2',
    flex: 1,
    padding: 12,
  },
  headerTitle: {
    width: '55%',
  },
  headerCart: {},
  heading: {
    color: '#ED7F3B',
    fontSize: 25,
    fontWeight: 'bold',
    lineHeight: 30,
  },
  description: {
    color: '#ED7F3B',
    marginTop: 5,
  },
  buttonCart: {
    backgroundColor: '#ED7F3B',
    padding: 12,
    flexDirection: 'row',
    borderRadius: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowColor: '#F7CB6B',
    shadowRadius: 2,
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    padding: 12,
    justifyContent: 'space-between',
  },
  listItemType: {
    flexDirection: 'row',
  },
  listFoodText: {
    fontSize: 18,
    color: '#ED7F3B',
  },
  listFd: {
    marginBottom: 15,
  },
  listFood: {
    marginTop: 10,
  }
});


export default Foodscreen;