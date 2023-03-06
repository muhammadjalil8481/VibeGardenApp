import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Header, Percentage, Pinkbtn} from '../../../componrnts';
import Images from '../../../constants';

const MeetScreen2 = ({route, navigation}) => {
  const {Image1, newtext} = route.params;

  return (
    <SafeAreaView style={styles.main}>
      <Header iconName="arrowleft" OnPress={() => navigation.goBack()} />
      <ImageBackground
        source={Images.BackGround.backgroundHue}
        resizeMode="stretch"
        style={styles.image}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={{width: '90%', alignSelf: 'center'}}>
            <View style={{}}>
              <Percentage check={true} Image1={Image1} paddingVertical={20} />

              <View style={{marginTop: 30}}>
                <Text style={styles.txt}>Perfect Erin!</Text>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#000',
                    fontFamily: 'BrandonGrotesque-Regular',
                    lineHeight: 33,
                  }}>
                  {newtext}
                </Text>
              </View>
              <View
                style={{
                  marginVertical: 20,
                  width: '100%',
                  alignItems: 'center',
                  alignSelf: 'center',
                }}>
                <Pinkbtn
                  shadow={'#030303'}
                  onPress={() =>
                    navigation.reset({
                      index: 0,
                      routes: [
                        {
                          name: 'Tabs',
                        },
                      ],
                    })
                  }
                  width={'80%'}
                  btntxt="Take Me To the Garden"
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default MeetScreen2;

const styles = StyleSheet.create({
  main: {flex: 1, paddingTop: 15, backgroundColor: '#ffff'},

  img: {
    width: 80,
    height: 80,
    borderRadius: 100,
    alignSelf: 'center',
  },
  txt: {
    textAlign: 'center',
    fontSize: 24,
    color: '#000',
    marginVertical: 20,
    fontFamily: 'BrandonGrotesque-Regular',
  },

  txt1: {
    textAlign: 'left',
    fontSize: 18,
    color: '#030303',
    fontFamily: 'BrandonGrotesque-Regular',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    // paddingTop: 100,
  },
});
