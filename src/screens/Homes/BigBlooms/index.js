import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Header, Pinkbtn} from '../../../componrnts';
import Icon from 'react-native-vector-icons/Feather';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useBackButton} from '../../../hooks/BackHandler';
import {BigBloomsSvg} from '../../../assests/svgs/QuestionsSvg';
import {ImageBackground} from 'react-native';
import {Image} from 'react-native';

const BigBlooms = ({route, navigation}) => {
  const [products, setProducts] = useState(data);
  const {heading1, newtext, Image1} = route.params;
  const handleChange = id => {
    let temp = products.map(product => {
      if (id === product.id) {
        return {...product, isChecked: !product.isChecked};
      }
      return product;
    });
    setProducts(temp);
  };
  // const onBackPress = () => {
  //   navigation.goBack();
  //   return true;
  // };
  const onBackPress = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'GroundWork'}, {name: 'Homes'}, {name: 'tools'}],
    });
    return true;
  };
  useBackButton(navigation, onBackPress);

  const renderFlatList = renderData => {
    return (
      <FlatList
        data={renderData}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => handleChange(item.id)}
            style={{
              marginVertical: 8,
              flexDirection: 'row',
            }}>
            <Icon
              name={item.isChecked ? 'check-square' : 'square'}
              size={25}
              color="#1C5C2E"
            />
            <Text
              style={{
                fontSize: 13,
                marginTop: 3,
                marginLeft: 8,
                // textAlign: 'center',
                color: '#000',
                // fontWeight: 'bold',
                fontFamily: 'BrandonGrotesque-Regular',
              }}>
              {item.text1}
            </Text>
          </TouchableOpacity>
        )}
      />
    );
  };
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <Header
          iconName="arrowleft"
          // OnPress={() => navigation.goBack()}

          OnPress={
            () => navigation.goBack()
            // navigation.navigate('Video', {
            //   otherParam: true,
            //   // cameFrom :
            //   plus: true,
            //   redbtn: true,
            //   // headerPlusicon: 'plus',
            //   otherParam1: 'TONGLEN',
            //   icon1: false,
            //   backoption: () => navigation.goBack(),
            // })
          }
          headertext={newtext}
          fontSize={20}
          headertextColor="#000"
        />
        <View style={styles.itms}>
          <Text
            style={{
              fontSize: 28,
              textAlign: 'center',
              color: '#000',
              // fontWeight: 'bold',
              // marginVertical: 10,
              fontFamily: 'BrandonGrotesque-Medium',
            }}>
            {heading1}
            Big Blooms
          </Text>
          <View
            style={{
              width: 75,
              height: 75,
              // marginTop: 15,
              alignSelf: 'center',
              marginTop: 20,
            }}>
            <Image source={Image1} />
          </View>
        </View>
        <View
          style={{
            alignSelf: 'center',
            width: '100%',
            // backgroundColor: 'pink',
          }}>
          <View style={{width: '90%', alignSelf: 'center'}}>
            <Text
              style={{
                fontSize: 18,
                // textAlign: 'center',
                color: '#000',
                // fontWeight: 'bold',
                fontFamily: 'BrandonGrotesque-Medium',
                lineHeight: 28,
              }}>
              Fantastic! Its So Power Full To Discover Tools That Help Us Feel
              Our Light!
            </Text>
            <Text
              style={{
                fontSize: 16,
                // textAlign: 'center',
                color: '#1C5C2E',
                fontWeight: '500',
                marginVertical: 15,
                fontFamily: 'BrandonGrotesque-Medium',
              }}>
              ADDED TONGLEN FAVORITES
            </Text>
            <Text
              style={{
                fontSize: 18,

                color: '#000',
                marginVertical: 5,
                textDecorationLine: 'underline',
                fontFamily: 'BrandonGrotesque-Regular',
              }}>
              Tell Us More
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: '#000',
                fontFamily: 'BrandonGrotesque-Regular',
              }}>
              Did This Tools
            </Text>
            {renderFlatList(products)}
            {/* <FlatList
              data={data}
              keyExtractor={item => item}
              renderItem={({item}) => {
                return (
                  
                );
              }}
            /> */}
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            width: '100%',
            alignSelf: 'center',
            // backgroundColor: 'pink',
            alignItems: 'center',
          }}>
          <Pinkbtn
            shadow={'#00000029'}
            width={'70%'}
            btntxt="Submit"
            onPress={() => navigation.navigate('star')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
  },
  itms: {
    marginTop: 10,
    width: '90%',
    alignItems: 'center',
    // justifyContent: 'center',
    alignSelf: 'center',
  },
  text1: {
    marginVertical: 10,
    color: '#1C5C2E',

    fontSize: 16,
  },
  text2: {
    marginVertical: 10,
    color: '#000',
    fontSize: 16,
    marginLeft: 10,
  },
  text3: {
    color: '#000',
    fontSize: 28,
  },
  text4: {
    marginVertical: 15,
    letterSpacing: 0.6,
    color: '#000',
    fontSize: 14,
  },
});
export default BigBlooms;
const data = [
  {id: 1, isChecked: false, text1: 'Support healing'},
  {
    id: 2,
    isChecked: false,
    text1: 'Allow the release  of negative thoughts  Patterns',
  },
  {
    id: 3,
    isChecked: false,
    text1: 'Help you connect to approve expenses prespecting',
  },
  {id: 4, isChecked: false, text1: 'Remind you  of Your inner knowing'},
  {id: 5, isChecked: false, text1: 'Increase connection to self love'},
  {
    id: 6,
    isChecked: false,
    text1: 'Help you to integrate grounded part/energies',
  },
];
