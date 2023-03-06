import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import {Greenbtn, Header, PopUp} from '../../../componrnts';
import Images from '../../../constants';
import {useBackButton} from '../../../hooks/BackHandler';

const PaymentMethod = ({navigation, route}) => {
  const [state1, setState1] = useState(false);
  const [state, setState] = useState(false);
  const {headertext1, pressbtn} = route.params;
  //BackHandler
  const onBackPress = () => {
    navigation.goBack();
    return true;
  };
  useBackButton(navigation, onBackPress);
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <Header
          iconName="left"
          headertext="Pay Now"
          textToLeft={true}
          headertextColor="#191919B8"
          fontWeight="Bold"
          fontSize={20}
          leftIconSize={15}
          OnPress={() => navigation.goBack()}
        />
        <View
          style={{
            marginVertical: 10,
            width: '90%',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontSize: 37,
              textAlign: 'center',
              color: '#000',
              fontWeight: '500',
              marginVertical: 5,
              marginTop: 30,
              lineHeight: 39,
              fontFamily: 'BrandonGrotesque-Bold',
            }}>
            Payment Details
          </Text>
          <View style={{}}>
            <View style={{}}>
              <View style={{}}>
                <Text
                  style={{
                    fontSize: 15,
                    textAlign: 'center',
                    color: '#000',
                    marginVertical: 10,
                    fontFamily: 'BrandonGrotesque-Bold',
                  }}>
                  Credit Card Or Debit Card
                </Text>
              </View>
              <View style={{width: '90%', alignSelf: 'center'}}>
                <Text
                  style={{
                    fontSize: 10,
                    color: '#1C5C2E',
                    fontWeight: '400',
                    margin: 5,
                    fontFamily: 'BrandonGrotesque-Regular',
                  }}>
                  Card Number
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'green',
                    borderRadius: 20,
                    backgroundColor: '#fff',
                    flexDirection: 'row',
                    padding: 15,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 15,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#1C5C2E',
                      fontWeight: '400',
                      marginLeft: 10,
                      fontFamily: 'BrandonGrotesque-Regular',
                    }}>
                    4860567867261538
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: '90%',
                  alignSelf: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: 10,
                }}>
                <View
                  style={{
                    width: '45%',
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#1C5C2E',
                      fontWeight: '400',
                      margin: 5,
                      fontFamily: 'BrandonGrotesque-Regular',
                    }}>
                    Expiration Date
                  </Text>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: 'green',
                      borderRadius: 20,
                      backgroundColor: '#fff',
                      flexDirection: 'row',
                      padding: 15,
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                      elevation: 15,
                    }}>
                    <Text
                      style={{
                        fontSize: 10,
                        color: '#1C5C2E',
                        fontWeight: '400',
                        marginLeft: 10,
                        fontFamily: 'BrandonGrotesque-Regular',
                      }}>
                      5/2025
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: '45%',
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#1C5C2E',
                      fontWeight: '400',
                      margin: 5,
                      fontFamily: 'BrandonGrotesque-Regular',
                    }}>
                    Security Code
                  </Text>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: 'green',
                      borderRadius: 20,
                      backgroundColor: '#fff',
                      flexDirection: 'row',
                      padding: 15,
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                      elevation: 15,
                    }}>
                    <Text
                      style={{
                        fontSize: 10,
                        color: '#1C5C2E',
                        fontWeight: '400',
                        marginLeft: 10,
                        fontFamily: 'BrandonGrotesque-Regular',
                      }}>
                      147
                    </Text>
                  </View>
                </View>
              </View>

              <View style={{marginTop: 20}}>
                <Greenbtn
                  width={'60%'}
                  text1="Update"
                  onPress={() => {
                    pressbtn ? setState(!state) : setState1(!state1);
                  }}
                />
              </View>
              <View style={{marginTop: 30}}>
                <View style={{width: '90%', height: 28, alignSelf: 'center'}}>
                  <Image
                    source={Images.Logos.payment}
                    resizeMode="contain"
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
              </View>
            </View>
          </View>

          <View>
            <PopUp
              poup3={true}
              Visible={state1}
              setVisible={setState1}
              onpress1={() => {
                navigation.navigate('ManageSubscription');
              }}
            />
            <PopUp
              poup2={true}
              Visible={state}
              setVisible={setState}
              onpress1={() => {
                navigation.navigate('ManageSubscription');
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    width: '100%',
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
    color: '#1C5C2E',
    fontWeight: '400',
  },
  starbg: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginVertical: 15,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default PaymentMethod;
