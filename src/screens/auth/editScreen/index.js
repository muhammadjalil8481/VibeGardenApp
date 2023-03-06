import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header, Pinkbtn} from '../../../componrnts';
import {useBackButton} from '../../../hooks/BackHandler';

const EditScreen = ({navigation, route}) => {
  const {itemId, otherParam, otherParam1, otherParam2, two} = route.params;

  //BackHandler
  const onBackPress = () => {
    navigation.goBack();
    return true;
  };
  useBackButton(navigation, onBackPress);
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <Header
          iconName="left"
          headertext={itemId}
          headertextColor="#191919B8"
          fontWeight="Bold"
          fontSize={20}
          leftIconSize={15}
          OnPress={() => navigation.goBack()}
        />
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
          }}>
          <View style={{marginTop: 100}}>
            <View style={styles.center}>
              <TextInput style={[styles.Text]} placeholder={otherParam1} />
              {/* <Text style={[styles.Text]}>{otherParam1} </Text> */}
            </View>
            {two && (
              <View style={styles.center}>
                <TextInput style={[styles.Text]} placeholder={otherParam1} />
              </View>
            )}
          </View>
          <View style={{marginVertical: 15, alignSelf: 'center', width: '90%'}}>
            <View
              style={{
                width: '100%',
                alignSelf: 'center',
                // backgroundColor: 'pink',
                alignItems: 'center',
              }}>
              <Pinkbtn
                shadow={'#00000019'}
                onPress={() => navigation.goBack()}
                width={'75%'}
                btntxt={otherParam}
              />
            </View>
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
  center: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 10,
    marginVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#75997E',
  },
  Text: {
    color: '#75997E',
    fontSize: 14,
    marginVertical: 5,
    fontFamily: 'BrandonGrotesque-Regular',
  },
  btns: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
});
export default EditScreen;
