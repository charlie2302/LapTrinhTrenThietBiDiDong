import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const ItemType = ({ type, image, selected, background }) => {
    return (
        <View style={styles.container}>
            <View style={[styles.imBg, selected && { backgroundColor: background }]}>
                <Image source={image} resizeMode="contain" 
                style={styles.icon}/>
            </View>
            <Text style={styles.text}>{type}</Text>
        </View>
    );
};

export default ItemType;

const styles = StyleSheet.create({
    container: {
        marginRight: 20,
        alignItems: 'center',
        marginVertical: 20,
    },
    imBg: {
        backgroundColor: '#F1F2F6',
        padding: 20,
        borderRadius: 15,
    },
    text: {
        color: '#D9A737',
        marginTop: 10,
        fontWeight: 'bold',
    },
    icon: {
        width: 41.5,
        height: 41.5,
    },
});