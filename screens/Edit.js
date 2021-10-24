import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TouchableOpacity, 
    Image,
    TextInput,
    ScrollView,
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Edit = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={{margin: 20}}>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => {}}>
                        <View style={{
                            height: 100,
                            width: 100,
                            borderRadius: 15,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 20,
                        }}>
                            <Image 
                                source={require('../assets/avatar.jpg')}
                                style={{height: 120, width: 120, borderRadius: 75}}
                            />
                            <View>
                                <EvilIcons name="camera" size={30} color="#D9590A" style={{
                                    marginTop: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <Text style={{marginTop: 30, fontSize: 20, fontWeight: 'bold', color:'#D9590A'}}>
                        Bakery_Coffee
                    </Text>
                </View>

                <View style={styles.action}>
                    <FontAwesome name="user-circle" size={16} color='#666666' />
                    <TextInput 
                        placeholder='Họ tên' 
                        placeholderTextColor='#666666'
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="user-circle-o" size={16} color='#666666' />
                    <TextInput 
                        placeholder='Tên người dùng' 
                        placeholderTextColor='#666666'
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.action}>
                    <Ionicons name="key-outline" size={16} color='#666666' />
                    <TextInput 
                        placeholder='Mật khẩu' 
                        placeholderTextColor='#666666'
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.action}>
                    <Feather name="phone" size={16} color='#666666' />
                    <TextInput 
                        placeholder='Số điện thoại' 
                        placeholderTextColor='#666666'
                        keyboardType='number-pad'
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.action}>
                    <Feather name="map-pin" size={16} color='#666666' />
                    <TextInput 
                        placeholder='Địa chỉ' 
                        placeholderTextColor='#666666'
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.action}>
                    <MaterialCommunityIcons name="email-edit-outline" size={17} color='#666666' />
                    <TextInput 
                        placeholder='Gmail' 
                        placeholderTextColor='#666666'
                        keyboardType='email-address'
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </View>
                <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color:'white'}}>Lưu</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default Edit;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFCDAB',
    },
    action: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -6,
        paddingLeft: 10,
        color: '#05375a',
        fontSize: 18,
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#D9590A',
        alignItems: 'center',
        marginTop: 10,
    },
});