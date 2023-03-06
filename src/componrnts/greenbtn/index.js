import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Greenbtn = ({text1, width, onPress}) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          alignSelf: 'center',
          width: width,
          // shadowColor: '#00000029',
          height: 55,
          backgroundColor: '#1C5C2E',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 7,
          },
          shadowOpacity: 0.43,
          shadowRadius: 9.51,

          elevation: 15,
        }}
        onPress={onPress}>
        <Text
          style={{
            color: '#fff',
            fontSize: 20,
            fontFamily: 'BrandonGrotesque-Regular',
          }}>
          {text1}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export {Greenbtn};

const styles = StyleSheet.create({});
