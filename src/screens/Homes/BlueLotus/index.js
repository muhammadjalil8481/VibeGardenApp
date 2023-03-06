import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header, StoryData} from '../../../componrnts';
import Images from '../../../constants';

const BlueLotus = ({route, navigation}) => {
  const {Image1, newtext, Heading} = route.params;
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <Header
          header2
          iconName="arrowleft"
          headertextColor="#1C5C2E"
          // fontSize={25}
          headertext={Heading}
          OnPress={() => navigation.goBack()}
        />
        <View style={{width: '100%', height: '100%', marginTop: 15}}>
          <StoryData
            storytext1
            storytext="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.b"
            storyimage
            Img={Image1}
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
});
export default BlueLotus;
