import React from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import FoodItem1 from './FoodItem1';
// import Swipeable from 'react-native-swipeable';

const mocks = [
    {
        name: 'Plain Croissant - Bánh sừng bò',
        restaurant: 'Harper 7',
        price: 25,
        image: require('../assets/SungBo.png'),
        quantity: 1,
    },
    {
        name: 'Brioche - Bánh hoa cúc',
        restaurant: 'Harper 7',
        price: 30,
        image: require('../assets/HoaCuc.png'),
        quantity: 1,
    },
];

const ListFood = () => {
    const renderFood = (item) => {
        return <FoodItem1 data={item} />;
    };
    
//     const rightButtons = [
//     <View style={styles.button}>
//         <Pressable>
//             <Image source={require('../assets/delete.png')}/>
//         </Pressable>,
//     </View>
// ];
//     const renderFood = (item) => {
//         return (
//             <Swipeable style={styles.} rightButtons={rightButtons}>
//               <FoodItem1 data={item} />
//             </Swipeable>
//           );
//     };
    return (
        <View style={styles.container}>
            
            <View style={styles.listFood}>
                {mocks.map((item,index)=>(
                     <FoodItem1 data ={item} key = {index.toString()} isDelivery= {true}  fee={5} />
                ))}
            </View>
        </View>
    );
};

export default ListFood;

const styles = StyleSheet.create({
    container: {},
    listFood: {

    },
    // button: {
    //     justifyContent: 'center',
    //     marginTop: 40,
    // },
});