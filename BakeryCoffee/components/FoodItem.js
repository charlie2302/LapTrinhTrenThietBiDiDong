import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LoadImg from '../components/LoadImg'
const FoodItem = ({ data,navigationFood }) => {
   
    return (
        <View style={styles.container}>
            <View>
                <Image source = {{uri : data.background}} style={styles.image}/>
                <View style={styles.quantityView}>
                    <Text style={styles.quantityText}>{data.quantity} Bánh</Text>
                </View>
            </View>

           <TouchableOpacity onPress = {()=>navigationFood.navigate("Detail", data)}>
            <Text style={styles.name}>
                    {data.name}
                </Text>

                <Text style={styles.description}>
                    {data.currency}
                </Text>

                <Text style={styles.description}>
                    {data.promotion}
                </Text>
           </TouchableOpacity>

            <View style={styles.smileList}>
                <Image 
                    source={require('../assets/smile.png')}
                    style={styles.icon}
                />

                <Text style={styles.smile}>
                    {data.smile}%
                </Text>
            </View>
        </View>
    );
};

export default FoodItem;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#F1F2F6',
        borderRadius: 10,
        marginTop: 15,
    },
    image: {
        width: '100%',
        height: 180,
        borderRadius: 10,
    },
    name: {
        color: '#D9A737',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 8,
    },
    description: {
        color: '#ECC164',
        fontWeight: 'bold',
        fontSize: 17,
        marginVertical: 5,
    },
    smile: {
        color: '#ECC164',
        fontWeight: 'bold',
        fontSize: 17,
        marginLeft: 5,
    },
    smileList: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityView: {
        position: 'absolute',
        backgroundColor: '#D9A737',
        padding: 12,
        borderRadius: 10,
        bottom: 10,
        left: 10,
    },
    quantityText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    }
});