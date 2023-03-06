import React from 'react';
import {View, Text, StyleSheet, ScrollView, StatusBar} from 'react-native';
import {Header} from '../../../componrnts';

const ToolsTry = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <StatusBar animated={true} backgroundColor="#000" />
      <View style={styles.main}>
        <View style={{width: '90%', alignSelf: 'center', marginTop: 15}}>
          <Header header2 headertext="Terms Of Uses" />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});

export default ToolsTry;
