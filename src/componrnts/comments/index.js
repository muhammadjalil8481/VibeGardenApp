import {
  View,
  Text,
  StyleSheet,
  Appearance,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// import {Icon} from react-native-v

import React, {useState, useEffect} from 'react';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const Comments = ({image, name, time, Radius, height, typesomething}) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
        },
      },

      {
        _id: 2,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        createdAt: new Date(),
        user: {
          _id: 2,
        },
      },
    ]);
  }, []);

  const onSend = () => {
    setMessages([
      ...messages,
      {
        _id: 1,
        text: message,
        createdAt: new Date(),
        user: {
          _id: 2,
        },
      },
    ]);

    setMessage('');

    // scrollViewRef.scrollToEnd({animated: true});
  };

  let [scrollViewRef, setRef] = useState({});
  let colorScheme = Appearance.getColorScheme();
  console.log(colorScheme);
  return (
    <View style={styles.imageContainer}>
      <View style={{width: '90%'}}>
        {messages.map((message, i) => {
          return (
            <>
              <View
                style={{
                  //   alignItems: 'center',
                  marginTop: 10,
                  width: '90%',
                  alignSelf: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row', width: '80%'}}>
                    <View style={{marginTop: 5}}>
                      <Avatar.Image size={40} source={image} />
                    </View>
                    <View>
                      <Text
                        style={{
                          marginLeft: 10,
                          color: 'black',
                          fontSize: 15,
                          fontWeight: 'bold',
                        }}>
                        {name}
                      </Text>
                      <View style={{width: '100%'}}>
                        <Text style={{color: '#000', marginLeft: 10}}>
                          {' '}
                          {message?.text}{' '}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <Text>{time}</Text>
                </View>
              </View>
            </>
          );
        })}
      </View>
      <View
        style={{
          marginVertical: 10,
          width: '100%',
          height: height || 48,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          elevation: 1,
          borderRadius: Radius || 50,
          paddingLeft: 5,
          borderColor: '#eee',
          alignSelf: 'center',
        }}>
        <View
          style={{
            width: '80%',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
            height: 60,
            marginLeft: 15,
          }}>
          <TextInput
            placeholderTextColor={(colorScheme = 'dark' ? 'grey' : 'grey')}
            multiline={true}
            placeholder={typesomething}
            value={message}
            onChangeText={text => {
              setMessage(text.trimStart());
            }}
            style={{
              marginVertical: 5,
              width: '75%',
              color: '#000',
            }}
          />
        </View>

        <View
          style={{
            // width: '8%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingRight: 15,
          }}>
          <TouchableOpacity
            style={{backgroundColor: '#1492E6', color: '#fff'}}
            disabled={message.length <= 0}
            activeOpacity={0.7}
            onPress={onSend}>
            <Text style> Post</Text>
            <Icon
              name="arrow-right"
              size={20}
              color={message.length <= 0 ? 'grey' : 'green'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    // justifyContent: 'center',
  },
  screenContainer: {
    flex: 1,
  },

  topComponent: {
    width: '100%',
    backgroundColor: '#e7e',
    height: 90,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    zIndex: 99,
  },
});

export default Comments;
