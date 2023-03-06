import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {EnvelopeSvg} from '../../../assests/svgs/LoginSvgs';
import {Greenbtn, Header} from '../../../componrnts';
const NotRegisterd = props => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <Header
          iconName="closesquareo"
          OnPress={() => props.navigation.goBack('')}
        />
        <View style={styles.main}>
          <View style={{width: '90%', marginTop: 10}}>
            <View style={{width: '100%', alignItems: 'center'}}>
              <EnvelopeSvg />
            </View>
            <View style={{width: '100%', marginTop: -25}}>
              <Text style={styles.txt1}>
                That Email Is Not Registered , Please Try Creating An Account
              </Text>
            </View>
            <View style={{marginTop: 40, paddingBottom: 10}}>
              <Greenbtn
                width={'95%'}
                text1={'Create an Account'}
                onPress={() =>
                  props.navigation.navigate('signup', {
                    registerd1: () => props.navigation.navigate('registerd'),
                    registerd12: () => props.navigation.navigate('registerd'),
                    itemId: 86,
                    otherParam: 'anything you want here',
                  })
                }
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default NotRegisterd;

const styles = StyleSheet.create({
  main: {flex: 1, alignItems: 'center'},
  input: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: '#000',
    marginVertical: 20,
    marginTop: 20,
  },
  txt1: {
    color: '#000',
    textAlign: 'left',
    fontSize: 17,
    fontFamily: 'BrandonGrotesque-Medium',
  },
});
