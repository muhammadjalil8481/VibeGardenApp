import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '../../../componrnts';
import {useBackButton} from '../../../hooks/BackHandler';
import Images from '../../../constants';
const Result = ({navigation, route}) => {
  const {backoption} = route.params;
  const onBackPress = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'me'}, {name: 'tools'}],
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
          headertextColor="#1C5C2E"
          OnPress={() => {
            navigation.reset({
              index: 0,
              routes: [{name: 'me'}, {name: 'tools'}],
            });
          }}
          headertext="Resonance Finder"
        />
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            marginTop: 15,
          }}>
          <View style={{marginVertical: 10}}>
            <Text
              style={{
                fontSize: 31,
                textAlign: 'center',
                color: '#000',
                fontFamily: 'BrandonGrotesque-Regular',
              }}>
              Result!
            </Text>
          </View>
          <View
            style={{
              width: 79,
              height: 79,
              alignSelf: 'center',
            }}>
            <Image
              source={Images.Imgs.Rainbow}
              resizeMode="contain"
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <View>
            <Text
              style={{
                marginVertical: 10,
                fontSize: 20,
                // textAlign: 'center',
                color: '#000',
                fontFamily: 'BrandonGrotesque-Medium',
              }}>
              What fun your top areas resonance?
            </Text>
            <View style={styles.row}>
              <View style={styles.clo1}>
                <Text style={styles.text1}>1</Text>
                <Text style={styles.text1}>2</Text>
                <Text style={styles.text1}>3</Text>
              </View>
              <View style={styles.clo1}>
                <Text style={styles.text2}>Buddhism</Text>
                <Text style={styles.text2}>Plants Wisdom</Text>
                <Text style={styles.text2}>Quantum Physics Science</Text>
              </View>
            </View>
            <Text
              style={{
                marginVertical: 10,
                fontSize: 20,
                // textAlign: 'center',
                color: '#000',
                fontWeight: '400',
                fontFamily: 'BrandonGrotesque-Regular',
              }}>
              And The rest , in Descending Order:
            </Text>
            <View style={styles.row}>
              <View style={styles.clo1}>
                <Text style={styles.text1}>1</Text>
                <Text style={styles.text1}>2</Text>
                <Text style={styles.text1}>3</Text>
                <Text style={styles.text1}>4</Text>
                <Text style={styles.text1}>5</Text>
                <Text style={styles.text1}>6</Text>
              </View>
              <View style={styles.clo1}>
                <Text style={styles.text2}>Inner dim light Beings</Text>
                <Text style={styles.text2}>Mindfullness</Text>
                <Text style={styles.text2}>Western Physics</Text>
                <Text style={styles.text2}>Ascended Master</Text>
                <Text style={styles.text2}>Ascent Wisdom</Text>
                <Text style={styles.text2}>Nature</Text>
              </View>
            </View>
          </View>
          <View style={{borderBottomWidth: 1, width: 68}}>
            <Text style={styles.text3}>Note:</Text>
          </View>
          <Text style={styles.text4}>
            as You grow and heal your feelings of resonance will definitely
            change as it moves close your the essential resonance!
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
    // backgroundColor: 'pink',
  },
  row: {
    flexDirection: 'row',
    // backgroundColor: 'green',
  },
  text1: {
    marginVertical: 10,
    fontFamily: 'BrandonGrotesque-Regular',
    color: '#1C5C2E',

    fontSize: 16,
  },
  text2: {
    marginVertical: 10,
    fontFamily: 'BrandonGrotesque-Regular',
    color: '#000',
    fontSize: 16,
    marginLeft: 10,
  },
  text3: {
    color: '#000',
    fontSize: 26,
    fontFamily: 'BrandonGrotesque-Regular',
  },
  text4: {
    marginVertical: 15,
    letterSpacing: 0.6,
    color: '#030303',
    fontSize: 16,
    fontFamily: 'BrandonGrotesque-Regular',
  },
});
export default Result;
