import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import Images from '../../constants';

const Userdetails = ({
  Img1,
  text,
  time,
  Date,
  name,
  names,
  bgcolor,
  elevation,
  databox,
  databox1,
  databox2,
  backgroundColor,
  nametext,
  bear,

  users,
}) => {
  return (
    <>
      <View style={{width: '90%', alignSelf: 'center'}}>
        {databox1 && (
          <View style={styles.boxouter}>
            <View style={{width: '95%', alignSelf: 'center'}}>
              <View
                style={{
                  justifyContent: 'space-between',
                  width: '100%',
                  borderRadius: 30,
                  height: 80,
                  backgroundColor: bgcolor,
                  elevation: elevation,
                  flexDirection: 'row',
                  shadowColor: '#000',
                }}>
                <View
                  style={{width: 60, height: 60, marginTop: 12, margin: 10}}>
                  <Image
                    source={Img1}
                    style={{width: 60, height: 60, borderRadius: 100}}
                  />
                </View>
                <View style={{width: '80%', height: 100, marginTop: 10}}>
                  <View
                    style={{
                      width: '100%',
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                      shadowColor: '#000',
                    }}>
                    <Text style={[styles.text1]}>{name}</Text>
                    <Text
                      style={{
                        fontSize: 10,
                        color: '#000000',
                        fontFamily: 'BrandonGrotesque-Regular',
                      }}>
                      {time}
                    </Text>
                  </View>

                  <Text
                    style={[
                      {
                        // fontWeight: '400',
                        fontSize: 10,
                        color: '#000000',
                        fontFamily: 'BrandonGrotesque-Regular',
                      },
                    ]}>
                    {text}
                  </Text>
                </View>
                <View style={{marginTop: 8}}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#000',
                      marginTop: 30,
                      fontWeight: 'bold',
                    }}>
                    {Date}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
      </View>

      {databox2 && (
        <View
          style={{
            backgroundColor: backgroundColor,
            borderRadius: 12,
            opacity: 0.75,
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
            }}>
            <View style={{width: 44, height: 45, margin: 15}}>
              <Image
                source={bear}
                resizeMode="contain"
                style={{width: '100%', height: '100%'}}
              />
              <View>
                {nametext && (
                  <Text
                    style={{
                      textAlign: 'center',
                      // marginLeft: 20,
                      marginTop: 5,
                      fontWeight: 'bold',
                      fontSize: 13,
                      color: '#000',
                    }}>
                    {names}
                  </Text>
                )}
              </View>
            </View>
            <View style={{width: '76%', padding: 3, marginVertical: 4}}>
              <Text
                style={{
                  fontSize: 12,
                  marginTop: 14,
                  lineHeight: 16,
                  fontFamily: 'BrandonGrotesque-Regular',
                  color: '#000',
                }}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </Text>
              <View style={{alignSelf: 'flex-end'}}>
                <Text
                  style={{
                    color: '#1C5C2E',
                    textDecorationLine: 'underline',
                    marginRight: 10,
                    marginBottom: 2,
                  }}>
                  Link
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor: 'pink',
  },
  box: {
    marginVertical: 10,
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: 30,
    height: 86,
    // borderWidth: 1,
    backgroundColor: '#fff',
    elevation: 5,
    // borderColor: 'grey',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // elevation: 1,
  },

  boxouter: {},
  img: {
    marginTop: 14,
    marginLeft: 5,
    // marginRight: 10,
  },

  txtview: {
    marginTop: 20,
    marginRight: 15,
  },
  text1: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'BrandonGrotesque-Medium',
  },
});
export {Userdetails};
