import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header, SeeAll, Userdetails} from '../../../componrnts';
import All from '../../../componrnts/all';
import Images from '../../../constants';
import {useBackButton} from '../../../hooks/BackHandler';

const Buddhisim = ({navigation, route}) => {
  const {otherParam1, heading, cameFrom} = route.params;
  // const onBackPress = () => {
  //   navigation.goBack();
  //   return true;
  // };

  const backHandler = () => {
    navigation.goBack();
    // if (cameFrom === 'tools')
    //   navigation.reset({
    //     index: 0,
    //     routes: [{name: 'tools'}, {name: 'Homes'}],
    //   });
    // else if (cameFrom === 'groundwork')
    //   return navigation.reset({
    //     index: 0,
    //     routes: [{name: 'GroundWork'}],
    //   });
    // else if (cameFrom === 'home')
    //   return navigation.reset({
    //     index: 0,
    //     routes: [{name: 'Homes'}],
    //   });
    // return navigation.reset({
    //   index: 0,
    //   routes: [{name: 'Homes'}],
    // });
  };
  const onBackPress = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'GroundWork'}, {name: 'Homes'}, {name: 'tools'}],
    });
    return true;
  };
  useBackButton(navigation, onBackPress);

  const data = [
    {
      Img1: Images.Imgs.user2,
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
      name: 'Michael Grower',
    },
    {
      text1: 'No idea What a Multiverse is',
      texlist: 'Quantum physics',
      Img1: Images.Imgs.user2,
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
      name: 'Michael Grower',
    },
    {
      text1: 'SMCA Peepsceen to think so',
      texlist: 'Nature',
      Img1: Images.Imgs.user2,
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
      name: 'Michael Grower',
    },
    {
      text1: 'Shall we Question Heap',
      Img1: Images.Imgs.user2,
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ',
      name: 'Michael Grower',
    },
  ];
  const Data = [
    {
      id: 1,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.Bg2,
      name: 'TONGLEN',
      title: 'Title',
      plus: 'plus',
      textA: 'Related Tools',
      type: 'tool',
    },
    {
      id: 2,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.Bg2,
      heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      title: 'Title',
      textA: 'Related Groundwork',
      type: 'gw',
    },
  ];
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar animated={true} backgroundColor="#000" />
      <ImageBackground
        source={Images.BackGround.backgroundHue}
        resizeMode="stretch"
        style={styles.image}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <Header
            headertextColor="#1C5C2E"
            fontSize={25}
            iconName="arrowleft"
            headertext={heading}
            OnPress={() => backHandler()}
          />
          <View style={styles.Box1}>
            <View
              style={{
                width: 250,
                alignSelf: 'center',
                marginTop: 30,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  lineHeight: 25,
                  fontSize: 12,
                  color: '#000000',
                  fontFamily: 'BrandonGrotesque-Medium',
                }}>
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed
                Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna.
              </Text>
            </View>
            <View style={[styles.box2, {marginVertical: 10}]}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                data={Data}
                renderItem={({item}) => {
                  return (
                    <>
                      <All
                        headetboxText
                        marginVertical={15}
                        color1="#000"
                        pressI={() =>
                          navigation.navigate('Video', {
                            otherParam:
                              item.type === 'tool' ? 'Tools to try' : '',
                            plus: item.type === 'tool' ? true : false,
                            otherParam1:
                              item.type === 'tool'
                                ? `TONGLEN`
                                : 'FAMILY OF LIGHT',
                            // textflower: 'Did you try this tools?',
                            icon1: true,
                            redbtn: true,
                            backoption: () => navigation.goBack(),
                          })
                        }
                        // onPressALL={item.pressAll}
                        textA={item.textA}
                        heart1={item.heart1}
                        textB={item.textB}
                        homebox
                        plus={item.plus}
                        bghome2={item.bg12}
                        title={item.title}
                        marginTop={20}
                      />
                    </>
                  );
                }}
              />
            </View>
            <View style={styles.centerbox}>
              <View style={{marginTop: 20}}>
                <SeeAll
                  onPress={() =>
                    navigation.navigate('Homes', {
                      screen: 'FressBlooms',
                    })
                  }
                  color1="#000"
                  textA="Related Teacher"
                />
              </View>
              <View style={{marginVertical: 3}}>
                <View style={{}}>
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    renderItem={({item}) => {
                      return (
                        <>
                          <View style={{}}>
                            <Userdetails
                              databox2
                              bear={item.Img1}
                              nametext={true}
                              names={'Mark'}
                            />
                          </View>
                        </>
                      );
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Box1: {
    width: '95%',
    height: '100%',
    alignSelf: 'center',
  },
  centerbox: {
    width: '100%',
  },
  box1: {
    width: '95%',
    alignSelf: 'center',
  },
  greenbox: {},
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Buddhisim;
