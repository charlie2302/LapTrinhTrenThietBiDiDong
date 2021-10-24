import React from 'react';
import { StyleSheet, Dimensions, Text, View, Image } from 'react-native';
//để chứa toàn bộ các Component khác trong gói Navigation dùng cho việc quản lý chuyển đổi màn hình như tạo tabs
import { NavigationContainer } from '@react-navigation/native';
//điều hướng chuyển đổi giữa các màn hình
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Foodscreen from './TabScreen/Foodscreen';
import Orderscreen from './screens/OrderScreen';
import Detail from './screens/Detail';
import Edit from './screens/Edit';
import ProfileScreen from './TabScreen/ProfileScreen';
import Notify from './TabScreen/Notify';
import Review from './TabScreen/Review';
//bộ điều hướng dưới tab
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Login from './screens/Login';

const A = ()=>(
  <View>
    <ProfileScreen />
  </View>
)
const B = ()=>(
  <View>
    <Notify />
  </View>
)
const C = ()=>(
  <View>
    <Review />
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
          tabBarActiveTintColor : '#ED7F3B',
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
              name = 'Profile' 
              component = {ProfileScreen} 
              options = { 
                {
                  tabBarLabel : "Profile" ,
                  tabBarIcon : ({color}) =><MaterialIcons name="face-retouching-natural" size={24} color={color} />
                }
              }
        ></Tab.Screen>
         <Tab.Screen
              name = 'Notify' 
              component = {Notify}
              options = {
                {
                  tabBarLabel : "Notify" ,
                  tabBarIcon : ({color}) =><Ionicons name="notifications-outline" size={24} color={color} />
                }
              }
        ></Tab.Screen>
         <Tab.Screen
              name = 'Review' 
              component = {Review}
              options = {
                {
                  tabBarLabel : "NewFeed" ,
                  tabBarIcon : ({color}) =><FontAwesome5 name="user-friends" size={24} color={color} />
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
            <Stack.Screen name = "Login" component = {Login}></Stack.Screen>
            <Stack.Screen 
                name = "TabScreen"
                component = {TabScreen}
                options = {{ headerShown : false}}
            ></Stack.Screen>
            <Stack.Screen name = "Detail" component = {Detail}></Stack.Screen>
            <Stack.Screen name = "Order" component = {Orderscreen}></Stack.Screen>
            <Stack.Screen name = "Profile" component = {ProfileScreen}></Stack.Screen>
            <Stack.Screen name = "Edit" component = {Edit}></Stack.Screen>
            <Stack.Screen name = "Notify" component = {Notify}></Stack.Screen>
            <Stack.Screen name = "Review" component = {Review}></Stack.Screen>
         </Stack.Navigator>
       </NavigationContainer>
    );
};

export default App;