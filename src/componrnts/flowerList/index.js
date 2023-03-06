import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Ionicons';
import Images from '../../constants';

const Flowers = ({text1, img1, onPress, headtext, flower1, width}) => {
  return (
    <>
      <View style={styles.container}>
        <>
          {headtext && (
            <View style={{margin: 5}}>
              <TouchableOpacity onPress={onPress} style={styles.circle}>
                <Image source={img1} />
              </TouchableOpacity>
              <View style={{fontSize: 10, width: 80}}>
                <Text
                  style={{
                    margin: 5,
                    fontSize: 18,
                    color: '#000',
                    textAlign: 'center',
                    color: '#1C5C2E',
                  }}>
                  {text1}
                </Text>
              </View>
            </View>
          )}
          {flower1 && (
            <View style={{width: width}}>
              <TouchableOpacity onPress={onPress} style={styles.circle}>
                <Image source={img1} style={{}} />
              </TouchableOpacity>
              <View style={{}}>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#000',
                    textAlign: 'center',
                    color: '#1C5C2E',
                  }}>
                  {text1}
                </Text>
              </View>
            </View>
          )}
        </>
      </View>
    </>
  );
};

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
  },
  text2: {
    marginVertical: 2,
    fontSize: 20,
    // textAlign: 'center',
    color: '#1C5C2E',
    fontWeight: '500',
  },
  starbg: {
    width: 330,
    height: 200,
    alignSelf: 'center',
    marginVertical: 10,
    backgroundColor: '#00000029',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  starbg2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  starimgbg: {
    width: 330,
    height: 200,
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
});
export {Flowers};
