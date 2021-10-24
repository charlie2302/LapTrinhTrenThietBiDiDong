import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Review = () => {
    return (
        <ScrollView style={{backgroundColor: '#EFCDAB'}}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{fontSize: 25, fontWeight: 'bold', color: '#ED7F3B'}}>
                        Review and Share
                    </Text>
                    <Image 
                        source={require('../assets/avatar.jpg')}
                        style={styles.images}
                    />
                    <Text style={styles.title}>Bakery_Coffee</Text>
                    <Text style={styles.caption}>@Ngoc_Huong123</Text>
                </View>
                <View style={styles.body}>
                    <TouchableOpacity>
                        <View style={styles.post}>
                            <Text style={{color: '#ED7F3B', fontSize: 17,}}>22</Text>
                            <Text style={{color: '#ED7F3B', fontSize: 17, fontWeight: 'bold',}}>Bài viết</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.post}>
                            <Text style={{color: '#ED7F3B', fontSize: 17,}}>150</Text>
                            <Text style={{color: '#ED7F3B', fontSize: 17, fontWeight: 'bold',}}>Người theo dõi</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.post}>
                            <Text style={{color: '#ED7F3B', fontSize: 17,}}>16</Text>
                            <Text style={{color: '#ED7F3B', fontSize: 17, fontWeight: 'bold',}}>Theo dõi</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.review}>
                    <View style={styles.write}>
                        <Image 
                            source={require('../assets/avatar.jpg')}
                            style={styles.icon}
                        />
                        <View style={styles.action}>
                            <TextInput 
                                placeholder='Bạn đang nghĩ gì?' 
                                placeholderTextColor='#666666'
                                autoCorrect={false}
                                style={styles.textInput}
                            />
                        </View>
                    </View>
                    <View style={{height: 600, margin: 15, borderRadius: 15, backgroundColor: '#FEC083',}}>
                        <View style={{flexDirection: 'row'}}>
                            <MaterialCommunityIcons name="face-profile" size={50} color="#E36E28" style={{margin: 15}}/>
                            <Text style={{marginTop: 25, fontSize: 20, fontWeight: 'bold', color: '#E36E28'}}>NgocHuong_123</Text>
                            <TouchableOpacity>
                                <AntDesign name="ellipsis1" size={40} color="#E36E28" style={{marginTop: 20, marginLeft: 100}}/>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{marginLeft: 15, marginRight: 15, fontSize: 16, color: "#E36E28"}}>
                                Đừng để cơn gió lạnh đầu mùa đánh lừa bạn rằng mình cần phải kiếm 🧸 hoặc 🐩, những thứ chỉ khiến bạn tốn 💵 & ⏰. Thứ bạn thực sự cần chỉ là ☕️ & 🥐 tại #NgocHuongB&C nha mọi người 😁😁😁
                            </Text>
                            <Image source={{uri: 'https://scontent.fhan5-10.fna.fbcdn.net/v/t1.6435-9/244479675_886379815603863_6990470435679323314_n.jpg?_nc_cat=101&_nc_rgb565=1&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=_qmLvU7mBRwAX-uPwQu&_nc_ht=scontent.fhan5-10.fna&oh=e23a711cf75d1f4903762e37f0382b18&oe=61918378'}} style={styles.image}/>
                        </View>
                    </View>
                    <View style={{height: 600, margin: 15, borderRadius: 15, backgroundColor: '#FEC083',}}>
                        <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="face-profile-woman" size={50} color="#E36E28" style={{margin: 15}}/>
                            <Text style={{marginTop: 25, fontSize: 20, fontWeight: 'bold', color: '#E36E28'}}>NgocHuong_123</Text>
                            <TouchableOpacity>
                                <AntDesign name="ellipsis1" size={40} color="#E36E28" style={{marginTop: 20, marginLeft: 100}}/>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{marginLeft: 15, marginRight: 15, fontSize: 16, color: "#E36E28"}}>
                                Chết rồi, sắp bị mở cửa lại rồi, làm đĩa mì 🦪🐙🦐 ăn tạm cho đỡ sợ vậy 😭😭😭 #NgocHuongB&C #Coffee_nguyen_chat #Cafe_dac_biet #Bua_trua_bat_ngo #Mi_hai_san #check_in_NgocHuong_bakery_and_coffee
                            </Text>
                            <Image source={{uri: 'https://scontent.fhan5-11.fna.fbcdn.net/v/t1.6435-9/243989085_885730299002148_1145274730645311205_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=3gJFShLwVrYAX8kHYLE&_nc_ht=scontent.fhan5-11.fna&oh=59d6b13e81cfc580a98709c277dfc7da&oe=618FC051'}} style={styles.image}/>
                        </View>
                    </View>
                    <View style={{height: 600, margin: 15, borderRadius: 15, backgroundColor: '#FEC083',}}>
                        <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="face-profile-woman" size={50} color="#E36E28" style={{margin: 15}}/>
                            <Text style={{marginTop: 25, fontSize: 20, fontWeight: 'bold', color: '#E36E28'}}>NgocHuong_123</Text>
                            <TouchableOpacity>
                                <AntDesign name="ellipsis1" size={40} color="#E36E28" style={{marginTop: 20, marginLeft: 100}}/>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{marginLeft: 15, marginRight: 15, fontSize: 16, color: "#E36E28"}}>
                                Hà Nội thu đã cuối mùa chưa, sao phố nay còn vương mùi hoa sữa? Góc quán quen cửa vẫn còn chưa mở, ly cà phê ... mang đi sao vội vàng!!! Khép hàng mi ... tiếng nhạc ngân nho nhỏ, Hà Nội ơi ... còn chờ đến bao giờ!!!
                            </Text>
                            <Image source={{uri: 'https://scontent.fhan5-4.fna.fbcdn.net/v/t1.6435-9/p526x296/244424249_880349059540272_4432816497530836449_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=ed_JI2_C1yMAX-0KLeK&_nc_ht=scontent.fhan5-4.fna&oh=0afaadfafaf2ee1ea8292ac240d3626c&oe=6192BB3B'}} style={styles.image}/>
                        </View>
                    </View>
                    <View style={{height: 600, margin: 15, borderRadius: 15, backgroundColor: '#FEC083',}}>
                        <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="face-profile-woman" size={50} color="#E36E28" style={{margin: 15}}/>
                            <Text style={{marginTop: 25, fontSize: 20, fontWeight: 'bold', color: '#E36E28'}}>NgocHuong_123</Text>
                            <TouchableOpacity>
                                <AntDesign name="ellipsis1" size={40} color="#E36E28" style={{marginTop: 20, marginLeft: 100}}/>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{marginLeft: 15, marginRight: 15, fontSize: 16, color: "#E36E28"}}>
                                Nghe tin gió mùa cuối tuần sau, NgocHuong đã mở cửa để cùng đón gió lạnh đầu mùa với cả nhà 😂😂 Có ai thèm giống khách nhà em không. Đến #NgocHuongB&C uống cà phê bao ... có người yêu nha 😆
                            </Text>
                            <Image source={{uri: 'https://scontent.fhan5-4.fna.fbcdn.net/v/t1.6435-9/242836888_879264199648758_5535696217706181241_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=xsPBviofObEAX81cz2g&tn=8TNjOhgLp23ni7l3&_nc_ht=scontent.fhan5-4.fna&oh=22e6c6b1c27fb6a506b6ce766fde756e&oe=61914DC2'}} style={styles.image}/>
                        </View>
                    </View>
                    <View style={{height: 600, margin: 15, borderRadius: 15, backgroundColor: '#FEC083',}}>
                        <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="face-profile" size={50} color="#E36E28" style={{margin: 15}}/>
                            <Text style={{marginTop: 25, fontSize: 20, fontWeight: 'bold', color: '#E36E28'}}>NgocHuong_123</Text>
                            <TouchableOpacity>
                                <AntDesign name="ellipsis1" size={40} color="#E36E28" style={{marginTop: 20, marginLeft: 100}}/>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{marginLeft: 15, marginRight: 15, fontSize: 16, color: "#E36E28"}}>
                                Dân chơi gửi hẳn chục cân KENYA nhờ rang hộ 🤩🤩🤩 Tí phải biển thủ mấy shot uống trộm mí được 😤😤😤 #kenya_coffee #càphênóng #giólạnhđầumùa #NgocHuong_bakery_and_coffee
                            </Text>
                            <Image source={{uri: 'https://scontent.fhan5-6.fna.fbcdn.net/v/t1.6435-9/244146803_877706886471156_1436061845336226873_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=716PP23bKkoAX_raPNP&_nc_ht=scontent.fhan5-6.fna&oh=f12738c8fb6897a891c372ed26148194&oe=6190BDA7'}} style={styles.image}/>
                        </View>
                    </View>
                    <View style={{height: 600, margin: 15, borderRadius: 15, backgroundColor: '#FEC083',}}>
                        <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="face-profile" size={50} color="#E36E28" style={{margin: 15}}/>
                            <Text style={{marginTop: 25, fontSize: 20, fontWeight: 'bold', color: '#E36E28'}}>NgocHuong_123</Text>
                            <TouchableOpacity>
                                <AntDesign name="ellipsis1" size={40} color="#E36E28" style={{marginTop: 20, marginLeft: 100}}/>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{marginLeft: 15, marginRight: 15, fontSize: 16, color: "#E36E28"}}>
                                Tuần mới nhiều NĂNG LƯỢNG nha cả nhà, đừng quên order CÀ PHÊ & BÁNH của Harper 7 để luôn có tinh thần SỜ TÁT ÚP nha 😁😁😁 Chắc ai đó cũng thèm một ly [C A P P U C C I N O]… 😋😋😋 #NgocHuong_bakery_and_coffee
                            </Text>
                            <Image source={{uri: 'https://scontent.fhan5-7.fna.fbcdn.net/v/t1.6435-9/243225874_876356809939497_1863528892180338722_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=mEIy8IdYYuQAX_csZhW&_nc_ht=scontent.fhan5-7.fna&oh=79b1448c500db75cd0d945c1e4dbcb1f&oe=618FDA8C'}} style={styles.image}/>
                        </View>
                    </View>
                    <View style={{height: 600, margin: 15, borderRadius: 15, backgroundColor: '#FEC083',}}>
                        <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="face-profile" size={50} color="#E36E28" style={{margin: 15}}/>
                            <Text style={{marginTop: 25, fontSize: 20, fontWeight: 'bold', color: '#E36E28'}}>NgocHuong_123</Text>
                            <TouchableOpacity>
                                <AntDesign name="ellipsis1" size={40} color="#E36E28" style={{marginTop: 20, marginLeft: 100}}/>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{marginLeft: 15, marginRight: 15, fontSize: 16, color: "#E36E28"}}>
                                Nắng đẹp thế này chắc nhiều người đang thèm cái góc CÀ PHÊ này của mình lắm 😋😋😋 TAKE AWAY tại quán hoặc ORDER online SHIP tận nơi nha. Chúng mình phục vụ trước mắt sẽ là CÀ PHÊ & BÁNH MÌ & BÁNH KEM 
                            </Text>
                            <Image source={{uri: 'https://scontent.fhan5-8.fna.fbcdn.net/v/t1.6435-9/242044330_875093823399129_7998714936229174056_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=GQFsQl4ighUAX8iVtCp&_nc_ht=scontent.fhan5-8.fna&oh=440cb07c7a8eb42c5277af121848bec6&oe=6192F4D8'}} style={styles.image}/>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default Review;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    header: {
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    images: {
        height: 150,
        width: 150,
        borderRadius: 75,
        marginTop: 15,
    },
    title: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ED7F3B',
    },
    caption: {
        color: '#ED7F3B',
    },
    body: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    post: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    icon: {
        height: 50,
        width: 50,
        borderRadius: 50,
        margin: 15,
    },
    write: {
        height: 75,
        margin: 15,
        borderRadius: 15,
        backgroundColor: '#FEC083',
        flexDirection: 'row',
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -6,
        paddingLeft: 10,
        color: '#05375a',
        fontSize: 18,
    },
    image: {
        margin: 15,
        height: 390, 
        width: 350, 
        borderRadius: 15,
    },
})
