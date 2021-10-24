import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const AddressList = () => {
  return (
    <View style={styles.container}>
        <View style={styles.row}>
            <Text style={styles.address}>C2, Nghĩa Tân</Text>
            <Text style={styles.text}>Edit address</Text>
        </View>
        <View style={styles.row}>
            <View style={styles.timeContainer}>
                <View style={styles.iconTime}>
                <AntDesign name="clockcircleo" size={24} color="white" />
                </View>
                <Text style={styles.textTime}>10 mins</Text>
            </View>
            
            <Text style={styles.text}>Choose time</Text>
        </View>
    </View>
  );
};

export default AddressList;

const styles = StyleSheet.create({
    address: {
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
        color: 'white'
    },
    textTime: {
        fontWeight: 'bold',
        // marginLeft: 3,
        color: 'white',
    },
    timeContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconTime: {
        padding: 8,

    },
    container: {
        backgroundColor: '#ED7F3B',
        paddingVertical: 20,
        borderRadius: 10,
    },
    text: {
        // fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
        color: 'white',
    },
    row: {
        flexDirection: 'row',
        marginVertical: 7,
        alignItems: 'center',
    },
});