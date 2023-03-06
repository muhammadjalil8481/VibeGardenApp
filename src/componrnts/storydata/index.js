import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const StoryData = props => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'space-evenly',
        marginVertical: 20,
      }}>
      {props.storytext1 && (
        <View style={{width: '90%', alignSelf: 'center', marginTop: 10}}>
          <Text style={[styles.txt, {textAlign: 'left', lineHeight: 24}]}>
            {props.storytext}
          </Text>
        </View>
      )}
      {props.storyimage && (
        <View style={styles.img}>
          <Image
            source={props.Img}
            style={{width: '100%', height: '100%'}}
            resizeMode="contain"
          />
        </View>
      )}
      {props.storytext2 && (
        <View style={{width: '90%', alignSelf: 'center'}}>
          <Text style={styles.txt}>{props.storytext}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    // backgroundColor: 'pink',
    // marginVertical: 10,
    margin: 5,
    width: '90%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  txt: {
    // marginVertical: 15,
    fontFamily: 'BrandonGrotesque-Regular',
    textAlign: 'center',
    fontSize: 14,
    color: '#1C5C2E',
    letterSpacing: 0.5,
  },
});

export {StoryData};
