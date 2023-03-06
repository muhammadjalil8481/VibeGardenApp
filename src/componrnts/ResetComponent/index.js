import React, {isValidElement, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Tooltip from 'react-native-walkthrough-tooltip';
import Images from '../../constants';
import {SeeAll} from '../SeeAll';

const Reset = ({
  Iname,
  iconname,
  icontrue,
  imgtrue,
  showdata,
  plustimggreen,
  threedost,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [toolTipVisible, setToolTipVisible] = useState(false);
  return (
    <>
      <View style={styles.main}>
        <View
          style={{
            marginTop: 5,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              // marginVertical: 20,
              // marginTop: 20,
              width: '80%',
              flexDirection: 'row',
              // justifyContent: 'space-between',
            }}>
            <View style={{width: 112, height: 80, marginTop: 10}}>
              <Image source={Images.Imgs.pic1} />
            </View>
            <View style={{margin: 15, marginVertical: 10}}>
              <View style={{marginVertical: 3}}>
                <Text
                  style={{
                    color: '#1C5C2E',
                    fontSize: 16,
                    fontWeight: '500',
                    fontFamily: 'BrandonGrotesque-Medium',
                  }}>
                  Calm and Rest
                </Text>
              </View>

              <View style={{marginVertical: 3}}>
                <Text
                  style={{
                    color: '#000',
                    fontFamily: 'BrandonGrotesque-Medium',
                  }}>
                  The session is about becomi...
                </Text>
              </View>

              <View style={{marginVertical: 3}}>
                <Text style={{color: '#030303', fontSize: 12}}>
                  3 min * Date: 10-17-2022
                </Text>
              </View>
            </View>
          </View>
          <View style={{width: '10%', marginTop: 4}}>
            <View style={styles.container}>
              {showdata && (
                <View style={styles.centeredView}>
                  {modalVisible && (
                    <View style={{marginLeft: -20}}>
                      <TouchableOpacity
                        onPress={() => setModalVisible(!modalVisible)}
                        style={{
                          backgroundColor: '#fff',
                          position: 'absolute',
                          paddingLeft: -30,
                          padding: 2,
                          marginTop: 20,
                          // padding: 20,
                          // height: 36,
                          // // marginTop: 5,
                          borderRadius: 8,
                          // // marginRight: 180,
                          // // justifyContent: 'center',
                          // // alignItems: 'center',
                          flexDirection: 'row',
                          padding: 1,
                        }}>
                        <Icon2
                          name="delete"
                          size={10}
                          color="#030303"
                          style={{paddingTop: 2, marginLeft: 3, margin: 2}}
                        />
                        <Text
                          style={{
                            fontSize: 10,
                            fontFamily: 'BrandonGrotesque-Regular',
                            margin: 4,
                            // marginTop: 1,
                            marginLeft: -2,
                            marginRight: 2,
                            margin: 3,
                            color: '#030303',
                          }}>
                          Remove
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                  {/* <Modal
                  // animationType="slide"
                  style={{backgroundColor: 'red'}}
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    // Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                  }}> */}
                  {/* <View
                    style={{
                      width: '18%',
                      // margin: 5,
                      // alignSelf: 'flex-end',
                      // marginTop: 150,
                    }}> */}

                  {/* </View> */}
                  {/* </Modal> */}
                </View>
              )}
              {threedost && (
                <TouchableOpacity
                  style={[{marginTop: 2}, styles.button]}
                  onPress={() => setModalVisible(true)}>
                  <Icon
                    name="dots-three-horizontal"
                    size={22}
                    color="#030303"
                  />
                </TouchableOpacity>
              )}
            </View>
            <TouchableOpacity style={{marginTop: 35}}>
              {icontrue && (
                <View style={{marginLeft: 4, marginTop: -20}}>
                  <Icon2 name="heart" size={16} color="red" />
                </View>
              )}
              {imgtrue && (
                <View
                  style={{
                    marginLeft: 4,
                    backgroundColor: '#1C5C2E',
                    borderRadius: 100,
                    width: 14,
                    height: 14,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: -17,
                  }}>
                  <View style={{}}>
                    <Icon2 name="plus" size={12} color="#fff" />
                  </View>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor: 'pink',
  },
});
export default Reset;
