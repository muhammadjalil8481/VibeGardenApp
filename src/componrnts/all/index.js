import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import Images from '../../constants';
import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from 'react-native-paper';

const All = ({
  bghome2,
  title,
  heart1,
  plustop,
  textA,
  textB,
  color1,
  onPressALL,
  plus,
  marginBottom,
  iconimg1,
  pressI,
  navigation,
  marginTop,
  onHeartPress,
  headetboxText,
}) => {
  const [products, setProducts] = useState(Data);
  const [selectPlus, setSelectPlus] = useState(false);
  const handleChange = (id, type = 'heart') => {
    let temp = products.map(product => {
      if (id === product.id) {
        if (type === 'heart')
          return {...product, isChecked: !product.isChecked};
        else if (type === 'plus')
          return {...product, selectPlus: !product.selectPlus};
        else return {...product};
      }
      return product;
    });
    setProducts(temp);
  };

  return (
    <>
      <View>
        {headetboxText && (
          <View
            style={{
              width: '95%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: marginBottom,
              marginTop: marginTop,
              marginVertical: 5,
            }}>
            <Text style={[styles.txtA, {color: color1}]}>{textA}</Text>
            <TouchableOpacity onPress={onPressALL} style={{}}>
              <Text style={styles.txtB}>{textB}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={styles.box2}>
        {/*  */}
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={products}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={pressI}
                style={{
                  width: 172,
                  height: 229,
                  borderRadius: 10,
                  marginRight: index == 0 ? 10 : null,
                  marginHorizontal: index == 0 ? null : 10,
                  overflow: 'hidden',
                }}>
                <ImageBackground
                  source={bghome2}
                  style={{
                    height: '100%',
                    width: '100%',
                  }}>
                  <View
                    style={{
                      width: '95%',
                      paddingVertical: 10,
                    }}>
                    <View
                      style={{
                        height: 28,
                        width: 28,
                        alignSelf: 'flex-end',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 20,
                        // backgroundColor: '#fff',
                      }}>
                      {heart1 && (
                        <TouchableOpacity
                          style={{
                            alignSelf: 'center',
                            height: 28,
                            width: 28,
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 20,
                            backgroundColor: '#fff',
                          }}
                          onPress={() => handleChange(item.id, 'heart')}>
                          <Icon
                            name={item.isChecked === true ? 'hearto' : 'heart'}
                            color={
                              item.isChecked === true ? '#EF3A71' : '#EF3A71'
                            }
                            size={20}
                            style={{
                              fontWeight: 'bold',
                              position: 'absolute',
                              marginTop: plustop,
                            }}
                          />
                        </TouchableOpacity>
                      )}
                      {!heart1 && (
                        <TouchableOpacity
                          style={{
                            alignSelf: 'center',
                            height: 25,
                            width: 25,
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 20,
                            backgroundColor: `${
                              item?.selectPlus ? Colors.green900 : '#fff'
                            }`,
                          }}
                          onPress={() => handleChange(item.id, 'plus')}>
                          <Icon
                            name={plus}
                            color={item?.selectPlus ? '#fff' : Colors.green900}
                            size={20}
                            style={{
                              fontWeight: 'bold',
                              position: 'absolute',
                              // top: -10,
                              // right: -12,
                              marginTop: plustop,
                            }}
                          />
                        </TouchableOpacity>
                      )}
                    </View>
                    <View
                      style={{
                        paddingVertical: 20,
                        alignSelf: 'center',
                        marginTop: 20,
                        alignItems: 'center',
                      }}>
                      <View style={{}}>
                        {iconimg1 && (
                          <View
                            style={{
                              width: 30,
                              height: 25,
                            }}>
                            <Image
                              source={item.iconimg1}
                              resizeMode="contain"
                              style={{
                                width: '100%',
                                height: '100%',
                              }}
                            />
                          </View>
                        )}
                      </View>
                      <View style={{}}>
                        <Text
                          style={{
                            textAlign: 'center',
                            fontSize: 20,
                            color: '#000',
                            fontFamily: 'BrandonGrotesque-Medium',
                            paddingBottom: 15,
                          }}>
                          {title}
                        </Text>
                        <View style={{}}>
                          <LinearGradient
                            colors={['#ED535E', '#CD258D']}
                            style={{
                              width: 40,
                              height: 25,
                              borderRadius: 10,
                              marginVertical: 3,
                              justifyContent: 'center',
                              // backgroundColor: '#CD258D',
                              alignItems: 'center',
                            }}>
                            <Text
                              style={{
                                color: '#fff',
                                fontWeight: 'bold',
                                fontSize: 10,
                                fontFamily: 'BrandonGrotesque-Regular',
                              }}>
                              5Min
                            </Text>
                          </LinearGradient>
                        </View>
                      </View>
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </>
  );
};

export default All;

const styles = StyleSheet.create({
  box2: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  txtA: {
    color: '#1C5C2E',
    fontSize: 18,
    fontFamily: 'BrandonGrotesque-Regular',
    opacity: 0.85,
  },
  txtB: {
    color: '#1C5C2E',
    fontSize: 14,
    textDecorationLine: 'underline',
    fontFamily: 'BrandonGrotesque-Regular',
    opacity: 0.85,
  },
});

const Data = [
  {
    id: 1,
    bg1: Images.BackGround.black,
    bg12: Images.BackGround.greenbg,
    heart1: Images.Icons.heart1,
    name: 'TONGLEN',
    title: 'title',
    select: false,
    iconimg1: Images.Icons.Pcircle,
    iconimg2: Images.Icons.pinki,
    isChecked: false,
    selectPlus: false,
  },
  {
    id: 2,
    bg1: Images.BackGround.black,
    bg12: Images.BackGround.greenbg,
    heart1: Images.Icons.pinki,
    name: 'TONGLEN',
    title: 'title',
    select: false,
    // iconimg2: iconimg2,
    iconimg1: Images.Icons.prectangel,
    iconimg2: Images.Icons.pinki,
    isChecked: false,
    selectPlus: false,
  },
  {
    id: 3,
    bg1: Images.BackGround.black,
    bg12: Images.BackGround.greenbg,
    heart1: Images.Icons.heart1,
    name: 'TONGLEN',
    title: 'title',
    select: false,
    iconimg1: Images.Icons.sun,
    iconimg2: Images.Icons.pinki,
    isChecked: false,
    selectPlus: false,
  },
];
