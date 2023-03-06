import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Pinkbtn = ({btntxt, width, onPress, onpres2, onpres3, shadow}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: width,
        shadowColor: shadow,
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        elevation: 24,
      }}>
      <LinearGradient
        colors={['#ED535E', '#CD258D']}
        style={[styles.btn1, {width: width, shadowColor: shadow}]}>
        <Text
          style={{
            fontWeight: '400',
            color: '#fff',
            fontSize: 18,
            fontFamily: 'BrandonGrotesque-Regular',
          }}>
          {btntxt}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export {Pinkbtn};
const styles = StyleSheet.create({
  btn1: {
    shadowOffset: {
      width: 50,
      height: 52,
    },
    shadowColor: 'red',
    shadowOpacity: 20.58,
    shadowRadius: 16.0,
    elevation: 24,

    marginVertical: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    // elevation: 10,
    // shadowColor: '#aaaa',
    borderRadius: 30,
  },
});
