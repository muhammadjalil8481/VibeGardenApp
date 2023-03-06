import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  StatusBar,
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
  const [state, setState] = useState();
  return (
    <>
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
                iconone
                name2="chevron-up"
                name3="chevron-down"
                direction2="Directions:"
                width={'90%'}
                // width1={'100%'}
                colapse={true}
                flowwerlist11={true}
                Statement1="Statement:"
                // flow="Flow Through"
                name="chevron-down"
                image1={true}
                text="No idea What a Multiverse is"
                headingtext
                number={'4/20'}
                text1={'Angels are some people made upto better'}
                text2="I wish"
                text3={`'It Feels That's way Sometime'`}
                text4="I Wrap Myself in that way Nightly"
                text6={'We Each Have Angles?'}
                textfontsize={31}
                fontfamily="BrandonGrotesque-Regular"
                text5={
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di At vero eos et accusam et justo duo.'
                }
              />
            </View>
            <View style={{marginTop: 20, alignItems: 'center'}}>
              <Pinkbtn
                shadow="rgba(0,0,0,0.5)"
                width={'70%'}
                btntxt="See Results"
                setVisible={setState}
                onPress={() =>
                  navigation.navigate('Result', {
                    otherParam: 'Top Tools',
                    plus: true,
                    backoption: () => navigation.navigate('me'),
                  })
                }
              />
            </View>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    </>
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
