import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const FoodItem = ({ data, navigationFood }) => {
   
    return (
        <View style={styles.container}>
            <View>
                <Image source = {{uri : data.background}} style={styles.image}/>
                <View style={styles.quantityView}>
                    <Text style={styles.quantityText}>{data.quantity}</Text>
                </View>
            </View>

           <TouchableOpacity onPress = {()=>navigationFood.navigate("Detail", data)}>
            <Text style={styles.name}>
                    {data.name}
                </Text>

                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.description}>
                        {data.currency}
                    </Text>
                    <Text style={{
                        color: '#ED7F3B',
                        fontWeight: 'bold',
                        fontSize: 17,
                        marginVertical: 5,
                        marginLeft: 120,
                    }}>
                        {data.promotion}
                    </Text>
                </View>
                

                
           </TouchableOpacity>

            <View style={styles.smileList}>
                <AntDesign style={styles.icon} name="smileo" size={24} color="#ED7F3B" />

                <Text style={styles.smile}>
                    {data.smile}%
                </Text>
            </View>

            <View>
                <Text style={styles.description}>
                    {data.description}
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
        color: '#ED7F3B',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 8,
    },
    description: {
        color: '#ED7F3B',
        fontWeight: 'bold',
        fontSize: 17,
        marginVertical: 5,
    },
    smile: {
        color: '#ED7F3B',
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
        backgroundColor: '#ED7F3B',
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