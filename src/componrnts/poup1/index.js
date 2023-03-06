import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Button, Overlay} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import Images from '../../constants';
import {Greenbtn} from '../greenbtn';

const PopUp = ({
  Visible,
  setVisible,
  onpress1,
  poup1,
  poup2,
  poup3,
  poup4,
  onpressA,
  btntext1,
  btntext2,
}) => {
  const [state1, setState1] = useState(false);
  return (
    <>
      {poup1 && (
        <Overlay
          overlayStyle={{borderRadius: 20, elevation: 10, width: '85%'}}
          style={{}}
          // animationType="slide" // transparent={false}
          visible={Visible}
          onRequestClose={() => {
            // Alert.alert('Modal has been closed.');
            setVisible(Visible);
          }}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              You Will Be Charged
              <Text
                style={{
                  color: '#1492E6',
                }}>
                {' '}
                $264
              </Text>{' '}
              For Yearly Package!
            </Text>
            <View
              style={{
                marginVertical: 10,
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Image source={Images.Icons.card} />
              <Text style={[styles.modalText, {textAlign: 'center'}]}>
                Saved Cards
              </Text>
            </View>

            <View style={styles.btns}>
              <Text style={{color: '#000'}}>4860567867XXXXXX</Text>
              <Image source={Images.Icons.visa} style={{marginTop: 3}} />
            </View>
            <View style={styles.btns}>
              <TouchableOpacity
                style={[
                  styles.button,
                  styles.buttonClose,
                  {borderWidth: 1, backgroundColor: '#fff', padding: 5},
                ]}
                onPress={() => setVisible(!Visible)}>
                <Text style={[styles.textStyle, {color: '#1C5C2E'}]}>
                  {btntext1}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={onpress1}>
                <Text style={[styles.textStyle, {}]}>{btntext2}</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={onpressA} style={styles.btns}>
              <Text style={{color: '#1492E6', fontSize: 16}}>Try New Card</Text>
              <Icon
                name="arrowright"
                size={15}
                color="#1492E6"
                style={{marginTop: 2.5, marginLeft: 5}}
              />
            </TouchableOpacity>
          </View>
        </Overlay>
      )}
      {poup2 && (
        <Overlay
          overlayStyle={{borderRadius: 20, elevation: 10, width: '85%'}}
          style={{}}
          // animationType="slide" // transparent={false}
          visible={Visible}
          onRequestClose={() => {
            // Alert.alert('Modal has been closed.');
            setVisible(Visible);
          }}>
          <View style={styles.modalView}>
            <View
              style={{
                marginVertical: 10,
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Image source={Images.Icons.badge} />
              <Text style={styles.modalText}>
                Payment Processed Successfully
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={[
                    styles.modalText,
                    {
                      textAlign: 'center',
                      color: '#2196F3',
                      fontFamily: 'BrandonGrotesque-Regular',
                    },
                  ]}>
                  1 Year Upgraded
                </Text>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    marginTop: 18,
                    marginLeft: 10,
                  }}>
                  <Image
                    source={require('../../assests/images/tick.png')}
                    style={{}}
                  />
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={onpress1}>
              <Text style={[styles.textStyle]}>Done</Text>
            </TouchableOpacity>
          </View>
        </Overlay>
      )}
      {poup3 && (
        <Overlay
          overlayStyle={{borderRadius: 20, elevation: 10, width: '85%'}}
          style={{}}
          // animationType="slide" // transparent={false}
          visible={Visible}
          onRequestClose={() => {
            // Alert.alert('Modal has been closed.');
            setVisible(Visible);
          }}>
          <View style={styles.modalView}>
            <View
              style={{
                marginVertical: 10,
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Image source={require('../../assests/images/greencheck.png')} />
              <Text
                style={[styles.modalText, {fontWeight: '600', marginTop: 15}]}>
                Updated Successfully
              </Text>
            </View>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose, {width: 200}]}
              onPress={onpress1}>
              <Text style={[styles.textStyle]}>Done</Text>
            </TouchableOpacity>
          </View>
        </Overlay>
      )}
      {poup4 && (
        <Overlay
          overlayStyle={{borderRadius: 20, elevation: 10, width: '85%'}}
          style={{}}
          // animationType="slide" // transparent={false}
          visible={Visible}
          onRequestClose={() => {
            // Alert.alert('Modal has been closed.');
            setVisible(Visible);
          }}>
          <View style={styles.modalView}>
            <View
              style={{
                marginVertical: 10,
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Image source={Images.Icons.checkmarkCircle} />
              <Text
                style={{
                  color: '#000',
                  fontWeight: 'bold',
                  marginTop: 20,
                  fontSize: 16,
                }}>
                Comment Posted
              </Text>
            </View>

            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={onpress1}>
              <Text style={[styles.textStyle]}>Close</Text>
            </TouchableOpacity>
          </View>
        </Overlay>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  modalView: {
    width: '80%',
    margin: 20,
    alignItems: 'center',
    alignSelf: 'center',
    // backgroundColor: 'white',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },
  button: {
    width: 120,
    height: 39,
    borderRadius: 15,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btns: {
    flexDirection: 'row',
    padding: 5,
  },

  buttonClose: {
    margin: 10,

    // backgroundColor: '#2196F3',
    backgroundColor: '#1C5C2E',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'BrandonGrotesque-Regular',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10,
    color: '#000',
    fontFamily: 'BrandonGrotesque-Medium',
  },
});

export {PopUp};
