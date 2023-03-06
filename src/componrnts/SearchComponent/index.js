/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SeeAll, Userdetails} from '..';
import All from '../all';
import MainBox from '../mainbox';
import Images from '../../constants';
import Modaldata from '../modaldata';
import {SafeAreaView} from 'react-native-safe-area-context';
import {color} from 'react-native-elements/dist/helpers';
const SearchComponent = ({route, navigation, otherParam}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [topicName, setTopicName] = useState('Topics');
  const [typeName, setTypeName] = useState('Types');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState('all');
  const [Color2, setColor2] = useState(false);
  const [products, setProducts] = useState(data);
  const [products2, setProducts2] = useState(data2);
  const [products3, setProducts3] = useState(data3);
  const handleChange = (id, rowNumber) => {
    let productArr =
      rowNumber === 1
        ? products
        : rowNumber === 2
        ? products2
        : rowNumber === 3
        ? products3
        : [];
    let temp = productArr.map(product => {
      if (id === product.id) {
        return {...product, isChecked: !product.isChecked};
      }
      return product;
    });
    rowNumber === 1
      ? setProducts(temp)
      : rowNumber === 2
      ? setProducts2(temp)
      : rowNumber === 3
      ? setProducts3(temp)
      : null;
  };
  return (
    <SafeAreaView>
      <View
        style={{
          width: '100%',
          paddingHorizontal: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 30,
        }}>
        <TouchableOpacity
          onPress={() => {
            setActiveTab(0);
            setTopicName('Topics');
            setTypeName('Types');
          }}
          style={[
            styles.tabBtn,
            {
              backgroundColor: activeTab === 0 ? '#1C5C2E' : '#D1DED5',
            },
          ]}>
          <Text
            style={{
              color: activeTab === 0 ? '#fff' : '#1C5C2E',
              fontFamily: 'BrandonGrotesque-Regular',
            }}>
            All
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setActiveTab(1);
            setTopicName('Topics');
            setTypeName('Types');
          }}
          style={[
            styles.tabBtn,
            {
              backgroundColor: activeTab === 1 ? '#205F2E' : '#D1DED5',
            },
          ]}>
          <Text
            style={{
              color: activeTab === 1 ? '#fff' : '#205F2E',
              fontFamily: 'BrandonGrotesque-Regular',
            }}>
            Tools
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setActiveTab(2);
            setTopicName('Topics');
            setTypeName('Types');
          }}
          style={[
            styles.tabBtn,
            {
              backgroundColor: activeTab === 2 ? '#205F2E' : '#D1DED5',
            },
          ]}>
          <Text
            style={{
              color: activeTab === 2 ? '#fff' : '#205F2E',
              fontFamily: 'BrandonGrotesque-Regular',
            }}>
            Groundwork
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: '#1C5C2E',
        }}
      />
      <View style={styles.container}>
        <View style={{width: '100%'}}>
          {activeTab === 0 ? (
            <>
              <TouchableOpacity
                onPress={() => {
                  setModalType(1);
                  setModalVisible(!modalVisible);
                }}
                style={[
                  styles.topics,
                  {
                    backgroundColor: '#fff',
                    width: 125,
                  },
                ]}>
                <Text
                  style={{
                    color: '#1C5C2E',
                    fontSize: 16,
                    fontFamily: 'BrandonGrotesque-Regular',
                  }}>
                  Topics
                </Text>
                <Icon
                  name="chevron-down"
                  size={18}
                  color="#1C5C2E"
                  style={{margin: 6}}
                />
              </TouchableOpacity>

              <View>
                <View
                  style={{
                    marginVertical: 10,
                    width: '95%',
                    alignSelf: 'center',
                  }}>
                  <SeeAll
                    // onPress={() => navigation.navigate('tools')}
                    color1="#1C5C2E"
                    textA="TOOLS"
                    // textB="See All"
                  />
                </View>
                <View style={styles.box1}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {products.map((item, index) => {
                      return (
                        <>
                          <View style={{}}>
                            <MainBox
                              left={60}
                              bgcolor={'#FF4053'}
                              TONGLEN="TONGLEN"
                              textone={item.centertexr}
                              heartPlusIcons
                              IconBGColor={
                                !item.isChecked ? '#ffffff' : '#1C5C2E'
                              }
                              // I1={item.one}
                              // colorI={
                              //   item.isChecked === true ? '#1C5C2E' : '#ffff'
                              // }
                              colorIcon={
                                item.isChecked !== true ? '#1C5C2E' : '#fff'
                              }
                              Ionpress={handleChange}
                              Iicon={Color2 === true ? 'pluss' : 'plus'}
                              item={item.ImgICon}
                              img2={item.img2}
                              heart1={item.heart1}
                              id={item.id}
                              rowNumber={1}
                              color={'green'}
                              minutes={'5 min'}
                              marginTop11={35}
                            />
                          </View>
                        </>
                      );
                    })}
                  </ScrollView>
                </View>
                <View
                  style={{
                    marginVertical: 10,
                    width: '95%',
                    alignSelf: 'center',
                  }}>
                  <SeeAll
                    // onPress={() =>
                    //   navigation.navigate('GroundWork', {
                    //     otherParam: 'Top Tools',
                    //     plus: true,
                    //     // backoption: () =>
                    //     //   navigation.replace('Mytabs', {screen: 'me'}),
                    //   })
                    // }
                    color1="#1C5C2E"
                    textA="GROUNDWORK"
                    // textB="See All"
                  />
                </View>
                <View style={styles.box1}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {products2.map((item, index) => {
                      return (
                        <>
                          <View style={{}}>
                            <MainBox
                              left={60}
                              bgcolor={'#FF4053'}
                              TONGLEN="TONGLEN"
                              IconBGColor={'#fff'}
                              textone={item.centertexr1}
                              heartPlusIcons
                              colorI="#fff"
                              colorIcon={
                                item.isChecked === true ? '#EF3A71' : '#EF3A71'
                              }
                              Ionpress={handleChange}
                              Iicon={
                                item.isChecked === true ? 'hearto' : 'heart'
                              }
                              // I1={item.heart1}
                              id={item.id}
                              rowNumber={2}
                              img2={item.img3}
                              color={'green'}
                              minutes={'5 min'}
                              marginTop11={35}
                            />
                          </View>
                        </>
                      );
                    })}
                  </ScrollView>
                </View>
                <View
                  style={{
                    marginVertical: 10,
                    width: '95%',
                    alignSelf: 'center',
                  }}>
                  <SeeAll
                    // onPress={() => {
                    //   navigation.navigate('me', {
                    //     screen: 'FressBlooms',
                    //     params: {
                    //       otherParam: 'Fresh Blooms',
                    //       heart: true,
                    //       fromHome: true,
                    //     },
                    //   });
                    //   }}
                    textA="FRESH BLOOMS"
                    // textB="See All"
                    color1="#1C5C2E"
                  />
                </View>
                <View style={styles.box1}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {products3.map((item, index) => {
                      return (
                        <>
                          <View style={{}}>
                            <MainBox
                              marginTop11={35}
                              minutes={'5 min'}
                              heartPlusIcons
                              IconBGColor={'#fff'}
                              colorI="#fff"
                              colorIcon={
                                item.isChecked === true ? '#EF3A71' : '#EF3A71'
                              }
                              Ionpress={handleChange}
                              Iicon={
                                item.isChecked === true ? 'hearto' : 'heart'
                              }
                              id={item.id}
                              rowNumber={3}
                              img2={item.img4}
                              item={item.ImgICon}
                              color={'green'}
                              left={60}
                              bgcolor={'#FF4053'}
                              TONGLEN="TONGLEN"
                              textone={item.centertexr2}
                              text2={'5 min'}
                            />
                          </View>
                        </>
                      );
                    })}
                  </ScrollView>
                </View>
              </View>
              <View
                style={{
                  marginVertical: 15,
                  width: '95%',
                  alignSelf: 'center',
                }}>
                <SeeAll color1="#1C5C2E" textA="TEACHERS" textB="See All" />
              </View>

              <View style={{marginTop: -15}}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  data={userData}
                  renderItem={({item}) => {
                    return (
                      <>
                        <View
                          style={{
                            marginVertical: 5,
                            width: '95%',
                            alignSelf: 'center',
                          }}>
                          <Userdetails
                            backgroundColor={'#00000029'}
                            databox2
                            bear={item.Img1}
                            name={item.name}
                            time={item.time}
                            text={item.text}
                          />
                        </View>
                      </>
                    );
                  }}
                />
              </View>
            </>
          ) : null}

          {activeTab === 1 ? (
            <>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignSelf: 'flex-start',
                }}>
                <TouchableOpacity
                  style={styles.topics}
                  onPress={() => {
                    if (topicName !== 'Topics') {
                      setTopicName('Topics');
                    } else {
                      setModalType(1);
                      setModalVisible(!modalVisible);
                    }
                  }}>
                  <Text
                    style={{
                      color: '#1C5C2E',
                      fontSize: 16,
                      margin: 6,
                      fontFamily: 'BrandonGrotesque-Regular',
                    }}>
                    {topicName}
                  </Text>
                  {topicName !== 'Topics' ? (
                    <Icon
                      name="close"
                      size={18}
                      color="#1C5C2E"
                      style={{margin: 6}}
                    />
                  ) : (
                    <Icon
                      name="chevron-down"
                      size={18}
                      color="#1C5C2E"
                      style={{margin: 6}}
                    />
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    if (typeName !== 'Types') {
                      setTypeName('Types');
                    } else {
                      setModalType(2);
                      setModalVisible(!modalVisible);
                    }
                  }}
                  style={styles.topics}>
                  <Text
                    style={{
                      color: '#1C5C2E',
                      fontSize: 16,
                      margin: 6,
                      fontFamily: 'BrandonGrotesque-Regular',
                    }}>
                    {typeName}
                  </Text>
                  {typeName !== 'Types' ? (
                    <Icon
                      name="close"
                      size={18}
                      color="#1C5C2E"
                      style={{margin: 6}}
                    />
                  ) : (
                    <Icon
                      name="chevron-down"
                      size={18}
                      color="#1C5C2E"
                      style={{margin: 6}}
                    />
                  )}
                </TouchableOpacity>
              </ScrollView>

              <View style={[styles.box2, {}]}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={item => item.id}
                  data={databox}
                  renderItem={({item}) => {
                    return (
                      <All
                        pressI={() => {
                          return;
                        }}
                        iconimg1
                        searchTop={-28}
                        searchmargin={25}
                        onPressALL={item.pressAll}
                        textA={item.textA}
                        // heart1={item.heart1}
                        textB={item.textB}
                        homebox
                        plus={item.plus}
                        bghome2={item.bg12}
                        marginVertical={5}
                        marginTop={15}
                        marginVertical2={25}
                        marginTop2={-3}
                        title={item.title}
                      />
                    );
                  }}
                />
              </View>
            </>
          ) : null}
          {activeTab === 2 ? (
            <>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{
                  width: '100%',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  style={styles.topics}
                  onPress={() => {
                    if (topicName !== 'Topics') {
                      setTopicName('Topics');
                    } else {
                      setModalType(1);
                      setModalVisible(!modalVisible);
                    }
                  }}>
                  <Text
                    style={{
                      color: '#1C5C2E',
                      fontSize: 16,
                      margin: 6,
                      fontFamily: 'BrandonGrotesque-Regular',
                    }}>
                    {topicName}
                  </Text>
                  {topicName !== 'Topics' ? (
                    <Icon
                      name="close"
                      size={18}
                      color="#1C5C2E"
                      style={{margin: 6}}
                    />
                  ) : (
                    <Icon
                      name="chevron-down"
                      size={18}
                      color="#1C5C2E"
                      style={{margin: 6}}
                    />
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    if (typeName !== 'Types') {
                      setTypeName('Types');
                    } else {
                      setModalType(2);
                      setModalVisible(!modalVisible);
                    }
                  }}
                  style={styles.topics}>
                  <Text
                    style={{
                      color: '#1C5C2E',
                      fontSize: 16,
                      margin: 6,
                      fontFamily: 'BrandonGrotesque-Regular',
                    }}>
                    {typeName}
                  </Text>
                  {typeName !== 'Types' ? (
                    <Icon
                      name="close"
                      size={18}
                      color="#1C5C2E"
                      style={{margin: 6}}
                    />
                  ) : (
                    <Icon
                      name="chevron-down"
                      size={18}
                      color="#1C5C2E"
                      style={{margin: 6}}
                    />
                  )}
                </TouchableOpacity>
              </ScrollView>
              <View>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={item => item.id}
                  numColumns={2}
                  data={databox}
                  renderItem={({item}) => {
                    return (
                      <View
                        style={{
                          alignSelf: 'center',
                          // display: 'flex',
                          // flexGrow: 1,
                          // width: '50%',
                        }}>
                        <All
                          iconimg2
                          searchTop={-28}
                          searchmargin={25}
                          color1="#1C5C2E"
                          onPressALL={item.pressAll}
                          textA={item.textA}
                          // heart1={item.heart1}
                          textB={item.textB}
                          heart1={item.heart1}
                          homebox
                          // plus={item.plus}
                          bghome2={item.bg12}
                          marginVertical={5}
                          marginTop={15}
                          marginVertical2={25}
                          marginTop2={-10}
                          title={item.title}
                        />
                      </View>
                    );
                  }}
                />
              </View>
            </>
          ) : null}
        </View>
      </View>
      <Modaldata
        headtext={
          activeTab === 0
            ? 'Topics'
            : activeTab === 1 && modalType === 1
            ? 'Tools Topics'
            : activeTab === 1 && modalType === 2
            ? 'Tools Types'
            : activeTab === 2 && modalType === 1
            ? 'Groundwork Topics'
            : activeTab === 2 && modalType === 2
            ? 'Groundwork Types'
            : null
        }
        data={modalType === 1 ? allTopics : typesData}
        Visible={modalVisible}
        setVisible={setModalVisible}
        setTopicName={setTopicName}
        setTypeName={setTypeName}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        modalType={modalType}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor: 'red',
  },
  tabBtn: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 20,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  container: {
    width: '95%',
    // height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  input: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: '#BCCFC1',
    opacity: 0.5,
    // alignSelf: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    justifyContent: 'space-between',
    width: '100%',

    // padding: 10,

    borderBottomColor: '#1C5C2E',
    borderBottomWidth: 1,
  },
  box: {
    // // width: '100%',
    // marginHorizontal: 50,
    // height: 42,
    // marginTop: 20,
    // backgroundColor: '#1C5C2E',
    // borderBottomColor: '#1C5C2E',
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderRadius: 5,
  },
  topics: {
    // alignSelf: 'flex-start',
    backgroundColor: '#eeee',
    opacity: 0.75,
    borderWidth: 1,
    borderColor: '#00000029',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // width: 125,
    height: 35,
    paddingHorizontal: 10,
    marginLeft: 10,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  box1: {
    width: '95%',
    alignSelf: 'center',
    // height: '100%',
    // backgroundColor: 'yellow',
  },
});
export default SearchComponent;
const databox = [
  {
    heart1: Images.Icons.heart1,
    title: 'Title',
    iconimg1: Images.Icons.Pcircle,
    bg12: Images.BackGround.Bg2,
    plus: 'plus',
    iconimg: Images.Icons.Pcircle,
  },

  {
    heart1: Images.Icons.heart1,
    title: 'Title',
    iconimg1: Images.Icons.sun,
    bg12: Images.BackGround.Bg2,
    plus: 'plus',
  },
];
const typesData = [
  {
    title: 'Tools For Light',
    type: 'tools',
  },
  {
    title: 'Tools For Shadow',
    type: 'tools',
  },
  {
    title: 'Tools For Connections',
    type: 'tools',
  },
  {
    title: 'Essentials',
    type: 'groundwork',
  },
  {
    title: 'Building Blocks',
    type: 'groundwork',
  },
  {
    title: 'Deep Dives',
    type: 'groundwork',
  },
  {
    title: 'Play!',
    type: 'groundwork',
  },
];

const allTopics = [
  {
    title: 'Buddhism',
    type: 'tools',
  },
  {
    title: 'Plants',
    type: 'groundwork',
  },
  {
    title: 'Quantum Physics',
    type: 'tools',
  },
  {
    title: 'Nature',
    type: 'groundwork',
  },
  {
    title: 'Ascended Master',
    type: 'tools',
  },
  {
    title: 'Higher Dimensional',
    type: 'tools',
  },
  {
    title: 'Light Beings',
    type: 'tools',
  },
  {
    title: 'Ancient Wisdom',
    type: 'tools',
  },
  {
    title: 'Western Psychology',
    type: 'tools',
  },
  {
    title: 'Mindfulness',
    type: 'tools',
  },
];

const userData = [
  {Img1: Images.Imgs.bear},
  {Img1: Images.Imgs.bear},
  {Img1: Images.Imgs.bear},
];
const data = [
  {
    id: 1,
    isChecked: false,
    text1: 'All',
    img2: Images.BackGround.path1,
    img3: Images.BackGround.nopath2,
    img4: Images.BackGround.rectangle2,
    one: Images.Icons.circleplus,
    heart1: 'heart',
    img: Images.Imgs.heart1,
    centertexr: 'TOOLS FOR LIGHT',
    centertexr1: 'FAMILY OF LIGHT',
    centertexr2: 'TONGLEN',
  },
  {
    id: 2,
    isChecked: false,
    text1: 'TOOLS',
    img2: Images.BackGround.path1,
    img3: Images.BackGround.nopath2,
    img4: Images.BackGround.rectangle2,
    two: Images.Imgs.heart1,
    one: Images.Icons.circleplus,
    iconimg2: Images.Icons.Pcircle,
    centertexr: 'TOOLS FOR LIGHT',
    centertexr1: 'FAMILY OF LIGHT',
    centertexr2: 'TONGLEN',
  },
  {
    id: 3,
    isChecked: false,
    text1: 'GROUND WORK',
    img2: Images.BackGround.path1,
    img3: Images.BackGround.nopath2,
    img4: Images.BackGround.rectangle2,
    two: Images.Imgs.heart1,
    one: Images.Icons.circleplus,
    centertexr: 'TOOLS FOR LIGHT',
    centertexr1: 'FAMILY OF LIGHT',
    centertexr2: 'TONGLEN',
  },
];
const data2 = [
  {
    id: 1,
    isChecked: false,
    text1: 'All',
    img2: Images.BackGround.path1,
    img3: Images.BackGround.nopath2,
    img4: Images.BackGround.rectangle2,
    one: Images.Icons.circleplus,
    heart1: 'heart',
    img: Images.Imgs.heart1,
    centertexr: 'TOOLS FOR LIGHT',
    centertexr1: 'FAMILY OF LIGHT',
    centertexr2: 'TONGLEN',
  },
  {
    id: 2,
    isChecked: false,
    text1: 'TOOLS',
    img2: Images.BackGround.path1,
    img3: Images.BackGround.nopath2,
    img4: Images.BackGround.rectangle2,
    two: Images.Imgs.heart1,
    one: Images.Icons.circleplus,
    iconimg2: Images.Icons.Pcircle,
    centertexr: 'TOOLS FOR LIGHT',
    centertexr1: 'FAMILY OF LIGHT',
    centertexr2: 'TONGLEN',
  },
  {
    id: 3,
    isChecked: false,
    text1: 'GROUND WORK',
    img2: Images.BackGround.path1,
    img3: Images.BackGround.nopath2,
    img4: Images.BackGround.rectangle2,
    two: Images.Imgs.heart1,
    one: Images.Icons.circleplus,
    centertexr: 'TOOLS FOR LIGHT',
    centertexr1: 'FAMILY OF LIGHT',
    centertexr2: 'TONGLEN',
  },
];
const data3 = [
  {
    id: 1,
    isChecked: false,
    text1: 'All',
    img2: Images.BackGround.path1,
    img3: Images.BackGround.nopath2,
    img4: Images.BackGround.rectangle2,
    one: Images.Icons.circleplus,
    heart1: 'heart',
    img: Images.Imgs.heart1,
    centertexr: 'TOOLS FOR LIGHT',
    centertexr1: 'FAMILY OF LIGHT',
    centertexr2: 'TONGLEN',
  },
  {
    id: 2,
    isChecked: false,
    text1: 'TOOLS',
    img2: Images.BackGround.path1,
    img3: Images.BackGround.nopath2,
    img4: Images.BackGround.rectangle2,
    two: Images.Imgs.heart1,
    one: Images.Icons.circleplus,
    iconimg2: Images.Icons.Pcircle,
    centertexr: 'TOOLS FOR LIGHT',
    centertexr1: 'FAMILY OF LIGHT',
    centertexr2: 'TONGLEN',
  },
  {
    id: 3,
    isChecked: false,
    text1: 'GROUND WORK',
    img2: Images.BackGround.path1,
    img3: Images.BackGround.nopath2,
    img4: Images.BackGround.rectangle2,
    two: Images.Imgs.heart1,
    one: Images.Icons.circleplus,
    centertexr: 'TOOLS FOR LIGHT',
    centertexr1: 'FAMILY OF LIGHT',
    centertexr2: 'TONGLEN',
  },
];
