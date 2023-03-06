import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Ionicons';
import Images from '../../constants';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
const Header2 = props => {
  const {
    color,
    marginTop,
    heartplus,
    toggle,
    plus,
    heart,
    iconName,
    press1,
    press2,
    search,
    fontSize,
    logo1,
    gbg,
    flower,
    img23,
    heading,
    img1,
    search1,
    hearttop,
    greenicon1,
    marginLeft,
    heartleft1,
    header4,
    size,
    width,
    colorplus,
    headertext2,
    marginTopplus,
    marginRight,
    show,
  } = props;
  const [state, setState] = useState(false);
  return (
    <View style={{width: '100%', paddingTop: 10}}>
      {props.header2 && (
        <View style={styles.header}>
          <TouchableOpacity
            disabled={(show === true && true) || false}
            onPress={props.OnPress}
            style={{
              width: 40,
              height: 40,
              marginTop: 5,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 12,
              //   backgroundColor: 'red',
              backgroundColor: (show === true && 'transparent') || '#1C5C2E',
            }}>
            <Icon2
              name={iconName}
              size={20}
              color={(show === true && 'transparent') || '#fff'}
            />
          </TouchableOpacity>
          <View
            style={{
              width: '95%',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            {flower && (
              <View
                style={{
                  marginRight: 8,
                  marginTop: 10,
                  // backgroundColor: 'yellow',
                  width: 34,
                  height: 34,
                  marginTop: -40,
                  // marginLeft: 340,
                }}>
                <Image
                  source={img23}
                  resizeMode="contain"
                  style={{width: '100%', height: '100%'}}
                />
              </View>
            )}
            <Text
              style={{
                fontSize: fontSize,
                marginTop: marginTop,
                color: color,
                fontFamily: 'BrandonGrotesque-Medium',
                // backgroundColor: 'yellow',
                // textAlign: 'center',
                marginRight: marginRight,
              }}>
              {props.headertext}
            </Text>
          </View>
        </View>
      )}

      {img1 && (
        <View
          style={{
            width: 41,
            height: 41,
            alignSelf: 'center',
            marginTop: marginTop,
          }}>
          <Image
            source={Images.Logos.logo1}
            resizeMode="contain"
            style={{width: 41, height: 40}}
          />
        </View>
      )}
    </View>
  );
};

export default Header2;

const styles = StyleSheet.create({
  greenbox: {
    backgroundColor: '#CFDCD2',
    marginVertical: 2,
    height: 43,
    width: 43,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenbox1: {
    backgroundColor: '#1C5C2E',
    marginVertical: 2,
    height: 43,
    width: 43,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
