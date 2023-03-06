import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Header, StoryData} from '../../../componrnts';
import Images from '../../../constants';

const Wolfwoman = () => {
  return (
    <View style={styles.main}>
      <View
        style={{
          marginVertical: 10,
          marginTop: 20,
          width: '90%',
          alignSelf: 'center',
        }}>
        <Header header2 headertext="Meet Wolfwoman" />
      </View>
      <View style={{marginTop: 10}}>
        <StoryData
          storytext1
          storytext="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
          storyimage
          Img={Images.BackGround.wolfwoman1}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor: 'pink',
  },
});
export default Wolfwoman;
