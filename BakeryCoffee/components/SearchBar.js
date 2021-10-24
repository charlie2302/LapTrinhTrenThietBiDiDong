import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Would you like to order now?</Text>
            <TouchableOpacity>
                <Image
                    style={styles.icon}
                    source={require('../assets/search.png')}
                />
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