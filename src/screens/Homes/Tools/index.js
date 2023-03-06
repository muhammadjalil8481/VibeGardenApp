import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Greenbox, Header, Imgbox, SeeAll, StoryData} from '../../../componrnts';
import All from '../../../componrnts/all';
import SearchModal from '../../../componrnts/SearchModal';
import Images from '../../../constants';
import {useBackButton} from '../../../hooks/BackHandler';

const Tools = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const Data = [
    {
      id: 1,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.Bg2,
      // heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      title: 'Title',
      plus: 'plus',
    },
    {
      id: 2,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.Bg2,
      // heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      plus: 'plus',
      title: 'Title',
    },
  ];
  //BackHandler
  const onBackPress = () => {
    navigation.navigate('Homes');
    return true;
  };
  useBackButton(navigation, onBackPress);
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
              navigation.navigate('me', {
                screen: 'FressBlooms',
                params: {
                  otherParam: 'Favorites',
                  showdata: true,
                  heart: true,
                },
              })
            }
            plusPress={() =>
              navigation.navigate('me', {
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
            <View style={{width: '100%', alignItems: 'center'}}>
              <Text
                style={{
                  marginTop: 15,
                  fontSize: 28,
                  color: '#000000',
                  fontFamily: 'BrandonGrotesque-Regular',
                }}>
                Tools
              </Text>
            </View>
            <View style={{width: '90%', alignSelf: 'center', marginTop: 5}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  color: '#000000',
                  fontFamily: 'BrandonGrotesque-Regular',
                }}>
                Its Blooms Time
              </Text>
            </View>

            <View style={[styles.centerbox, {}]}>
              <Greenbox
                texlist="Nature"
                img1
                origin="tools"
                navigation={navigation}
                press1={() => {
                  navigation.navigate('tools', {
                    screen: 'Buddhisim',
                    params: {
                      otherParam1: 'FAMILY OF LIGHT',
                      cameFrom: 'tools',
                    },
                  });
                }}
                // Press2={() => {
                //   navigation.navigate('Buddhisim', {
                //     otherParam1: '',
                //     cameFrom: 'tools',
                //   });
                // }}
                // Press3={() => {
                //   navigation.navigate('GroundWork', {
                //     screen: 'Buddhisim',
                //     params: {
                //       heading: 'FAMILY OF LIGHT',
                //       cameFrom: 'tools',
                //     },
                //   });
                // }}
                Press4={() => {
                  navigation.navigate('resonance');
                  // navigation.navigate('tools', {
                  //   screen: 'resonance',
                  //   // cameFrom: 'tools',
                  // });
                }}
              />
              <View
                style={
                  {
                    // backgroundColor: 'blue'
                  }
                }>
                <View style={[styles.box2, {marginTop: -35, marginBottom: 10}]}>
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    data={Data}
                    renderItem={({item}) => {
                      return (
                        <All
                          headetboxText
                          pressI={
                            () =>
                              navigation.navigate('Video', {
                                otherParam: true,
                                plus: true,
                                redbtn: true,
                                // headerPlusicon: 'plus',
                                otherParam1: 'TONGLEN',
                                cameFrom: 'tools',
                                icon1: false,
                                backoption: () => navigation.goBack(),
                              })
                            // navigation.navigate('tools', {
                            //   screen: 'ToolVideo',
                            //   params: {

                            //   },
                            // })
                          }
                          textA={item.textA}
                          heart1={item.heart1}
                          textB={item.textB}
                          homebox
                          plus={item.plus}
                          bghome2={item.bg12}
                          title={item.title}
                          marginVertical2={15}
                          marginTop2={-10}
                        />
                      );
                    }}
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
  Box1: {
    width: '90%',
    height: '100%',
    // backgroundColor: 'yellow',
    alignSelf: 'center',
  },
  centerbox: {
    // backgroundColor: '#1C5C2E',
    width: '100%',
    // // height: '100%',
    justifyContent: 'center',
  },
  box1: {
    width: '95%',
    alignSelf: 'center',
    // height: '100%',
    // backgroundColor: 'yellow',
  },
  greenbox: {},
  image: {
    flex: 1,
    justifyContent: 'center',
    // paddingTop: 100,
  },
});

export default Tools;
