import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

import {
  FirstSvg,
  FourthSvg,
  SecondSvg,
  ThirdSvg,
} from '../../assests/svgs/QuestionsSvg';

const Ratings = ({
  navigation,
  text1,
  text2,
  text3,
  opress1,
  opress2,
  opress3,
  opress4,
  text4,
  flowwerlist11,
  colapse,
}) => {
  const numColumns = 4;
  const data = [
    {
      text1: text1,
      img1: <FirstSvg />,
      onPress: opress1,
    },
    {
      text1: text2,
      img1: <SecondSvg />,
      onPress: opress2,
    },
    {
      text1: text3,
      img1: <ThirdSvg />,
      onPress: opress3,
    },
    {
      text1: text4,
      img1: <FourthSvg />,
      onPress: opress4,
    },
  ];

  return (
    <View style={{marginVertical: 10}}>
      {flowwerlist11 && (
        <View style={{}}>
          <FlatList
            columnWrapperStyle={{
              width: '90%',
              alignSelf: 'center',
              justifyContent: 'space-around',
              marginTop: 5,
              marginVertical: 10,
            }}
            data={data}
            style={{}}
            contentContainerStyle={{}}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={item.onPress}
                activeOpacity={0.7}
                style={{alignItems: 'center'}}>
                <View style={{}}>
                  <>
                    <View style={[styles.circle, {width: 80, height: 80}]}>
                      {item.img1}
                    </View>
                  </>
                  <Text
                    style={{
                      marginTop: 5,
                      width: 70,
                      fontSize: 12,
                      textAlign: 'center',
                      fontFamily: 'BrandonGrotesque-Regular',
                      color: '#1C5C2E',
                    }}>
                    {item.text1}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            //Setting the number of column
            keyExtractor={(item, index) => index.toString()}
            numColumns={numColumns}
          />
        </View>
      )}
    </View>
  );
};

export default Ratings;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fefe',
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
    fontFamily: 'BrandonGrotesque-Medium',
  },
  text2: {
    fontSize: 20,
    color: '#1C5C2E',
    fontFamily: 'BrandonGrotesque-Regular',
  },
  starbg: {
    width: '100%',
    height: 200,
    alignSelf: 'center',
    marginVertical: 10,
    backgroundColor: '#00000029',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  starbg2: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starimgbg: {
    width: '100%',
    height: 200,
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    // margin: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,

    borderRadius: 100,
    // backgroundColor: 'yellow',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
