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
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '../../../componrnts';
import Images from '../../../constants';
import {useBackButton} from '../../../hooks/BackHandler';
const Notification = props => {
  //BackHandler
  const onBackPress = () => {
    props.navigation.goBack();
    return true;
  };
  useBackButton(props.navigation, onBackPress);
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <Header
          fontSize={20}
          fontWeight="Bold"
          headertextColor="#191919B8"
          iconName="closesquareo"
          headertext="Notification"
          OnPress={() => props.navigation.goBack()}
        />
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
          }}>
          <View
            style={{
              width: '100%',
              marginVertical: 10,
              justifyContent: 'flex-end',
            }}>
            <Text
              style={{
                color: '#F54F84',
                textAlign: 'right',
                fontWeight: 'bold',
                fontFamily: 'BrandonGrotesque-Regular',
              }}>
              Clear All
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              marginVertical: 10,
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                backgroundColor: 'grey',
                height: 1,
                flex: 1,
              }}
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#211E1F',
                fontFamily: 'BrandonGrotesque-Medium',
                marginHorizontal: 5,
              }}>
              Recent Notification
            </Text>

            <View
              style={{
                backgroundColor: 'grey',
                flex: 1,
                height: 1,
              }}
            />
          </View>
        </View>
        <FlatList
          data={data}
          scrollEnabled={false}
          ListFooterComponent={<View style={{marginVertical: 15}} />}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  width: '90%',
                  alignSelf: 'center',
                  // margin: 3,
                  paddingHorizontal: 5,
                  paddingVertical: 10,
                  // backgroundColor: 'red',
                }}>
                <View style={styles.box}>
                  <View style={{width: '75%', flexDirection: 'row'}}>
                    <View style={styles.img}>
                      <Image
                        source={item.Img1}
                        style={{
                          width: 60,
                          height: 60,
                          borderRadius: 100,
                          marginLeft: 10,
                        }}
                      />
                    </View>
                    <View style={styles.txtview}>
                      <Text
                        style={[
                          styles.text1,
                          {
                            marginLeft: 10,
                            fontFamily: 'BrandonGrotesque-Regular',
                          },
                        ]}>
                        {item.name}
                      </Text>
                      <Text
                        style={[
                          styles.text1,
                          {
                            fontWeight: '400',
                            fontSize: 14,
                            marginVertical: 5,
                            marginLeft: 6,
                            fontFamily: 'BrandonGrotesque-Regular',
                          },
                        ]}>
                        {item.text}
                      </Text>
                    </View>
                  </View>
                  <View style={{marginTop: 10, marginRight: 24}}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: '#000',
                        fontWeight: 'bold',
                        fontFamily: 'BrandonGrotesque-Regular',
                      }}>
                      {item.time}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: '#000',
                        marginTop: 35,
                        fontWeight: 'bold',
                        fontFamily: 'BrandonGrotesque-Regular',
                      }}>
                      {item.Date}
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  box: {
    // marginVertical: 10,
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: 30,
    height: 86,
    flexDirection: 'row',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },

  img: {
    marginTop: 10,
    marginLeft: 5,
    // marginRight: 10,
  },

  txtview: {
    marginTop: 20,
    marginRight: 5,
  },
  text1: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'BrandonGrotesque-Regular',
  },
});
export default Notification;

const data = [
  {
    Img1: Images.BackGround.Bg1,
    name: 'Alexa Martin',
    text: ' Lorem ipsum dolor sit amet.',
    time: '0.2.00 AM',
    Date: '11/12/21',
  },
  {
    Img1: Images.BackGround.Bg1,
    name: 'Fiona Collin',
    text: ' Lorem ipsum dolor sit amet.',
    time: '0.2.00 AM',
    Date: '11/12/21',
  },
  {
    Img1: Images.BackGround.Bg1,
    name: 'Niki Martin',
    text: ' Lorem ipsum dolor sit amet.',
    time: '0.2.00 AM',
    Date: '11/12/21',
  },
  {
    Img1: Images.BackGround.Bg1,
    name: 'Martha jose',
    text: ' Lorem ipsum dolor sit amet.',
    time: '0.2.00 AM',
    Date: '11/12/21',
  },
  {
    Img1: Images.BackGround.Bg1,
    name: 'Ziouhan Change',
    text: ' Lorem ipsum dolor sit amet.',
    time: '0.2.00 AM',
    Date: '11/12/21',
  },
  {
    Img1: Images.BackGround.Bg1,
    name: 'Ziouhan Change',
    text: ' Lorem ipsum dolor sit amet.',
    time: '0.2.00 AM',
    Date: '11/12/21',
  },
];
