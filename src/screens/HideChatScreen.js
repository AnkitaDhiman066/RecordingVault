// import {
//   TextInput,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   Dimensions,
//   StatusBar,
//   ImageBackground,
//   Image,
//   TouchableOpacity,
// } from 'react-native';
// import React, {useState} from 'react';
// import {FlatList} from 'react-native-gesture-handler';
// import {AllTextMessages} from '../Data/AllTextMessages';
// import {RadioButton} from 'react-native-paper';
// import CircleCheckBox from 'react-native-circle-checkbox';
// import LinearGradient from 'react-native-linear-gradient';

// const screen = Dimensions.get('screen');

// const Separator = () => <View style={styles.itemSeparator} />;

// const HideChatScreen = ({navigation}) => {
//   const [search, setSearch] = useState('');
//   const [check, setCheck] = useState('unchecked');
//   const [checked, setChecked] = useState(false);
//   const [selected, setSelected] = useState(0);
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   const updateSearch = search => {
//     setSearch(search);
//   };

//   const renderItem = ({item, index}) => {
//     return (
//       <View
//         style={{
//           width: 370,
//           marginLeft: 30,
//           height: 47,
//           flexDirection: 'row',
//           marginTop: 15,
//           marginBottom: 10,
//           alignItems:'center'
//         }}>
//         <View style={{marginRight: 8}}>
//           {/* <RadioButton status={check} onPress={() => setCheck('checked')} /> */}
//           <CircleCheckBox
//             checked={true}
//             onToggle={checked => {
//               console.log('My state is: ', checked);
//             }}
//             outerColor={'#009FA3'}
//             outerSize={19}
//             innerColor={'#009FA3'}
//             innerSize={12}
//           />
//         </View>

//         <View style={{height: 39, width: 39}}>
//           <Image
//             style={{height: 39, width: 39, borderRadius: 200}}
//             source={item.img}
//           />
//         </View>
//         <View style={{marginLeft: 15}}>
//           <Text
//             style={{
//               fontFamily: 'Poppins-SemiBold',
//               fontSize: 14,
//               color: '#153142',
//             }}>
//             {' '}
//             {item.name}{' '}
//           </Text>
//           <Text
//             style={{
//               fontFamily: 'Poppins-Regular',
//               fontSize: 11,
//               color: '#153142',
//               opacity: 0.4,
//             }}>
//             {' '}
//             {item.msg_latest}{' '}
//           </Text>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar
//         translucent
//         backgroundColor="transparent"
//         barStyle="dark-content"
//       />
//       <ImageBackground
//         source={require('../../assets/images/Vector.png')}
//         style={styles.circle}
//       />
//       {/* <View style={{margin: 40, backgroundColor :'red'}}> */}
//       <TouchableOpacity
//         style={{marginTop: 55, marginLeft: 25}}
//         onPress={() => navigation.navigate('Contacts')}>
//         <Image
//           style={{height: 14, width: 8}}
//           source={require('../../assets/images/backBlack.png')}
//         />
//       </TouchableOpacity>

//       <View
//         style={{
//           marginTop: 16,
//           marginBottom: 28,
//           alignSelf: 'center',
//           flexDirection: 'row',
//           borderWidth: 1,
//           borderRadius: 10,
//           backgroundColor: 'rgba(0, 159, 163, 0.05)',
//           borderColor: '#009FA3',
//           alignItems: 'center',
//           width: '90%',
//           paddingHorizontal: 19,
//         }}>
//         <TextInput
//           placeholder="Search by name or contact"
//           onChangeText={updateSearch}
//           value={search}
//           style={{
//             width: '100%',
//             height: 55,
//             fontFamily: 'Poppins-Medium',
//             fontSize: 12,
//             color: '#153142',
//           }}
//         />
//         <TouchableOpacity style={{height: 20, width: 20}}>
//           <Image
//             source={require('../../assets/images/magnify.png')}
//             style={{width: 19, height: 19, right: 29}}
//           />
//         </TouchableOpacity>
//       </View>
//       <View style={{flex: 1, alignItems: 'center'}}>
//         <FlatList
//           data={AllTextMessages}
//           renderItem={renderItem}
//           keyExtractor={item => item.id}
//           ItemSeparatorComponent={() => <Separator />}
//         />

//         <LinearGradient
//           colors={['#009FA3', '#06CFD4']}
//           start={{x: 0.1, y: 0.2}}
//           end={{x: 0.8, y: 1}}
//           style={{
//             backgroundColor: '#009FA3',
//             width: 324,
//             height: 62,
//             borderRadius: 40,
//             justifyContent: 'center',
//             alignItems: 'center',
//             // marginTop: 49,
//             bottom: 50,
//           }}>
//           <TouchableOpacity
//             onPress={() => navigation.navigate('Contacts')}
//             style={{
//               width: 325,
//               height: 55,
//               borderRadius: 40,
//               alignItems: 'center',
//               flexDirection: 'row',
//               justifyContent: 'center',
//             }}>
//             <Text
//               style={{
//                 color: '#FFFFFF',
//                 fontFamily: 'Poppins-SemiBold',
//                 fontSize: 18,
//               }}>
//               {' '}
//               Hide{' '}
//             </Text>
//           </TouchableOpacity>
//         </LinearGradient>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default HideChatScreen;

// const styles = StyleSheet.create({
//   container: {
//     height: screen.height,
//     width: screen.width,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//   },

//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginHorizontal: 25,
//   },

//   image: {
//     marginTop: 54,
//     width: 20,
//     height: 14,
//   },

//   image2: {
//     marginTop: 53,
//     width: 16,
//     height: 17,
//   },

//   mainView: {
//     height: screen.height,
//     width: screen.width,
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//   },

//   circle: {
//     width: 279,
//     height: 350,
//     resizeMode: 'contain',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     // backgroundColor: '#009FA3',
//     // opacity: 0.03,
//   },

//   text: {
//     fontSize: 32,
//     color: '#009FA3',
//     fontFamily: 'Poppins-SemiBold',
//   },

//   text2: {
//     fontSize: 12,
//     color: '#A8BAC4',
//     fontFamily: 'Poppins-Regular',
//   },

//   menu: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 26,
//   },

//   itemSeparator: {
//     marginHorizontal: 23,
//     height: 1,
//     backgroundColor: '#A8BAC4',
//   },
// });

import React, {useState} from 'react';
import {
  StyleSheet,
  Pressable,
  SafeAreaView,
  StatusBar,
  Dimensions,
  ImageBackground,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {AllTextMessages} from '../Data/AllTextMessages';
import {RadioButton} from 'react-native-paper';
import CircleCheckBox from 'react-native-circle-checkbox';
import LinearGradient from 'react-native-linear-gradient';

const screen = Dimensions.get('screen');

const Separator = () => <View style={styles.itemSeparator} />;

const ListItem = ({item, selected, onPress, onLongPress}) => (
  <View>
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.listItem}>
      <View
        style={{
          width: 370,
          marginLeft: 30,
          height: 47,
          flexDirection: 'row',
          marginTop: 15,
          marginBottom: 10,
          alignItems: 'center',
        }}>
        <View style={{height: 39, width: 39}}>
          <Image
            style={{height: 39, width: 39, borderRadius: 200}}
            source={item.img}
          />
        </View>
        <View style={{marginLeft: 15}}>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              fontSize: 14,
              color: '#153142',
            }}>
            {' '}
            {item.name}{' '}
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 11,
              color: '#153142',
              opacity: 0.4,
            }}>
            {' '}
            {item.msg_latest}{' '}
          </Text>
        </View>
      </View>

      {selected && <View style={styles.overlay} />}
    </TouchableOpacity>
  </View>
);

const HideChatScreen = ({navigation}) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [search, setSearch] = useState('');

  const updateSearch = search => {
    setSearch(search);
  };

  const handleOnPress = contact => {
    if (selectedItems.length) {
      return selectItems(contact);
    }
  
    console.log('pressed');
  };

  const getSelected = contact => selectedItems.includes(contact.id);

  const deSelectItems = () => setSelectedItems([]);

  const selectItems = item => {
    if (selectedItems.includes(item.id)) {
      const newListItems = selectedItems.filter(
        listItem => listItem !== item.id,
      );
      return setSelectedItems([...newListItems]);
    }
    setSelectedItems([...selectedItems, item.id]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ImageBackground
        source={require('../../assets/images/Vector.png')}
        style={styles.circle}
      />
      {/* <View style={{margin: 40, backgroundColor :'red'}}> */}
      <TouchableOpacity
        style={{marginTop: 55, marginLeft: 25}}
        onPress={() => navigation.navigate('Contacts')}>
        <Image
          style={{height: 14, width: 8}}
          source={require('../../assets/images/backBlack.png')}
        />
      </TouchableOpacity>

      <View
        style={{
          marginTop: 16,
          marginBottom: 28,
          alignSelf: 'center',
          flexDirection: 'row',
          borderWidth: 1,
          borderRadius: 10,
          backgroundColor: 'rgba(0, 159, 163, 0.05)',
          borderColor: '#009FA3',
          alignItems: 'center',
          width: '90%',
          paddingHorizontal: 19,
        }}>
        <TextInput
          placeholder="Search by name or contact"
          onChangeText={updateSearch}
          value={search}
          style={{
            width: '100%',
            height: 55,
            fontFamily: 'Poppins-Medium',
            fontSize: 12,
            color: '#153142',
          }}
        />
        <TouchableOpacity style={{height: 20, width: 20}}>
          <Image
            source={require('../../assets/images/magnify.png')}
            style={{width: 19, height: 19, right: 29}}
          />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Pressable onPress={deSelectItems} style={{flex: 1}}>
          <FlatList
            data={AllTextMessages}
            renderItem={({item}) => (
              <ListItem
                onPress={() => handleOnPress(item)}
                onLongPress={() => selectItems(item)}
                selected={getSelected(item)}
                item={item}
              />
            )}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <Separator />}
          />
        </Pressable>

        <LinearGradient
          colors={['#009FA3', '#06CFD4']}
          start={{x: 0.1, y: 0.2}}
          end={{x: 0.8, y: 1}}
          style={{
            backgroundColor: '#009FA3',
            width: 324,
            height: 62,
            borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
            // marginTop: 49,
            bottom: 50,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Contacts')}
            style={{
              width: 325,
              height: 55,
              borderRadius: 40,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: 'Poppins-SemiBold',
                fontSize: 18,
              }}>
              {' '}
              Hide{' '}
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

export default HideChatScreen;

const styles = StyleSheet.create({
  container: {
    height: screen.height,
    width: screen.width,
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
  },

  image: {
    marginTop: 54,
    width: 20,
    height: 14,
  },

  image2: {
    marginTop: 53,
    width: 16,
    height: 17,
  },

  mainView: {
    height: screen.height,
    width: screen.width,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  circle: {
    width: 279,
    height: 350,
    resizeMode: 'contain',
    position: 'absolute',
    top: 0,
    left: 0,
    // backgroundColor: '#009FA3',
    // opacity: 0.03,
  },

  text: {
    fontSize: 32,
    color: '#009FA3',
    fontFamily: 'Poppins-SemiBold',
  },

  text2: {
    fontSize: 12,
    color: '#A8BAC4',
    fontFamily: 'Poppins-Regular',
  },

  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 26,
  },

  listItem: {
    marginBottom: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255,0,0,0.5)',
  },
  itemSeparator: {
    marginHorizontal: 23,
    height: 1,
    backgroundColor: '#A8BAC4',
  },
});
