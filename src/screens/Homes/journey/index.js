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
import LinearGradient from 'react-native-linear-gradient';
import {Header, Pinkbtn} from '../../../componrnts';
import Images from '../../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon2 from 'react-native-vector-icons/Feather';

const Journey = props => {
  const [data1, setdata1] = useState(0);
  const Data = [
    {
      img1: Images.Imgs.journeyIcon1,
      text: 'Meet Wolf Women',
      st: 0,
    },
    {
      img1: Images.Imgs.journeyIcon2,
      text: 'Meet Bear Man',
      st: 1,
    },
    {
      img1: Images.Imgs.journeyIcon3,
      text: 'Meet Jaguar Being',
      st: 2,
    },
    {
      img1: Images.Imgs.journeyIcon4,
      text: 'Meet Bird Women',
      st: 3,
    },
    {
      img1: Images.Imgs.journeyIcon5,
      text: 'Meet Dolphin Being',
      st: 4,
    },
  ];
  return (
    <>
      <SafeAreaView style={styles.main}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{}}>
          <Header
            iconName="arrowleft"
            OnPress={() => {
              // Keyboard.dismiss();
              props.navigation.goBack();
            }}
          />
          <View
            style={{
              // backgroundColor: 'yellow',
              width: '90%',
              alignSelf: 'center',
            }}>
            <Text style={styles.txt}>
              Which of these journey resonates must?
            </Text>
            <FlatList
              data={Data}
              numColumns={2}
              renderItem={({item, index}) => {
                return (
                  <>
                    <View style={{flexGrow: 2}}>
                      <View
                        style={{
                          width: '100%',
                          justifyContent: 'space-around',
                        }}>
                        <TouchableOpacity
                          onPress={() =>
                            index === true ? '' : setdata1(index)
                          }
                          style={{}}>
                          <>
                            {data1 === index ? (
                              <ImageBackground
                                source={item.img1}
                                style={[
                                  styles.img,
                                  {marginTop: 0, opacity: 0.7},
                                ]}
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
                              <View style={{}}>
                                <Image
                                  source={item.img1}
                                  style={[styles.img]}
                                  resizeMode="contain"
                                />
                              </View>
                            )}
                          </>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() =>
                            props.navigation.navigate('Bluelotus', {
                              Heading:
                                index === 0
                                  ? 'Meet Wolf Women'
                                  : index === 1
                                  ? 'Meet Bear Man'
                                  : index === 2
                                  ? 'Meet Jaguar Being'
                                  : index === 3
                                  ? 'Meet Bird Women'
                                  : index === 4
                                  ? 'Meet Dolphin Being'
                                  : null,
                              Image1:
                                index === 0
                                  ? Images.BackGround.wolfwoman2
                                  : index === 1
                                  ? Images.BackGround.bearman2
                                  : index === 2
                                  ? Images.BackGround.jaguarman2
                                  : index === 3
                                  ? Images.BackGround.birdwomen2
                                  : index === 4
                                  ? Images.BackGround.dolphinBeing2
                                  : null,
                            })
                          }
                          style={{
                            marginVertical: 5,
                            flexDirection: 'row',
                            alignItems: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',
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
                    </View>
                  </>
                );
              }}
            />

            <View
              style={{
                width: '100%',
                marginVertical: 10,
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Pinkbtn
                shadow={'#00000029'}
                onPress={() => props.navigation.navigate('meet')}
                width={'70%'}
                btntxt="Continue"
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default Journey;

const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: '#ffff'},

  img: {
    width: 100,
    height: 100,
    borderRadius: 100,
    alignSelf: 'center',
  },
  txt: {
    textAlign: 'left',
    fontSize: 25,
    color: '#1C5C2E',
    // fontWeight: '600',
    marginVertical: 20,
    fontFamily: 'BrandonGrotesque-Medium',
  },
  txt1: {
    textAlign: 'left',
    fontFamily: 'BrandonGrotesque-Medium',
    fontSize: 18,
    color: '#030303',
  },
});
