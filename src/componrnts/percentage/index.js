import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Pinkbtn} from '../pinkbtn';

const Percentage = ({
  Image1,
  text1,
  margin1,
  check,
  icons,
  onPress,
  btntxt,
  simpletext,
  simpletext1,
  width,
  paddingVertical,

  btn,
  Pertext,
}) => {
  const [count, setCount] = useState(23);
  return (
    <View style={[styles.box, {paddingVertical: paddingVertical}]}>
      {simpletext && (
        <Text
          style={[
            {
              textAlign: 'center',
              marginVertical: 10,
              marginTop: 30,
              // lineHeight: 40,
              fontSize: 18,
              color: '#000',
              fontFamily: 'BrandonGrotesque-Medium',
            },
          ]}>
          {simpletext1}
        </Text>
      )}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginVertical: 10,
        }}>
        <View>
          <Text
            style={{marginHorizontal: margin1, fontSize: 16, color: '#030303'}}>
            {text1}
          </Text>
        </View>
        <View
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            marginHorizontal: margin1,
            shadowColor: 'rgba(0,0,0,0.4)',
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,

            elevation: 24,
          }}>
          <Image source={Image1} style={[styles.img]} resizeMode="contain" />
          {Pertext && (
            <Text
              style={{
                textAlign: 'center',
                color: 'green',
                marginTop: 5,
                // marginLeft: 10,
              }}>
              0-25%
            </Text>
          )}
        </View>

        <Text
          style={{
            marginRight: 15,
            marginLeft: 10,
            fontSize: 18,
            color: '#979B9F',
            marginTop: -5,
          }}>
          {count}%
        </Text>
        <View>
          {icons && (
            <>
              <TouchableOpacity onPress={() => setCount(count + 1)}>
                <View style={{}}>
                  <Icon name="up" size={24} color="#000" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setCount(count - 1)}>
                <View style={{}}>
                  <Icon name="down" size={24} color="#000" />
                </View>
              </TouchableOpacity>
            </>
          )}
          {check && (
            <View
              style={{
                marginTop: -5,
                width: 18,
                height: 18,
                borderRadius: 100,
                backgroundColor: 'green',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: -8,
              }}>
              <Icon name="check" size={12} color="#fff" />
            </View>
          )}
        </View>
      </View>
      {btn && (
        <View
          style={{
            marginVertical: 10,
            width: '100%',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Pinkbtn
            shadow={'#030303'}
            onPress={onPress}
            width={width}
            btntxt={btntxt}
          />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    paddingVertical: 10,
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#CD258D',
    // overflow: 'hidden',
    // shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 100,
    alignSelf: 'center',
  },
});
export {Percentage};
