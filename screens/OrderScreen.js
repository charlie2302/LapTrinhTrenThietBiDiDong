import React from 'react';
import { StyleSheet, Text, View, Pressable, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import AddressList from '../components/AddressList';
import ListFood from '../components/ListFood';
const w = Dimensions.get("screen").width;
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const OrderScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.padding}>
                <Text style={styles.title}>Your Order!!!</Text>
                <TouchableOpacity style={styles.clearButton} onPress = {()=>navigation.popToTop()}>
                    <Feather resizeMode = "contain" style={styles.iconClear} name="x-circle" size={28} color="#ED7F3B" />
                </TouchableOpacity>
                <AddressList />
        </View>
        <ScrollView style ={{flex : 1}} >
            <ListFood />
            <View style= {styles.SectionDelivery}>
                <View style={styles.imgCon}>
                    <FontAwesome5 style={styles.imageCon} name="shipping-fast" size={50} color='#ED7F3B' />
                </View>
                <View style={styles.TitleDilivery}>
                    <Text style={styles.name}>Delivery Fee</Text>
                </View>
                <View style = {{flex : 1}}></View>
                <View style={styles.end}>
                    <Text style={styles.total}>{Number(5).toFixed(3)}đ</Text>
                </View>
            </View>
            <View style = {{height : 80}}></View>
        </ScrollView>
        <View style={styles.footer}>
            <Text style={styles.total}>Total: 80.000 đ</Text>
            <TouchableOpacity style={styles.buttonOrder}>
                <Text style={styles.textOrder}>Place Order</Text>
                <AntDesign name="arrowright" size={24} color="white" />
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
    SectionDelivery : {
        minHeight : 100,
        width : '100%',
        flexDirection : 'row',
        alignItems : 'center'
    },
    TitleDilivery: {
        minWidth : 50
    },
    end : {
        paddingRight : 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#ED7F3B',
    },
    padding: {
        padding: 20,
    },
    container: {
        // padding: 20,
        marginTop: 25,
        backgroundColor: '#F8F5F2',
        flex : 1,
    },
    clearButton: {
        position: 'absolute',
        right: 20,
        top: 16,
        padding: 5,
    },
    iconClear: {
        width: 30,
        height: 30,
    },
    total: {
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 4,
        color: '#ED7F3B',
    },
    textOrder:{
        fontWeight: 'bold',
        marginRight: 10,
        color: 'white',
    },
    buttonOrder: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ED7F3B',
        padding: 5,
        borderRadius: 10,
        marginRight: 4,
    },
    footer: {
        position : 'absolute',
        bottom : 0,
        height : 80,
        width : '100%',
        backgroundColor : '#FEF3DA',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imgCon: {  
        width: w / 3,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        fontWeight: 'bold',
        fontSize: 17,
        lineHeight: 20,
        color: '#ED7F3B',
    },
});