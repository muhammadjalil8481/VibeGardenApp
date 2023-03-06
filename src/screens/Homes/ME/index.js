import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import {Header, Percentage, Pinkbtn} from '../../../componrnts';
import Images from '../../../constants';
import SearchModal from '../../../componrnts/SearchModal';
import {useBackButton} from '../../../hooks/BackHandler';
import {
  PlusSvg,
  ArrowBackSvg,
  HeartSvg,
  StarSvg,
  SpiralSvg,
} from '../../../assests/svgs/MeSvgs';
import {SafeAreaView} from 'react-native-safe-area-context';
const Me = ({navigation}) => {
  const [visible, setVisible] = useState(false);

  //BackHandler
  const onBackPress = () => {
    navigation.navigate('Homes');
    return true;
  };
  useBackButton(navigation, onBackPress);

  const data1 = [
    {
      img1: <PlusSvg />,
      text1: 'Tools to try',
      onPress: () => {
        navigation.navigate('FressBlooms', {
          otherParam: 'Tools to try',
          plus: true,
          showdata: true,
          threedost: true,
          backoption: () => navigation.goBack(),
        });
      },
    },
    {
      img1: <ArrowBackSvg />,
      text1: 'Recent Content',
      onPress: () => {
        navigation.navigate('FressBlooms', {
          otherParam: 'Recent Content',
          plus: true,
          showdata: true,
          threedost: true,
          backoption: () => navigation.goBack(),
        });
      },
    },
    {
      img1: <HeartSvg />,
      text1: 'Favorites',
      onPress: () => {
        navigation.navigate('FressBlooms', {
          otherParam: 'Favorites',
          heart: true,
          showdata: true,
          // threedost: true,
          backoption: () => navigation.goBack(),
        });
      },
    },
    {
      img1: <StarSvg />,
      text1: 'Top Tools',
      onPress: () => {
        navigation.navigate('FressBlooms', {
          otherParam: 'Top Tools',
          showdata: true,
          threedost: true,
          plus: true,
          backoption: () => navigation.goBack(),
        });
      },
    },
    {
      img1: <SpiralSvg />,
      text1: 'Your Resonance Finder Result',
      onPress: () => {
        navigation.navigate('Result', {
          otherParam: 'Top Tools',
          showdata: true,
          threedost: true,
          plus: true,
          backoption: () => navigation.goBack(),
        });
      },
    },
  ];

  return (
    <SafeAreaView style={styles.main}>
      <ImageBackground
        source={Images.BackGround.backgroundHue}
        resizeMode="stretch"
        style={styles.image}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <Header
            logo={true}
            iconName="search1"
            search={true}
            toggle={true}
            OnPress={() => setVisible(true)}
            menu1={() => navigation.navigate('notification')}
            menu2={() => navigation.navigate('settings')}
          />

          <View style={styles.Box1}>
            <View style={{width: '90%', alignSelf: 'center'}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 28,
                  fontWeight: '600',
                  color: '#000000',
                  // marginVertical: 10,
                  marginBottom: 25,
                  fontFamily: 'BrandonGrotesque-Regular',
                }}>
                Erin
              </Text>
              <View style={styles.imgb}>
                <Image
                  source={Images.BackGround.croped}
                  resizeMode="cover"
                  style={styles.cropimg}
                />
              </View>
              <View style={{marginTop: 25}}>
                <Percentage
                  margin1={10}
                  text1="Current Bloom:"
                  Image1={Images.Imgs.lotus1}
                  // icons={true}
                />
              </View>
              <View style={styles.data}>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 20,
                    fontWeight: '500',
                    marginBottom: 10,
                    marginTop: 25,
                    fontFamily: 'BrandonGrotesque-Medium',
                  }}>
                  Library:
                </Text>
                <FlatList
                  data={data1}
                  scrollEnabled={false}
                  renderItem={({item}) => {
                    return (
                      <>
                        <TouchableOpacity
                          onPress={item.onPress}
                          style={{flexDirection: 'row', marginVertical: 10}}>
                          {item.img1}
                          <Text
                            style={{
                              marginLeft: 15,
                              color: '#030303',
                              marginTop: 3,
                            }}>
                            {item.text1}
                          </Text>
                        </TouchableOpacity>
                      </>
                    );
                  }}
                />
                <Text
                  style={{
                    color: '#000',
                    fontSize: 20,
                    fontWeight: '500',
                    marginVertical: 10,
                    fontFamily: 'BrandonGrotesque-Medium',
                  }}>
                  Bloom 'o' Meter:
                </Text>
                <View>
                  <FlatList
                    horizontal={true}
                    data={data}
                    renderItem={({item}) => {
                      return (
                        <View
                          style={{
                            width: 80,
                            height: 30,
                            backgroundColor: '#BCCFC1',
                            borderRadius: 10,
                            margin: 5,
                            justifyContent: 'center',
                          }}>
                          <Text
                            style={{
                              textAlign: 'center',
                              color: '#fefefe',
                              fontFamily: 'BrandonGrotesque-Regular',
                            }}>
                            {item.text1}
                          </Text>
                        </View>
                      );
                    }}
                  />
                </View>

                <View
                  style={{
                    width: '100%',
                    height: 80,
                    marginVertical: 10,
                    flexDirection: 'row',
                  }}>
                  <View style={{width: '73%', height: 80, marginVertical: 10}}>
                    <Image
                      source={Images.Logos.graph}
                      resizeMode="contain"
                      style={styles.cropimg}
                    />
                  </View>
                  <Text
                    style={{
                      color: '#030303',
                      fontSize: 12,
                      fontWeight: '500',
                      // marginVertical: 10,
                      marginTop: 40,
                      marginLeft: -30,
                      fontFamily: 'BrandonGrotesque-Regular',
                    }}>
                    Your Graph will appear{'\n'}after 2 days of tracking
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 30,
                    marginBottom: 30,
                    // backgroundColor: 'red',
                    alignItems: 'center',
                  }}>
                  <Pinkbtn
                    shadow="rgba(0,0,0,0.5)"
                    width={'75%'}
                    onPress={() => {
                      navigation.navigate('BloomsCheck');
                    }}
                    btntxt="Update Current Blooms"
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={{height: 85}} />
        </ScrollView>
      </ImageBackground>
      <SearchModal
        visible={visible}
        setVisible={setVisible}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Box1: {marginTop: 10},

  imgb: {
    width: 330,
    height: 198,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  cropimg: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  box1: {
    width: '90%',
    alignSelf: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Me;
const data = [{text1: 'Last Weak'}, {text1: '30 days'}, {text1: 'All'}];
