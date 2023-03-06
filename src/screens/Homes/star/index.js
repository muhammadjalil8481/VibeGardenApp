import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';

import {Header} from '../../../componrnts';
import {useBackButton} from '../../../hooks/BackHandler';
import Images from '../../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';

const Star = ({navigation}) => {
  const onBackPress = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Homes'}, {name: 'me'}],
    });
    return true;
  };
  useBackButton(navigation, onBackPress);
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <Header
          iconName="closesquareo"
          // OnPress={() => {
          //   navigation.reset({
          //     index: 0,
          //     routes: [{name: 'Homes'}, {name: 'me'}],
          //   });
          // }}
          OnPress={() =>
            navigation.navigate('Video', {
              otherParam: true,
              plus: true,
              redbtn: true,
              // headerPlusicon: 'plus',
              otherParam1: 'TONGLEN',
              icon1: false,
              backoption: () => navigation.goBack(),
            })
          }
        />
        <View
          style={{
            marginVertical: 15,
            marginTop: 10,
            width: '90%',
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              marginVertical: 10,
              alignSelf: 'center',
              // backgroundColor: 'pink',
            }}>
            <Image resizeMode="contain" source={Images.Imgs.nebula} />
          </View>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              color: '#000',
              marginVertical: 5,
              fontFamily: 'BrandonGrotesque-Regular',
            }}>
            You're Star!
          </Text>
          <Text
            style={{
              marginVertical: 10,
              fontSize: 18,
              textAlign: 'center',
              color: '#000',
              lineHeight: 30,
              fontFamily: 'BrandonGrotesque-Medium',
            }}>
            Your Feedback Insight Will Help Us Refining Our Tools &
            Recommendations!
          </Text>
          <Text
            style={{
              fontSize: 24,
              textAlign: 'center',
              color: '#1C5C2E',
              marginVertical: 5,
              fontFamily: 'BrandonGrotesque-Bold',
            }}>
            With Gratitude!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    width: '100%',
    // height: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text1: {
    fontSize: 25,
    textAlign: 'center',
    color: '#000',
    fontWeight: '400',
  },
  text2: {
    marginVertical: 2,
    fontSize: 20,
    // textAlign: 'center',
    color: '#1C5C2E',
    fontWeight: '400',
  },
  starbg: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginVertical: 15,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Star;
