import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {Header, PopUp} from '../../../componrnts';
import Icon from 'react-native-vector-icons/AntDesign';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useBackButton} from '../../../hooks/BackHandler';
const Packages = ({navigation}) => {
  const [state, setstate] = useState(false);
  const [state1, setState1] = useState(false);
  //BackHandler
  const onBackPress = () => {
    navigation.goBack();
    return true;
  };
  useBackButton(navigation, onBackPress);
  return (
    <SafeAreaView style={styles.main}>
      <Header
        iconName="closesquareo"
        OnPress={() => navigation.goBack()}
        headertextColor="#191919B8"
        fontWeight="Bold"
        fontSize={20}
        textToLeft={true}
        headertext="Switch Packages"
      />
      <View style={styles.container}>
        <View style={styles.switchView}>
          <TouchableOpacity style={styles.row}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.text1}>
                <Text style={[styles.text1, {color: '#aaa'}]}>
                  Monthly $22{' '}
                </Text>
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../../../assests/images/tick.png')}
                  style={{marginTop: 10, margin: 4}}
                />
                <Text style={styles.text2}>Selected </Text>
              </View>
            </View>

            <Icon name="right" size={25} color="#1C5C2E" />
          </TouchableOpacity>
        </View>
        <View style={styles.switchView}>
          <TouchableOpacity
            onPress={() => {
              setstate(!state);
            }}
            style={styles.row}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.text1}>
                <Text
                  style={[styles.text1, {color: '#1C5C2E', fontWeight: '400'}]}>
                  Yearly $264{' '}
                </Text>
              </Text>

              <Image
                source={require('../../../assests/images/fire.png')}
                style={{marginTop: 10, margin: 4}}
              />
            </View>

            <Icon name="right" size={25} color="#1C5C2E" />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <PopUp
          poup1={true}
          Visible={state}
          btntext1="Cancel"
          btntext2="Use This Card"
          onpressA={() => {
            setstate(false);
            navigation.navigate('PaymentMethod', {
              headertext1: 'Pay Now',
              pressbtn: true,
            });
          }}
          setVisible={setstate}
          onpress1={() => {
            setstate(false);
            setState1(true);
          }}
        />
        <PopUp
          poup2={true}
          Visible={state1}
          setVisible={setState1}
          onpress1={() => {
            setstate(false);
            setState1(false);
            navigation.navigate('ManageSubscription');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    width: '90%',
    alignSelf: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  text1: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 4,
    textAlign: 'left',
    fontFamily: 'BrandonGrotesque-Regular',
  },
  text2: {
    color: '#1492E6',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 6,
    textAlign: 'left',
    fontFamily: 'BrandonGrotesque-Regular',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  icon1: {
    width: '25%',
    justifyContent: 'flex-end',
    marginTop: 5,
  },
  switchView: {
    // backgroundColor: 'green',
    width: '90%',
    flexDirection: 'row',
    marginTop: 25,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    alignSelf: 'center',
  },
});
export default Packages;
