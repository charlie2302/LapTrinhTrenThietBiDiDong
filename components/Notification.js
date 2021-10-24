import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native'
const Data = require('../Data/Noti.json')


const NotifyItem = ({item})=>(
    <View style = {styles.container}>
        <Image source={{uri: item.background}} style={styles.image}/>
        <View style={styles.body}>
            <Text style={styles.time}>{item.time}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <View style={{marginTop: 10,}}>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    </View>
)
const Notification = () => {
    return (
        <View >
            <FlatList
                data = {Data.Notification}
                keyExtractor = {item =>item.background}
                renderItem = {({item})=> <NotifyItem item = {item}/>} 
            />
        </View>
    )
}

export default Notification;

const styles = StyleSheet.create({
    container: {
        height: 150,
        margin: 5,
        borderRadius: 15,
        backgroundColor: 'rgba(255, 228, 181, 0.5)',
        flexDirection: 'row',
    },
    image: {
        height: 150, 
        width: 150, 
        borderRadius: 15,
    },
    body: {
        flex: 1,
        // justifyContent: 'center',
        paddingLeft: 10,
    },
    time: {
        fontSize: 15,
        color:"#E77D3B",
    },
    name: {
        fontSize: 18,
        color:"#E77D3B",
        fontWeight: 'bold',
    },
    description: {
        fontSize: 15,
        color:"#E77D3B",
        fontWeight: 'bold',
    },
});
