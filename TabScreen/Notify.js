import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import Notification from '../components/Notification';

const Notify = ({data}) => {
    return (
        <ScrollView style={{backgroundColor: '#EFCDAB'}}>
            <View style={styles.notifications}>
                <View style={styles.notificationCentreContainer}>
                    <Text style={styles.notificationCentre}>Thông báo</Text>
                    <MaterialIcons name="clear" size={35} color="#E77D3B"/>
                </View>
                <Notification />
            </View>
        </ScrollView>
    );
};

export default Notify;

const styles = StyleSheet.create({
    notifications: {
        marginTop: 30,
    },
    notificationCentreContainer: {
        marginLeft: 18,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',

    },
    notificationCentre: {
        fontSize: 28,
        letterSpacing: 0.35,
        color: '#E77D3B',
        fontWeight: 'bold'
    },
});
