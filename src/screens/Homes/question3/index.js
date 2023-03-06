import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Header, Pinkbtn, QComponents} from '../../../componrnts';
import Images from '../../../constants';
import {useBackButton} from '../../../hooks/BackHandler';

const Question3 = ({navigation}) => {
  const onBackPress = () => {
    navigation.goBack();
    return true;
  };
  useBackButton(navigation, onBackPress);
  return (
    <SafeAreaView style={styles.main}>
      <ImageBackground
        source={Images.BackGround.backgroundHue}
        resizeMode="stretch"
        style={styles.image}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <Header
            headertextColor="#1C5C2E"
            iconName="arrowleft"
            headertext="Resonance Finder"
            OnPress={() => navigation.goBack()}
          />

          <View style={{width: '100%', alignSelf: 'center'}}>
            <QComponents
              opress1={() =>
                navigation.navigate('me', {
                  screen: 'Bigblooms',
                  params: {
                    Image1: Images.Logos.redleaf1,
                    newtext: 'TONGLEN',
                  },
                })
              }
              opress2={() =>
                navigation.navigate('me', {
                  screen: 'Bigblooms',
                  params: {
                    Image1: Images.Logos.redleaf2,
                    newtext: 'TONGLEN',
                  },
                })
              }
              opress3={() =>
                navigation.navigate('me', {
                  screen: 'Bigblooms',
                  params: {
                    Image1: Images.Logos.redleaf3,
                    newtext: 'TONGLEN',
                  },
                })
              }
              opress4={() =>
                navigation.navigate('me', {
                  screen: 'Bigblooms',
                  params: {
                    Image1: Images.Logos.redleaf4,
                    newtext: 'TONGLEN',
                  },
                })
              }
              flowwerlist11={true}
              width={'90%'}
              // width1={'100%'}
              iconone
              name2="chevron-up"
              name3="chevron-down"
              direction2="Directions:"
              flowwerlist={true}
              colapse={true}
              Statement1="Statement:"
              // flow="Flow Through"
              image1={true}
              text="No idea What a Multiverse is"
              headingtext
              number={'3/20'}
              text1={'Dont Teast Data'}
              text2="Whose Data?"
              text3={'Sometimes'}
              textfontsize={31}
              text4="Always"
              text6={'Data Help me Accept new concepts.'}
              text5={
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di At vero eos et accusam et justo duo.'
              }
              fontfamily="BrandonGrotesque-Regular"
            />
          </View>
          <View style={{marginTop: 20, alignItems: 'center'}}>
            <Pinkbtn
              shadow="rgba(0,0,0,0.5)"
              width={'70%'}
              btntxt="Next"
              onPress={() => navigation.navigate('question4')}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#ffff',
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
  image: {
    flex: 1,
    justifyContent: 'center',
    // paddingTop: 100,
  },
});
export default Question3;
