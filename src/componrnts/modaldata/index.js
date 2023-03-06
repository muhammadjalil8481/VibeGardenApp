import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
  Platform,
} from 'react-native';
import {Overlay} from 'react-native-elements';

import Icon from 'react-native-vector-icons/AntDesign';

const Modaldata = ({
  Visible,
  setVisible,
  setTopicName,
  setActiveTab,
  modalType,
  headtext,
  setTypeName,
  activeTab,
  data,
}) => {
  return (
    <>
      <Overlay
        fullScreen
        overlayStyle={{
          height: '100%',
          width: '100%',
          paddingTop: Platform.OS === 'ios' ? 30 : 10,
        }}
        style={{}}
        // animationType="slide"
        // transparent={false}
        visible={Visible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          setVisible(Visible);
        }}>
        <View style={{flex: 1}}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{width: 40, height: 40}} />
            <Text style={styles.text}>{headtext}</Text>
            <TouchableOpacity
              style={{width: 40, height: 40, marginTop: 15}}
              onPress={() => setVisible(false)}>
              <Icon name="close" size={25} color="#1C5C2E" />
            </TouchableOpacity>
          </View>
          <FlatList
            data={
              activeTab === 1
                ? data.filter(x => x.type === 'tools')
                : activeTab === 2
                ? data.filter(x => x.type === 'groundwork')
                : data
            }
            keyExtractor={item => item.title}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  disabled={item.type ? false : true}
                  onPress={() => {
                    if (item.type === 'tools') {
                      setVisible(false);
                      setActiveTab(1);
                      if (modalType === 1) {
                        setTopicName(item.title);
                      } else {
                        setTypeName(item.title);
                      }
                    } else if (item.type === 'groundwork') {
                      setVisible(false);
                      setActiveTab(2);
                      if (modalType === 1) {
                        setTopicName(item.title);
                      } else {
                        setTypeName(item.title);
                      }
                    }
                  }}>
                  <Text style={styles.text1}>{item.title}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </Overlay>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#1C5C2E',
    fontSize: 25,
    // marginTop: -20,
    textAlign: 'center',
    fontFamily: 'BrandonGrotesque-Bold',
  },
  text1: {
    color: '#030303',
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 15,
    fontFamily: 'BrandonGrotesque-Regular',
  },
});

export default Modaldata;
