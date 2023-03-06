import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import Images from '../../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header2 from '../../../componrnts/header2';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useBackButton} from '../../../hooks/BackHandler';
import {
  ContactSvg,
  EmailSvg,
  LogoutSvg,
  NameSvg,
  NotificationSvg,
  PasswordSvg,
  PrivacySvg,
  SubscriptionSvg,
  TermsSvg,
} from '../../../assests/svgs/SettingsSvgs';
import {Header} from '../../../componrnts';
const Settings = ({navigation}) => {
  //BackHandler
  const onBackPress = () => {
    navigation.goBack();
    return true;
  };
  useBackButton(navigation, onBackPress);
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <Header
          fontSize={20}
          fontWeight="Bold"
          headertextColor="#191919B8"
          iconName="closesquareo"
          headertext="Erin's Settings"
          settings={true}
          OnPress={() => navigation.goBack()}
        />
        <View style={{marginTop: 80}}>
          <View style={styles.firstview}>
            <View style={styles.headingRow}>
              <Text style={styles.textA}>Notification</Text>
              <View style={styles.line} />
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('EmailNotification');
              }}
              style={[
                styles.row,
                {
                  width: '90%',
                  justifyContent: 'space-between',
                  marginTop: 20,
                },
              ]}>
              <View style={styles.leftIconBox}>
                <EmailSvg />
                <Text style={styles.text1}>Email Notification</Text>
              </View>
              <Icon name="angle-right" color={'#1C5C2E'} size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Pushnotification');
              }}
              style={[
                styles.row,
                {
                  width: '90%',
                  justifyContent: 'space-between',
                },
              ]}>
              <View style={styles.leftIconBox}>
                <NotificationSvg />
                <Text style={styles.text1}>Push Notification</Text>
              </View>
              <Icon name="angle-right" color={'#1C5C2E'} size={20} />
            </TouchableOpacity>
          </View>
          <View style={styles.firstview}>
            <View style={styles.headingRow}>
              <Text style={styles.textA}>Accounts</Text>
              <View style={styles.line}></View>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('EditScreen', {
                  itemId: 'Update Email',
                  otherParam: 'Update Email',
                  otherParam1: 'Enter Your Email Address',
                });
              }}
              style={[
                styles.row,
                {
                  width: '90%',
                  justifyContent: 'space-between',
                  marginTop: 20,
                },
              ]}>
              <View style={styles.leftIconBox}>
                <EmailSvg />
                <Text style={styles.text1}>Edit Email</Text>
              </View>
              <Icon name="angle-right" color={'#1C5C2E'} size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('EditScreen', {
                  itemId: 'Update Name',
                  otherParam: 'Update',
                  otherParam1: 'Enter Your First Name',
                  otherParam2: 'Enter Your Last Name',
                  two: true,
                });
              }}
              style={[
                styles.row,
                {
                  width: '90%',
                  justifyContent: 'space-between',
                },
              ]}>
              <View style={styles.leftIconBox}>
                <NameSvg />
                <Text style={styles.text1}>Edit Name</Text>
              </View>
              <Icon name="angle-right" color={'#1C5C2E'} size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('EditScreen', {
                  itemId: 'Change Password',
                  otherParam: 'Update Password',
                  otherParam1: 'Enter Current Password',
                  otherParam2: 'Enter New Password',
                  two: true,
                });
              }}
              style={[
                styles.row,
                {
                  width: '90%',
                  justifyContent: 'space-between',
                },
              ]}>
              <View style={styles.leftIconBox}>
                <PasswordSvg />
                <Text style={styles.text1}>Change Password</Text>
              </View>
              <Icon name="angle-right" color={'#1C5C2E'} size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ManageSubscription');
              }}
              style={[
                styles.row,
                {
                  width: '90%',
                  justifyContent: 'space-between',
                },
              ]}>
              <View style={styles.leftIconBox}>
                <SubscriptionSvg />
                <Text style={styles.text1}>Manage Subscription</Text>
              </View>
              <Icon name="angle-right" color={'#1C5C2E'} size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.replace('login')}
              style={[
                styles.row,
                {
                  width: '90%',
                  justifyContent: 'space-between',
                },
              ]}>
              <View style={styles.leftIconBox}>
                <LogoutSvg />
                <Text style={styles.text1}>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.firstview}>
            <View style={styles.headingRow}>
              <Text style={styles.textA}>Support</Text>
              <View style={styles.line}></View>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Contactus');
              }}
              style={[
                styles.row,
                {
                  width: '90%',
                  justifyContent: 'space-between',
                  marginTop: 20,
                },
              ]}>
              <View style={styles.leftIconBox}>
                <ContactSvg />
                <Text style={styles.text1}>Contact us</Text>
              </View>
              <Icon name="angle-right" color={'#1C5C2E'} size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PrivacyPolicy', {
                  heading1: 'Privacy Policy',
                });
              }}
              style={[
                styles.row,
                {
                  width: '90%',
                  justifyContent: 'space-between',
                },
              ]}>
              <View style={styles.leftIconBox}>
                <PrivacySvg />
                <Text style={styles.text1}>Privacy Policy</Text>
              </View>
              <Icon name="angle-right" color={'#1C5C2E'} size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PrivacyPolicy', {
                  heading1: 'Terms Of Uses',
                });
              }}
              style={[
                styles.row,
                {
                  width: '90%',
                  justifyContent: 'space-between',
                },
              ]}>
              <View style={styles.leftIconBox}>
                <TermsSvg />
                <Text style={styles.text1}>Terms of use</Text>
              </View>
              <Icon name="angle-right" color={'#1C5C2E'} size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginVertical: 15}} />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  firstview: {
    width: '90%',
    paddingLeft: 15,
    alignSelf: 'center',
  },
  line: {
    width: 10,
    height: 1,
    backgroundColor: '#afafaa',
    flex: 1,
  },
  text1: {
    fontSize: 14,
    color: '#191919B8',
    fontFamily: 'BrandonGrotesque-Regular',
    marginLeft: 10,
  },
  textA: {
    fontSize: 20,
    color: '#000',
    marginRight: 10,
    fontFamily: 'BrandonGrotesque-Medium',
  },
  headingRow: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 15,
    paddingLeft: 5,
    marginTop: 15,
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  leftIconBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default Settings;
