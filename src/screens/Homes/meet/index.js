import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  ImageBackground,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Feather';
import {Header, Pinkbtn} from '../../../componrnts';
import LinearGradient from 'react-native-linear-gradient';

import Images from '../../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';

const Meet = ({navigation}) => {
  const [data2, setData2] = useState({
    Heading: 'Meet Blue Lotus',
    Image1: Images.Imgs.chuchuLotus1,
    Image2: Images.Imgs.chuchuLotus2,
    Image3: Images.Imgs.chuchuLotus3,
    Image4: Images.Imgs.chuchuLotus4,
    Image5: Images.Imgs.lotus1,
    Image6: Images.Imgs.blueLotusLarge,
    newtext:
      'Meaning , How Connected to your feel to your light , your Unique essence',
  });
  const [data1, setdata1] = useState(0);

  const Data = [
    {
      img1: Images.Imgs.meetScreenIcon1,
      text: 'Meet  Blue  Lotus',
    },
    {
      img1: Images.Imgs.meetScreenIcon2,
      text: 'Meet Devine Ross',
    },
    {
      img1: Images.Imgs.meetScreenIcon3,
      text: 'Meet Mushrooms',
    },
    {
      img1: Images.Imgs.meetScreenIcon4,
      text: 'Meet Chuchuhuas',
    },
  ];
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{}}>
        <View style={{}}>
          <Header
            iconName="arrowleft"
            OnPress={() => {
              // Keyboard.dismiss();
              navigation.goBack();
            }}
          />
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              marginTop: 10,
              fontFamily: 'BrandonGrotesque-Regular',
            }}>
            <Text style={styles.txt}>
              Brilliant! And Now which Blooms Speaks To your heart?
            </Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={Data}
              numColumns={2}
              keyExtractor={item => item.text}
              renderItem={({item, index}) => {
                return (
                  <>
                    <View
                      style={{
                        marginTop: 30,
                        marginVertical: 20,
                        flexGrow: 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          index === true ? '' : setdata1(index);
                          let obj = {};
                          index === 0
                            ? (obj = {
                                Heading: 'Meet Blue Lotus',
                                Image1: Images.Imgs.chuchuLotus1,
                                Image2: Images.Imgs.chuchuLotus2,
                                Image3: Images.Imgs.chuchuLotus3,
                                Image4: Images.Imgs.chuchuLotus4,
                                Image5: Images.Imgs.lotus1,
                                Image6: Images.Imgs.blueLotusLarge,
                                newtext:
                                  'Meaning , How Connected to your feel to your light , your Unique essence',
                              })
                            : index === 1
                            ? (obj = {
                                Heading: 'Meet Divine Ross',
                                Image1: Images.Imgs.chuchuRose1,
                                Image2: Images.Imgs.chuchuRose2,
                                Image3: Images.Imgs.chuchuRose3,
                                Image4: Images.Imgs.chuchuRose4,
                                Image5: Images.Imgs.rose,
                                Image6: Images.Imgs.roseLarge,
                                newtext:
                                  'Meaning , How Connected to your feel to your light , your Unique essence',
                              })
                            : index === 2
                            ? (obj = {
                                Heading: 'Meet Mushrooms',
                                Image1: Images.Imgs.chuchuMushroom1,
                                Image2: Images.Imgs.chuchuMushroom2,
                                Image3: Images.Imgs.chuchuMushroom3,
                                Image4: Images.Imgs.chuchuMushroom4,
                                Image5: Images.Imgs.mushrooms,
                                Image6: Images.Imgs.mushroomLarge,
                                newtext:
                                  'Meaning , How Connected to your feel to your light , your Unique essence',
                              })
                            : index === 3
                            ? (obj = {
                                Heading: 'Meet Chuchuhuas',
                                Image1: Images.Imgs.chuchuTree1,
                                Image2: Images.Imgs.chuchuTree2,
                                Image3: Images.Imgs.chuchuTree3,
                                Image4: Images.Imgs.chuchuTree4,
                                Image5: Images.Imgs.cuhuchuhuas1,
                                Image6: Images.Imgs.treeLarge,
                                newtext:
                                  'Meaning , How Connected to your feel to your light , your Unique essence',
                              })
                            : null;

                          setData2(obj);
                        }}
                        style={{
                          // width: '100%',
                          display: 'flex',
                          flexGrow: 1,
                          width: 100,
                          height: 100,
                          borderRadius: 100,
                          justifyContent: 'center',
                          alignItems: 'center',
                          alignSelf: 'center',
                        }}>
                        <>
                          {data1 === index ? (
                            <ImageBackground
                              source={item.img1}
                              style={[styles.img, {marginTop: 0, opacity: 0.7}]}
                              resizeMode="contain">
                              <LinearGradient
                                colors={['#ED535E', '#CD258D']}
                                style={{
                                  width: 100,
                                  height: 100,
                                  borderRadius: 100,
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  alignSelf: 'center',
                                  backgroundColor:
                                    data1 === index ? '#CD258D' : '',
                                  opacity: 0.7,
                                  elevation: data1 === index ? 0 : 5,
                                }}>
                                <Icon
                                  name="check"
                                  size={39}
                                  color="#fff"
                                  style={{}}
                                />
                              </LinearGradient>
                            </ImageBackground>
                          ) : (
                            <View
                              style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignSelf: 'center',
                                width: 100,
                                height: 100,
                              }}>
                              <Image
                                source={item.img1}
                                style={[styles.img]}
                                resizeMode="contain"
                              />
                            </View>
                          )}
                          <Text
                            style={{
                              textAlign: 'center',
                              color: data1 === index ? '#fff' : '#000',
                            }}>
                            {item.title}
                          </Text>
                        </>
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('Bluelotus', {
                            Heading:
                              index === 0
                                ? 'Meet Blue Lotus'
                                : index === 1
                                ? 'Meet Divine Ross'
                                : index === 2
                                ? 'Meet Mushrooms'
                                : index === 3
                                ? 'Meet Chuchuhuas'
                                : null,
                            Image1:
                              index === 0
                                ? Images.Imgs.blueLotusLarge
                                : index === 1
                                ? Images.Imgs.roseLarge
                                : index === 2
                                ? Images.Imgs.mushroomLarge
                                : index === 3
                                ? Images.Imgs.treeLarge
                                : null,
                          })
                        }
                        style={{
                          marginVertical: 5,
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            textAlign: 'center',
                            fontSize: 18,
                            color: '#000',
                            fontFamily: 'BrandonGrotesque-Medium',
                          }}>
                          {item.text}
                        </Text>
                        <Icon2 name="chevrons-right" size={20} color="#000" />
                      </TouchableOpacity>
                    </View>
                  </>
                );
              }}
            />
          </View>
          <TouchableOpacity
            disabled={data1 === false ? true : false}
            onPress={() => {
              navigation.navigate('chuchuhuasDetails', data2);
            }}
            style={{
              marginVertical: 10,
              width: '70%',
              marginTop: 70,
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <LinearGradient
              colors={['#ED535E', '#CD258D']}
              style={[styles.btn1]}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20,
                  fontFamily: 'BrandonGrotesque-Medium',
                }}>
                Continue
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Meet;

const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: '#ffff'},

  img: {
    // width: 136,
    // height: 136,
    width: ' 100%',
    height: ' 100%',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  txt: {
    // textAlign: 'left',
    fontSize: 25,
    color: '#1C5C2E',
    fontWeight: '400',
    marginVertical: 10,
    fontFamily: 'BrandonGrotesque-Medium',
  },
  txt1: {
    textAlign: 'left',
    fontSize: 18,
    color: '#030303',
  },
  btn1: {
    width: '60%',
    height: 55,
    borderRadius: 30,
    backgroundColor: '#ED535E',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
