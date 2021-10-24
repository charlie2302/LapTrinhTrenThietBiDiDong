import React from 'react';
import { StyleSheet, Dimensions, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Foodscreen from './TabScreen/Foodscreen';
import Orderscreen from './screens/OrderScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';


const w = Dimensions.get("screen").width;
const Detail = ({navigation, route})=>{
  const {background, quantity, name, currency, promotion } = route.params;
  return(
    <View>
      <Image style = {{ height : 250, width : w}} source = {{uri : background}}/>
      <Text style = {{fontSize: 30, fontWeight: 'bold', marginLeft: 10}}>{name}</Text>
      <Text style = {{fontSize: 20, marginTop: 15, marginLeft: 10}}>Còn {quantity} Bánh</Text>
      <Text style = {{fontSize: 20, marginTop: 2, marginLeft: 10}}>Mua lẻ: {currency} </Text>
      <Text style = {{fontSize: 20, marginTop: 2, marginLeft: 10}}>Ưu đãi: {promotion} </Text>
    </View>
  )
}

const A = ()=>(
  <View>
    <Text>A</Text>
  </View>
)
const B = ()=>(
  <View>
    <Text>B</Text>
  </View>
)
const C = ()=>(
  <View>
    <Text style = {{fontSize : 50}}>C</Text>
  </View>
)
const Tab = createBottomTabNavigator();
const TabScreen = ()=>{
  return (
    <Tab.Navigator
      screenOptions = {
        {
          tabBarLabelStyle : {
            color : 'black',
            fontSize : 14
          },
          tabBarActiveTintColor : '#D9A737',
          tabBarInactiveTintColor : 'black',
          headerShown : false
        }
      }
    >
        <Tab.Screen
              name = 'Home' 
              component = {Foodscreen}
              options = {
                {
                  tabBarLabel : "Home" ,
                  tabBarIcon : ({color}) =><AntDesign name="home" size={24} color={color} />
                }
              }
        ></Tab.Screen>
        <Tab.Screen
              name = 'AP' // thay o tren nay/// cai name kieu nhu ten bien.. neu ko dat  lable no tu dong lay mac dinh la lable
              component = {A} //Sau cai nay dien ten cua screen? Nhu Food
              options = { 
                {
                  tabBarLabel : "Profile" ,/// thay ten vao day @@ hoac la xoa cai nay di
                  tabBarIcon : ({color}) =><AntDesign name="home" size={24} color={color} />
                }
              }
        ></Tab.Screen>
         <Tab.Screen
              name = 'B' 
              component = {B}
              options = {
                {
                  tabBarLabel : "Setting" ,
                  tabBarIcon : ({color}) =><AntDesign name="home" size={24} color={color} />
                }
              }
        ></Tab.Screen>
         <Tab.Screen
              name = 'CA' 
              component = {C}
              options = {
                {
                  tabBarLabel : "Notify" ,
                  tabBarIcon : ({color}) =><AntDesign name="home" size={24} color={color} />
                }
              }
        ></Tab.Screen>
    </Tab.Navigator>
  )
}


const Stack = createNativeStackNavigator();
const App = () => {
    return (
       <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen 
                name = "TabScreen"
                component = {TabScreen}
                options = {{ headerShown : false}}
            ></Stack.Screen>
            <Stack.Screen name = "Detail" component = {Detail}></Stack.Screen>
            <Stack.Screen name = "Order" component = {Orderscreen}></Stack.Screen>
         </Stack.Navigator>
       </NavigationContainer>
    );
};

export default App;