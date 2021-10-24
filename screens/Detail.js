import React,{useEffect} from 'react';
import { StyleSheet, Dimensions, Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
const w = Dimensions.get("screen").width;
import { Ionicons } from '@expo/vector-icons';

const Detail = ({navigation, route}) => {
  useEffect(() => {
      console.log(route)
  }, [])
  const {background, smile, quantity, name, currency, promotion, description } = route.params;
  return(
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View 
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 280,
          }}>
            <Image style = {{ height : 250, width : w}} source = {{uri : background}}/>
        </View>
        <View style={styles.details}>
          <View 
            style={{
              flexDirection: 'row', 
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style = {{fontSize: 25, fontWeight: 'bold', color: 'white', width: '85%'}}>
              {name}
            </Text>
            <View style={styles.iconContainer}>
              <TouchableOpacity>
                <Ionicons name="heart-half-outline"  size={25} color='#FABA1E' />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.textDetails}>
            Không gì tuyệt hơn cảm giác tận hưởng hương vị đăng đắng, ngọt hậu đặc biệt khó tả của coffee hay được hít hà hương thơm chậm rãi lan tỏa khắp phòng, ngọt ngào khơi dậy vị giác của ly trà hoa quả. Nhấm nháp cùng với những chiếc bánh yêu thích đem lại sự tỉnh táo và những năng lượng tích cực cho một ngày dài. 
          </Text>
          <Text style = {styles.quantity}>Còn {quantity} sản phẩm</Text>
          <Text style = {styles.currency}>Mua lẻ: {currency} </Text>
          <Text style = {styles.promotion}>Ưu đãi: {promotion} </Text>
          <Text style = {styles.description}>{description} </Text>
          <View 
            style={{
              marginTop: 40,
              marginBottom: 40,
            }}>
            <TouchableOpacity>
              <View style={styles.btnContainer}>
                <Text style={styles.title}>Thêm vào giỏ hàng</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F5F2',
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: '#ED7F3B',
    borderTopRightRadius: 100,
    borderTopLeftRadius: 100,
  },
  iconContainer: {
    backgroundColor: 'white',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  textDetails: {
    marginTop: 20,
    fontSize: 16,
    color: 'white',
  },
  btnContainer: {
    backgroundColor: 'white',
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#FABA1E',
    fontWeight: 'bold',
    fontSize: 18,
  },
  quantity: {
    marginTop: 12,
    fontSize: 16,
    color: 'white',
  },
  currency: {
    marginTop: 10,
    fontSize: 16,
    color: 'white',
  },
  promotion: {
    marginTop: 10,
    fontSize: 16,
    color: 'white',
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    color: 'white',
  },
});