// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Image,
//   ImageBackground,
// } from 'react-native';
// import React from 'react';
// import Images from '../../constants';
// // import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/AntDesign';

// const Imgbox = props => {
//   return (
//     <>
//       {/* <View style={{width: 172, height: 239}}>
//         <ImageBackground
//           resizeMode="cover"
//           source={props.bghome2}
//           style={{
//             width: '100%',
//             height: '100%',
//             borderRadius: 10,
//             marginTop: 5,
//             // alignSelf: 'center',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}>
//           <View
//             style={{
//               // backgroundColor: 'pink',
//               top: 35,
//               right: 40,
//               position: 'absolute',
//               height: 33,
//               width: 33,
//               alignSelf: 'flex-end',
//               // backgroundColor: 'yellow',
//             }}>
//             <Image
//               source={props.heart1}
//               resizeMode="contain"
//               style={{width: '100%', height: '100%'}}
//             />
//             <Image sourc />
//           </View>
//           <View style={{justifyContent: 'center', alignItems: 'center'}}>
//             <Text
//               style={{textAlign: 'center', fontSize: 26, marginVertical: 10}}>
//               {props.title}
//             </Text>
//             <View
//               style={{
//                 width: 60,
//                 height: 33,
//                 borderRadius: 10,
//                 justifyContent: 'center',
//                 backgroundColor: '#CD258D',
//                 alignItems: 'center',
//               }}>
//               <Text style={{color: '#fff', fontWeight: 'bold'}}>5Min</Text>
//             </View>
//           </View>
//         </ImageBackground>
//       </View> */}
//       <View style={{}}>
//         <View
//           style={{
//             alignSelf: 'center',
//             width: '100%',
//             flexDirection: 'row',
//             //  backgroundColor:'yellow'
//           }}>
//           <View style={{width: 172, height: 239, marginTop: -20}}>
//             <ImageBackground
//               source={Images.BackGround.greenbg}
//               style={{
//                 width: '100%',
//                 height: '100%',
//                 borderRadius: 10,
//               }}>
//               <TouchableOpacity
//                 onPress={props.pressI}
//                 style={{
//                   // backgroundColor: 'pink',
//                   top: 28,
//                   right: 30,
//                   position: 'absolute',
//                   height: 33,
//                   width: 33,
//                   alignSelf: 'flex-end',

//                   // backgroundColor: 'yellow',
//                 }}>
//                 <Image
//                   source={props.heart1}
//                   resizeMode="contain"
//                   style={{
//                     width: '100%',
//                     height: '100%',
//                     marginLeft: -10,
//                   }}
//                 />
//                 <Icon
//                   name={props.plus}
//                   color={'#fefefe'}
//                   size={25}
//                   style={{fontWeight: 'bold', position: 'absolute'}}
//                 />
//               </TouchableOpacity>
//               <View
//                 style={{
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   position: 'absolute',
//                   top: 100,
//                   left: 60,
//                 }}>
//                 {props.iconimg && (
//                   <View
//                     style={{
//                       width: 30,
//                       height: 25,
//                       // backgroundColor: 'yellow',
//                     }}>
//                     <Image
//                       source={props.iconimg}
//                       resizeMode="contain"
//                       style={{
//                         width: '100%',
//                         height: '100%',
//                       }}
//                     />
//                   </View>
//                 )}

//                 <Text
//                   style={{
//                     textAlign: 'center',
//                     fontSize: 18,
//                     marginVertical: 5,
//                   }}>
//                   {props.title}
//                 </Text>
//                 <View
//                   style={{
//                     width: 40,
//                     height: 15,
//                     borderRadius: 10,
//                     justifyContent: 'center',
//                     backgroundColor: '#CD258D',
//                     alignItems: 'center',
//                   }}>
//                   <Text
//                     style={{
//                       color: '#fff',
//                       fontWeight: 'bold',
//                       fontSize: 10,
//                     }}>
//                     5Min
//                   </Text>
//                 </View>
//               </View>
//             </ImageBackground>
//           </View>
//         </View>
//       </View>
//     </>
//   );
// };

// export {Imgbox};

// const styles = StyleSheet.create({});

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import Images from '../../constants';
import Icon from 'react-native-vector-icons/AntDesign';
import {SeeAll} from '../SeeAll';
import {FlatList} from 'react-native';
const Imgbox = ({
  newtext1,
  newtext2,
  bghome2,
  title,
  heart1,
  textA,
  textB,
  onPress,
  iconimg,
  color1,
  circle,
  iconimg2,
  onPressALL,
  iconimg12,
  iconimg13,
  iconimg14,
  plus,
  iconimg1,
  pressI,
}) => {
  const Data = [
    {
      id: 1,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      title: 'title',
      iconimg2: iconimg2,
      iconimg1: iconimg1,
    },
    {
      id: 2,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      heart1: Images.Icons.pinki,
      name: 'TONGLEN',
      title: 'title',
      iconimg2: iconimg2,
    },
    {
      id: 3,
      bg1: Images.BackGround.black,
      bg12: Images.BackGround.greenbg,
      heart1: Images.Icons.heart1,
      name: 'TONGLEN',
      title: 'title',
      iconimg2: iconimg2,
    },
  ];
  return (
    <>
      <View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
          }}>
          <Text style={[styles.txtA, {color: color1}]}>{textA}</Text>
          <TouchableOpacity onPress={onPressALL} style={{}}>
            <Text style={styles.txtB}>{textB}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.box2}>
        {/*  */}

        <View
          style={{
            backgroundColor: 'red',
            width: 172,
            height: 229,
            borderRadius: 10,
            // marginRight: index == 0 ? 10 : null,
            // marginHorizontal: index == 0 ? null : 10,
            overflow: 'hidden',
          }}>
          <Image
            source={bghome2}
            style={{
              backgroundColor: 'blue',
              height: '100%',
              width: '50%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              // backgroundColor: 'yellow',
              width: '100%',
              height: '100%',
            }}>
            <TouchableOpacity
              onPress={pressI}
              style={{
                // backgroundColor: 'pink',
                top: 18,
                right: 8,
                position: 'absolute',
                height: 33,
                width: 33,
                alignSelf: 'flex-end',
                // backgroundColor: 'yellow',
              }}>
              <Image
                source={heart1}
                resizeMode="contain"
                style={{
                  width: '100%',
                  height: '100%',
                  marginLeft: -10,
                }}
              />
              <Icon
                name={plus}
                color={'#fefefe'}
                size={25}
                style={{fontWeight: 'bold', position: 'absolute'}}
              />
            </TouchableOpacity>

            <View
              style={{
                marginTop: 120,
                // backgroundColor: 'yellow',

                alignItems: 'center',
              }}>
              <View style={{}}>
                {iconimg && (
                  <View
                    style={{
                      width: 30,
                      height: 25,
                      // backgroundColor: 'yellow',
                    }}>
                    <Image
                      source={iconimg2}
                      resizeMode="contain"
                      style={{
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  </View>
                )}
                {iconimg1 && (
                  <View
                    style={{
                      width: 30,
                      height: 25,
                      // backgroundColor: 'yellow',
                    }}>
                    <Image
                      source={iconimg1}
                      resizeMode="contain"
                      style={{
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  </View>
                )}
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 18,
                    marginVertical: 5,
                    fontFamily: 'BrandonGrotesque-Regular',
                  }}>
                  {title}
                </Text>
                <View
                  style={{
                    width: 40,
                    height: 15,
                    borderRadius: 10,
                    justifyContent: 'center',
                    backgroundColor: '#CD258D',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize: 10,
                      fontFamily: 'BrandonGrotesque-Regular',
                    }}>
                    5Min
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.box2}>
        {/*  */}

        <View
          style={{
            backgroundColor: 'red',
            width: 172,
            height: 229,
            borderRadius: 10,
            // marginRight: index == 0 ? 10 : null,
            // marginHorizontal: index == 0 ? null : 10,
            overflow: 'hidden',
          }}>
          <Image
            source={bghome2}
            style={{
              backgroundColor: 'blue',
              height: '100%',
              width: '50%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              // backgroundColor: 'yellow',
              width: '100%',
              height: '100%',
            }}>
            <TouchableOpacity
              onPress={pressI}
              style={{
                // backgroundColor: 'pink',
                top: 18,
                right: 8,
                position: 'absolute',
                height: 33,
                width: 33,
                alignSelf: 'flex-end',
                // backgroundColor: 'yellow',
              }}>
              <Image
                source={heart1}
                resizeMode="contain"
                style={{
                  width: '100%',
                  height: '100%',
                  marginLeft: -10,
                }}
              />
              <Icon
                name={plus}
                color={'#fefefe'}
                size={25}
                style={{fontWeight: 'bold', position: 'absolute'}}
              />
            </TouchableOpacity>

            <View
              style={{
                marginTop: 120,
                // backgroundColor: 'yellow',

                alignItems: 'center',
              }}>
              <View style={{}}>
                {iconimg && (
                  <View
                    style={{
                      width: 30,
                      height: 25,
                      // backgroundColor: 'yellow',
                    }}>
                    <Image
                      source={iconimg2}
                      resizeMode="contain"
                      style={{
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  </View>
                )}
                {iconimg1 && (
                  <View
                    style={{
                      width: 30,
                      height: 25,
                      // backgroundColor: 'yellow',
                    }}>
                    <Image
                      source={iconimg1}
                      resizeMode="contain"
                      style={{
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  </View>
                )}
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 18,
                    marginVertical: 5,
                    fontFamily: 'BrandonGrotesque-Regular',
                  }}>
                  {title}
                </Text>
                <View
                  style={{
                    width: 40,
                    height: 15,
                    borderRadius: 10,
                    justifyContent: 'center',
                    backgroundColor: '#CD258D',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize: 10,
                      fontFamily: 'BrandonGrotesque-Regular',
                    }}>
                    5Min
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Imgbox;

const styles = StyleSheet.create({
  box2: {
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    // height: 100,
    marginVertical: 5,
  },
  txtA: {
    color: '#1C5C2E',
    fontWeight: '500',
    fontSize: 18,
    fontFamily: 'BrandonGrotesque-Regular',
    fontWeight: '700',
    opacity: 0.85,
  },
  txtB: {
    color: '#1C5C2E',
    fontWeight: '500',
    fontSize: 14,
    textDecorationLine: 'underline',
    fontFamily: 'BrandonGrotesque-Regular',
    fontWeight: '700',
    opacity: 0.85,
  },
});
