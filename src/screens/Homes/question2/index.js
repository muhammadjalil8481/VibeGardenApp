import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Header, Pinkbtn, QComponents} from '../../../componrnts';
import Images from '../../../constants';
import {useBackButton} from '../../../hooks/BackHandler';

const Question2 = ({navigation}) => {
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
            fontSize={25}
            iconName="closesquareo"
            headertextColor="#1C5C2E"
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
              marginVertical={10}
              flowwerlist11={true}
              iconone
              textforvideo="Resonance Finder Video Here"
              name2="chevron-down"
              name3="chevron-up"
              video={true}
              colapse={false}
              width={'90%'}
              width1={'100%'}
              direction2="Directions:"
              Statement1="Statement:"
              // flow="Flow Through"
              margintopS={31}
              textfontsize={31}
              number={'1/20'}
              text1={'That Bananas'}
              text2="?"
              fontSizetext2={34}
              text3={'May be but how do we know'}
              text4="OH,100%"
              text5={
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di At vero eos et accusam et justo duo.'
              }
              text6={'Plants are sentilents'}
              fontfamily="BrandonGrotesque-Regular"
            />
          </View>

          <View style={{marginTop: 20, width: '100%', alignItems: 'center'}}>
            <Pinkbtn
              shadow="rgba(0,0,0,0.5)"
              onPress={() => {
                navigation.navigate('question');
              }}
              width={'70%'}
              btntxt="Next"
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
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
  image: {
    flex: 1,
    justifyContent: 'center',
    // paddingTop: 100,
  },
});
export default Question2;
