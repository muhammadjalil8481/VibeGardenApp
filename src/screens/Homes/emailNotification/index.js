import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header, Switch1} from '../../../componrnts';
import {useBackButton} from '../../../hooks/BackHandler';

const EmailNotification = ({navigation}) => {
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
          headertext="Email Notifications"
          headertextColor="#191919B8"
          fontWeight="Bold"
          fontSize={20}
          leftIconSize={15}
          OnPress={() => navigation.goBack()}
        />
        <View style={styles.container}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({item}) => {
              return (
                <View>
                  <View style={styles.switchView}>
                    <View styles={{width: '95%'}}>
                      <Text style={styles.text1}>{item.text1}</Text>
                    </View>
                    <View styles={{width: '5%'}}>
                      <Switch1 marginTop={6} />
                    </View>
                  </View>
                  <View style={{width: '80%'}}>
                    <Text style={styles.text2}>{item.text2}</Text>
                  </View>
                </View>
              );
            }}
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
  },
  container: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  text1: {
    color: '#000',
    fontSize: 20,
    marginVertical: 4,
    fontFamily: 'BrandonGrotesque-Medium',
  },
  text2: {
    color: '#000',
    fontSize: 18,
    fontFamily: 'BrandonGrotesque-Regular',
    opacity: 0.5,
  },

  switchView: {
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
});
export default EmailNotification;
const data = [
  {
    text1: 'Tools Recommendations:',
    text2: 'Personalized tools suggestions based on your resonance ',
  },
  {
    text1: 'VibeGarden Updates:',
    text2:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy. ',
  },
  {
    text1: 'Surveys:',
    text2:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy. ',
  },
];
