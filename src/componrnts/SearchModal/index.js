import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {Overlay} from 'react-native-elements';
import Searcbar from '../searchbar';
import Images from '../../constants';
import SearchComponent from '../SearchComponent';
import {useBackButton} from '../../hooks/BackHandler';
const SearchModal = ({visible, setVisible, navigation}) => {
  const [isTyping, setIsTyping] = useState(false);
  const [textInputText, setTextInputText] = useState('');
  //BackHandler
  const onBackPress = () => {
    setVisible(false);
    return true;
  };
  useBackButton(navigation, onBackPress);
  return (
    <Overlay
      overlayStyle={{
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        padding: 0,
      }}
      animationType="slide"
      fullScreen
      visible={visible}
      onRequestClose={() => {
        setVisible(visible);
      }}>
      <View style={{marginVertical: Platform.OS === 'ios' ? 15 : 5}} />
      {isTyping ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <Searcbar
            setIsTyping={setIsTyping}
            isTyping={isTyping}
            text={textInputText}
            setText={setTextInputText}
            onPressLeft={() => {
              setVisible(false);
              setIsTyping(false);
              setTextInputText('');
            }}
            onPressRight={() => {
              if (textInputText.length > 1) {
                setTextInputText('');
                setIsTyping(false);
              } else {
                setVisible(false);
              }
            }}
          />
          <SearchComponent navigation={navigation} />
        </ScrollView>
      ) : (
        <>
          <Searcbar
            setIsTyping={setIsTyping}
            isTyping={isTyping}
            text={textInputText}
            setText={setTextInputText}
            onPressLeft={() => {
              setVisible(false);
              setIsTyping(false);
              setTextInputText('');
            }}
            onPressRight={() => {
              if (textInputText.length > 1) {
                setTextInputText('');
                setIsTyping(false);
              } else {
                setVisible(false);
              }
            }}
          />

          <View style={styles.container}>
            <View style={{width: 80, height: 80, marginTop: -50}}>
              <Image
                source={Images.Logos.logo1}
                resizeMode="contain"
                style={{width: '100%', height: '100%'}}
              />
            </View>
            <Text
              style={{
                color: '#323232',
                fontSize: 18,
                lineHeight: 35,
                marginTop: 20,
                textAlign: 'center',
                fontFamily: 'BrandonGrotesque-Regular',
              }}>
              Search Tools , And{'\n'}Groundwork Videos
            </Text>
          </View>
        </>
      )}
    </Overlay>
  );
};

export default SearchModal;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
