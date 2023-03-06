import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {GreenIcon1} from '../../assests/svgs/GroundworkSvg';

const MainBox = ({
  img2,
  id,
  rowNumber,
  bgcolor,
  date1,
  Ionpress,
  Iicon,
  textone,
  heartPlusIcons,
  IconBGColor,
  colorIcon,
  Wheart,
  minutes,
  marginTop11,
  marginTop,
  width,
  icon2,
  marginTop2,
}) => {
  const [isCheck, setIsCheck] = useState(false);
  return (
    <>
      <View
        style={{
          width: 330,
          height: 234,
          margin: 3,
          borderRadius: 10,
        }}>
        <ImageBackground
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 12,
          }}
          source={img2}>
          {Wheart && (
            <TouchableOpacity
              onPress={() => setIsCheck(!isCheck)}
              style={{
                alignSelf: 'center',
                height: 28,
                width: 28,
                alignSelf: 'flex-end',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
                backgroundColor: '#fff',
                marginRight: 10,
                marginTop: 10,
              }}>
              <Icon
                name={isCheck === true ? 'hearto' : 'heart'}
                color={'#EF3A71'}
                size={20}
                style={{fontWeight: 'bold'}}
              />
            </TouchableOpacity>
          )}
          {heartPlusIcons && (
            <TouchableOpacity
              onPress={() => Ionpress(id, rowNumber)}
              style={{
                alignSelf: 'center',
                height: 28,
                width: 28,
                alignSelf: 'flex-end',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
                marginTop: 10,
                marginRight: 10,
                backgroundColor: IconBGColor,
              }}>
              <Icon
                name={Iicon}
                color={colorIcon}
                size={20}
                style={{fontWeight: 'bold'}}
              />
            </TouchableOpacity>
          )}
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <View
              style={{
                marginTop: marginTop11,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              {icon2 && (
                <View
                  style={{
                    // backgroundColor: 'pink',
                    height: 33,
                    marginTop: 35,
                    width: 33,
                  }}>
                  {/* <Image
                    source={require('../../assests/images/greenicon1.png')}
                  /> */}
                  <GreenIcon1 />
                </View>
              )}
              <Text
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#000',
                  textAlign: 'center',
                  fontSize: 26,
                  marginTop: marginTop,
                  fontFamily: 'BrandonGrotesque-Medium',
                }}>
                {textone}
              </Text>
            </View>
            <View
              style={{
                width: 77,
                height: 35,
                borderRadius: 12,
                backgroundColor: bgcolor,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 6,
              }}>
              <Text
                style={{
                  color: '#fff',
                  textAlign: 'center',
                  fontFamily: 'BrandonGrotesque-Regular',
                  padding: 5,
                  margin: 2,
                }}>
                {minutes}
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: marginTop2,
              alignSelf: 'flex-start',
              marginLeft: 8,
              width: '100%',
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 12,
                fontFamily: 'BrandonGrotesque-Regular',
              }}>
              {date1}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default MainBox;
