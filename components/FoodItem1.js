import React, { useEffect } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
const w = Dimensions.get("screen").width;
const FoodItem1 = ({data, isDelivery, fee}) => {
    useEffect(()=>{
        console.log(data)
    })
  return (
    <View style={styles.conatiner}>
            <Image style={styles.image} source={data.image}/>
            <View style={styles.body}>
                <Text style={styles.name}>{data.name}</Text>
                <View style={styles.end}>
                    <Text style={styles.restaurant}>{data.restaurant}</Text>
                    <Text style={styles.total}>
                        {Number(data.price).toFixed(3)}đ x {data.quantity}
                    </Text>
                </View>
            </View>
    </View>
  );
};

export default FoodItem1;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        paddingLeft: 10,
    },
    image: {
        width: w / 3,
        height: w / 4,
        borderRadius: 10,
        // marginLeft: 12,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 17,
        lineHeight: 20,
    },

    conatiner: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    restaurant: {
        fontSize: 14,
        color: '#222',
    },
    total: {
        fontSize: 14,
        color: '#222',
    },
    end: {
        alignItems: 'center',
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginTop : 20
    },
    imageCon: {},
});