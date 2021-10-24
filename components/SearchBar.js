import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Would you like to order now?</Text>
            <TouchableOpacity>
                <FontAwesome style={styles.icon} name="search" size={24} color="#ED7F3B" />
            </TouchableOpacity>
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F1F2F6',
        flexDirection: 'row',
        padding: 15,
        borderRadius: 10,
    },
    text: {
        color: '#ABABAB',
        flex: 1,
    },
    icon: {},
});