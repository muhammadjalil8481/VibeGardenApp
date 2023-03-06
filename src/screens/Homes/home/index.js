import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  BackHandler,
  FlatList,
  ImageBackground,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header, SeeAll} from '../../../componrnts';
import All from '../../../componrnts/all';
import MainBox from '../../../componrnts/mainbox';
import SearchModal from '../../../componrnts/SearchModal';
import Images from '../../../constants';

const Home = props => {
  const [visible, setVisible] = useState(false);
  const navigate = item => {
    props.navigation.navigate('Video', {
      otherParam: item?.textA === 'FEATURED TOOLS' ? true : false,
      plus: item?.textA === 'FEATURED TOOLS' ? true : false,
      redbtn: true,
      otherParam1:
        item?.textA === 'FEATURED TOOLS' ? 'TONGLEN' : 'FAMILY OF LIGHT',
      backoption: () => props.navigation.goBack(),
      fromHome: true,
      icon1: item?.textA !== 'FEATURED TOOLS' ? true : false,
      // icon1: true,
      // cameFrom: 'home',
    });
  };
  useEffect(() => {
    checkJourney();
  }, []);
  const checkJourney = async value => {
    try {
      const check = await AsyncStorage.getItem('journeyCompleted');
      if (check !== null) {
        return;
      } else {
        await AsyncStorage.setItem('journeyCompleted', 'DONE');
      }
    } catch (e) {
      // saving error
      console.log(e);
    }
  };
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to exit?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const Data = [
    {
      id: 1,
      bg1: Images.BackGround.rectangle2,
      bg12: Images.BackGround.Bg2,
      name: 'TONGLEN',
      title: 'Title',
      textA: 'FEATURED TOOLS',
      plus: 'plus',
      img4: Images.BackGround.rectangle2,
      one: Images.Icons.circleplus,
      // PressItem: () => {
      //   props.navigation.navigate('GroundWork', {
      //     screen: 'Buddhisim',
      //     params: {
      //       heading: 'Quantum Physics ',
      //     },
      //   });
      // },
    },
    {
      id: 2,
      bg1: Images.BackGround.rectangle2,
      bg12: Images.BackGround.Bg2,
      name: 'TONGLEN',
      title: 'Title',
      textA: 'FEATURED GROUNDWORK',
      img4: Images.BackGround.rectangle2,
      one: Images.Icons.circleplus,
      heart1: true,
      //  PressItem: () => {
      //     navigation.navigate('GroundWork', {
      //       screen: 'Buddhisim',
      //       params: {
      //         heading: 'Buddhisim',
      //       },
      //     });
      //   },
    },
    // {
    //   id: 3,
    //   bg1: Images.BackGround.rectangle2,
    //   bg12: Images.BackGround.Bg2,
    //   name: 'TONGLEN',
    //   title: 'Title',
    //   textA: 'BUDDHISIM',
    //   textB: 'See All',
    //   img4: Images.BackGround.rectangle2,
    //   one: Images.Icons.circleplus,
    //   heart1: true,

    //   PressItem: () => {
    //     navigation.navigate('GroundWork', {
    //       screen: 'Buddhisim',
    //       params: {
    //         heading: 'Buddhisim',
    //       },
    //     });
    //   },
    // },
    {
      id: 3,
      bg1: Images.BackGround.rectangle2,
      bg12: Images.BackGround.Bg2,
      name: 'TONGLEN',
      title: 'Title',
      textA: 'BUDDHISIM',
      textB: 'See All',
      plus: 'plus',
      img4: Images.BackGround.rectangle2,
      one: Images.Icons.circleplus,
      PressItem: () => {
        props.navigation.navigate('GroundWork', {
          screen: 'Buddhisim',
          params: {
            heading: 'Buddhisim',
            cameFrom: 'home',
          },
        });
      },
    },
    {
      id: 4,
      bg1: Images.BackGround.rectangle2,
      bg12: Images.BackGround.Bg2,
      name: 'TONGLEN',
      title: 'Title',
      textA: 'QUANTUM PHYSICS',
      textB: 'See All',
      plus: 'plus',
      img4: Images.BackGround.rectangle2,
      one: Images.Icons.circleplus,
      PressItem: () => {
        props.navigation.navigate('GroundWork', {
          screen: 'Buddhisim',
          params: {
            heading: 'Quantum Physics ',
            cameFrom: 'home',
          },
        });
      },
    },
    {
      id: 5,
      bg1: Images.BackGround.rectangle2,
      bg12: Images.BackGround.Bg2,
      name: 'TONGLEN',
      title: 'Title',
      textA: ' SCIENCE /DATA',
      textB: 'See All',
      plus: 'plus',
      img4: Images.BackGround.rectangle2,
      one: Images.Icons.circleplus,
      PressItem: () => {
        props.navigation.navigate('GroundWork', {
          screen: 'Buddhisim',
          params: {
            heading: 'Scince/ Data',
            cameFrom: 'home',
          },
        });
      },
    },
    {
      id: 5,
      bg1: Images.BackGround.rectangle2,
      bg12: Images.BackGround.Bg2,
      name: 'TONGLEN',
      title: 'Title',
      textA: 'NATURE',
      textB: 'See All',
      plus: 'plus',
      img4: Images.BackGround.rectangle2,
      one: Images.Icons.circleplus,
      PressItem: () => {
        props.navigation.navigate('GroundWork', {
          screen: 'Buddhisim',
          params: {
            heading: 'Nature',
            cameFrom: 'home',
          },
        });
      },
    },
    {
      id: 5,
      bg1: Images.BackGround.rectangle2,
      bg12: Images.BackGround.Bg2,
      name: 'TONGLEN',
      title: 'Title',
      textA: 'PLANTS',
      textB: 'See All',
      plus: 'plus',
      img4: Images.BackGround.rectangle2,
      one: Images.Icons.circleplus,
      PressItem: () => {
        props.navigation.navigate('Buddhisim', {
          heading: 'Plants',
          cameFrom: 'home',
        });
      },
    },
    {
      id: 5,
      bg1: Images.BackGround.rectangle2,
      bg12: Images.BackGround.Bg2,
      name: 'TONGLEN',
      title: 'Title',
      textA: 'BODY WISDOM',
      textB: 'See All',
      plus: 'plus',
      img4: Images.BackGround.rectangle2,
      one: Images.Icons.circleplus,
      PressItem: () => {
        props.navigation.navigate('Buddhisim', {
          heading: 'Body Wisdom',
          cameFrom: 'home',
        });
      },
    },
    {
      id: 5,
      bg1: Images.BackGround.rectangle2,
      bg12: Images.BackGround.Bg2,
      name: 'TONGLEN',
      title: 'Title',
      textA: 'WESTERN PSYCHOLOGY',
      textB: 'See All',
      plus: 'plus',
      img4: Images.BackGround.rectangle2,
      one: Images.Icons.circleplus,
      PressItem: () => {
        props.navigation.navigate('Buddhisim', {
          heading: 'Western Psychology',
          cameFrom: 'home',
        });
      },
    },
    {
      id: 5,
      bg1: Images.BackGround.rectangle2,
      bg12: Images.BackGround.Bg2,
      name: 'TONGLEN',
      title: 'Title',
      textA: 'HIGHER DIMENSIONAL BEINGS',
      textB: 'See All',
      plus: 'plus',
      img4: Images.BackGround.rectangle2,
      one: Images.Icons.circleplus,
      PressItem: () => {
        props.navigation.navigate('Buddhisim', {
          heading: 'Higher Dimensional Beings',
          cameFrom: 'home',
        });
      },
    },
    {
      id: 5,
      bg1: Images.BackGround.rectangle2,
      bg12: Images.BackGround.Bg2,
      name: 'TONGLEN',
      title: 'Title',
      textA: 'LIGHT BEINGS',
      textB: 'See All',
      plus: 'plus',
      img4: Images.BackGround.rectangle2,
      one: Images.Icons.circleplus,
      PressItem: () => {
        props.navigation.navigate('Buddhisim', {
          heading: 'Light Beings',
          cameFrom: 'home',
        });
      },
    },
    {
      id: 5,
      bg1: Images.BackGround.rectangle2,
      bg12: Images.BackGround.Bg2,
      name: 'TONGLEN',
      title: 'Title',
      textA: 'ASCENDED MASTERS',
      textB: 'See All',
      plus: 'plus',
      img4: Images.BackGround.rectangle2,
      one: Images.Icons.circleplus,
      PressItem: () => {
        props.navigation.navigate('Buddhisim', {
          heading: 'Ascended Masters',
          cameFrom: 'home',
        });
      },
    },
    {
      id: 5,
      bg1: Images.BackGround.rectangle2,
      bg12: Images.BackGround.Bg2,
      name: 'TONGLEN',
      title: 'Title',
      textA: 'MINDFULNESS + MEDITATION',
      textB: 'See All',
      plus: 'plus',
      img4: Images.BackGround.rectangle2,
      one: Images.Icons.circleplus,
      PressItem: () => {
        props.navigation.navigate('Buddhisim', {
          heading: 'Mindfulness + Meditation',
          cameFrom: 'home',
        });
      },
    },
    {
      id: 5,
      bg1: Images.BackGround.rectangle2,
      bg12: Images.BackGround.Bg2,
      name: 'TONGLEN',
      title: 'Title',
      textA: 'ANCIENT AND INDGENOUS WISDOM',
      textB: 'See All',
      plus: 'plus',
      img4: Images.BackGround.rectangle2,
      one: Images.Icons.circleplus,
      PressItem: () => {
        props.navigation.navigate('Buddhisim', {
          heading: 'Ancient and Indgenous wisdome',
          cameFrom: 'home',
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
            heartPress={() =>
              props.navigation.navigate('me', {
                screen: 'FressBlooms',
                params: {
                  otherParam: 'Favorites',
                  showdata: true,
                  heart: true,
                },
              })
            }
            plusPress={() =>
              props.navigation.navigate('me', {
                screen: 'FressBlooms',
                params: {
                  otherParam: 'Tools to Try',
                  showdata: true,
                  plus: true,
                  threedost: true,
                },
              })
            }
            iconName="search1"
            OnPress={() => setVisible(true)}
            search={true}
            logo={true}
            right="heartplus"
          />
          <View style={styles.Box1}>
            <View
              style={{width: '90%', alignSelf: 'center', marginVertical: 8}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 28,
                  fontWeight: '600',
                  color: '#000000',
                  marginTop: 20,
                  fontFamily: 'BrandonGrotesque-Regular',
                }}>
                Hi, You.
              </Text>
            </View>
            <View style={styles.centerbox}>
              <View
                style={
                  {
                    // backgroundColor: 'red',
                  }
                }>
                <SeeAll
                  onPress={() => {
                    props.navigation.navigate('me', {
                      screen: 'FressBlooms',
                      params: {
                        otherParam: 'Fresh Blooms',
                        heart: true,
                        icon1: false,
                        fromHome: true,
                      },
                    });
                  }}
                  color1="#1C5C2E"
                  textA="FRESH BLOOMS"
                  size={18}
                  textB="See All"
                />
                <View style={[styles.box2, {}]}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {Data.map((item, index) => {
                      return (
                        <MainBox
                          marginTop11={24}
                          minutes={'5 min'}
                          Wheart
                          left={100}
                          bgcolor={'#1C5C2E87'}
                          img2={item.img4}
                          marginTop2={43}
                          item={item.ImgICon}
                          color={'green'}
                          textone="TONGLEN"
                          date1={'Posted Date:12-01-2022'}
                          text2={'5 min'}
                        />
                      );
                    })}
                  </ScrollView>
                </View>
              </View>
              <View style={[styles.box2, {}]}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={item => item.id}
                  data={Data}
                  renderItem={({item}) => {
                    return (
                      <>
                        <TouchableOpacity
                          onPress={item.PressItem}
                          style={{
                            width: '95%',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: 10,
                            marginTop: 13,
                            marginVertical: 5,
                          }}>
                          <Text style={[styles.txtA, {color: '#1C5C2E'}]}>
                            {item.textA}
                          </Text>
                          <View onPress={item.PressItem} style={{}}>
                            <Text style={styles.txtB}>{item.textB}</Text>
                          </View>
                        </TouchableOpacity>
                        <All
                          // marginTop={13}
                          // marginBottom={10}
                          // color1="#1C5C2E"
                          pressI={() => navigate(item)}
                          textA={item.textA}
                          heart1={item.heart1}
                          textB={item.textB}
                          homebox
                          plus={item.plus}
                          bghome2={item.bg12}
                          title={item.title}
                        />
                      </>
                    );
                  }}
                />
              </View>
            </View>
          </View>
          <View style={{height: 85}} />
        </ScrollView>
      </ImageBackground>
      <SearchModal
        visible={visible}
        setVisible={setVisible}
        navigation={props.navigation}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Box1: {
    width: '90%',
    height: '100%',
    alignSelf: 'center',
  },
  centerbox: {
    width: '100%',
    marginVertical: 10,
    justifyContent: 'center',
  },
  box1: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'yellow',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
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

export default Home;
