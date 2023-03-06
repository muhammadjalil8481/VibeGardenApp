import {StyleSheet, View, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const Searcbar = ({setIsTyping, text, setText, onPressLeft, onPressRight}) => {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={onPressLeft} style={styles.iconBtn}>
            <Icon name="arrowleft" size={25} color="#1C5C2E" />
          </TouchableOpacity>
          <TextInput
            onSubmitEditing={() => setIsTyping(true)}
            autoFocus={true}
            placeholder="Heart"
            placeholderTextColor={'rgba(50, 50, 50, 0.5)'}
            value={text}
            onChangeText={setText}
            returnKeyType={'search'}
            style={{
              flex: 1,
              color: 'black',
            }}
          />
        </View>
        <TouchableOpacity onPress={onPressRight} style={styles.iconBtn}>
          <Icon
            name={text.length > 1 ? 'close' : 'search1'}
            size={22}
            color="#1C5C2E"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Searcbar;

const styles = StyleSheet.create({
  container: {width: '100%', paddingHorizontal: 20},
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#BCCFC1',
    marginTop: 20,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconBtn: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
