import React, { useState } from 'react';
import {

    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    StatusBar, Image

} from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Images from '../../constants';
import { Header } from '../header';
import Header2 from '../header2';

const ResultComponents = ({
    Visible,
    setVisible,
    onpress1,
    headerText
}) => {
    const [state1, setState1] = useState(false);
    return (
        <>
            <Overlay
                overlayStyle={{ height: '100%', width: '100%', }}
                //    animationType="slide" // transparent={false} style={{}}
                visible={Visible}
                onRequestClose={() => {
                    // Alert.alert('Modal has been closed.');
                    setVisible(Visible);
                }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}>
                    <StatusBar animated={true} backgroundColor="#000" />
                    <View style={styles.main}>


                        <View style={{ width: '90%', alignSelf: 'center', }}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                // justifyContent: 'space-between',
                                width: '90%'
                            }}>
                                <TouchableOpacity
                                    onPress={onpress1}
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 12,
                                        backgroundColor: '#1C5C2E',
                                        justifyContent: 'center',
                                        // alignSelf: 'flex-start',
                                        alignItems: 'center',
                                    }}>
                                    <Icon2
                                        name="closesquareo"
                                        size={20}
                                        color={'#fff'}
                                    />
                                </TouchableOpacity>
                                <View style={{ width: '100%', alignSelf: 'center' }}>
                                    <Text style={{
                                        textAlign: 'center',
                                        fontSize: 25, color: '#1C5C2E',
                                        fontFamily: 'BrandonGrotesque-Medium',
                                    }}>
                                        {headerText}
                                    </Text>
                                </View>
                            </View>
                            <View style={{ marginVertical: 10 }}>
                                <Text
                                    style={{
                                        fontSize: 31,
                                        textAlign: 'center',
                                        color: '#000',
                                        fontFamily: 'BrandonGrotesque-Regular',
                                    }}>
                                    Result!
                                </Text>
                            </View>
                            <View
                                style={{
                                    width: 79,
                                    height: 79,

                                    alignSelf: 'center',
                                }}>
                                <Image
                                    source={Images.Imgs.Rainbow}
                                    resizeMode="contain"
                                    style={{ width: '100%', height: '100%' }}
                                />
                            </View>
                            <View>
                                <Text
                                    style={{
                                        marginVertical: 10,
                                        fontSize: 20,
                                        // textAlign: 'center',
                                        color: '#000',
                                        fontFamily: 'BrandonGrotesque-Medium',
                                    }}>
                                    What fun your top areas resonance?
                                </Text>
                                <View style={styles.row}>
                                    <View style={styles.clo1}>
                                        <Text style={styles.text1}>1</Text>
                                        <Text style={styles.text1}>2</Text>
                                        <Text style={styles.text1}>3</Text>
                                    </View>
                                    <View style={styles.clo1}>
                                        <Text style={styles.text2}>Buddhism</Text>
                                        <Text style={styles.text2}>Plants Wisdom</Text>
                                        <Text style={styles.text2}>Quantum Physics Science</Text>
                                    </View>
                                </View>
                                <Text
                                    style={{
                                        marginVertical: 10,
                                        fontSize: 20,
                                        // textAlign: 'center',
                                        color: '#000',
                                        fontWeight: '400',
                                        fontFamily: 'BrandonGrotesque-Regular',
                                    }}>
                                    And The rest , in Descending Order:
                                </Text>
                                <View style={styles.row}>
                                    <View style={styles.clo1}>
                                        <Text style={styles.text1}>1</Text>
                                        <Text style={styles.text1}>2</Text>
                                        <Text style={styles.text1}>3</Text>
                                        <Text style={styles.text1}>4</Text>
                                        <Text style={styles.text1}>5</Text>
                                        <Text style={styles.text1}>6</Text>
                                    </View>
                                    <View style={styles.clo1}>
                                        <Text style={styles.text2}>Inner dim light Beings</Text>
                                        <Text style={styles.text2}>Mindfullness</Text>
                                        <Text style={styles.text2}>Western Physics</Text>
                                        <Text style={styles.text2}>Ascended Master</Text>
                                        <Text style={styles.text2}>Ascent Wisdom</Text>
                                        <Text style={styles.text2}>Nature</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ borderBottomWidth: 1, width: 68 }}>
                                <Text style={styles.text3}>Note:</Text>
                            </View>
                            <Text style={styles.text4}>
                                as You grow and heal your feelings of resonance will definitely
                                change as it moves close your the essential resonance!
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </Overlay>
        </>
    );
}
const styles = StyleSheet.create({
    main: { flex: 1 },
    text: {

        color: "#1C5C2E", fontSize: 25, marginTop: -20,
        textAlign: 'center', fontFamily: 'BrandonGrotesque-Bold',
    },
    text1: {
        color: "#030303", fontSize: 18,
        textAlign: 'center', marginVertical: 15,
        fontFamily: 'BrandonGrotesque-Regular',
    },
    row: {
        flexDirection: 'row',
        // backgroundColor: 'green',
    },
    text1: {
        marginVertical: 10,
        fontFamily: 'BrandonGrotesque-Regular',
        color: '#1C5C2E',

        fontSize: 16,
    },
    text2: {
        marginVertical: 10,
        fontFamily: 'BrandonGrotesque-Regular',
        color: '#000',
        fontSize: 16,
        marginLeft: 10,
    },
    text3: {
        color: '#000',
        fontSize: 26,
        fontFamily: 'BrandonGrotesque-Regular',
    },
    text4: {
        marginVertical: 15,
        letterSpacing: 0.6,
        color: '#030303',
        fontSize: 16,
        fontFamily: 'BrandonGrotesque-Regular',
    },
});
export default ResultComponents;


