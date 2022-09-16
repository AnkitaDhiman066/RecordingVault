import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Animated,
} from 'react-native';
import * as React from 'react';
import {useState} from 'react';
import {Data} from '../Data/Data';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const screen = Dimensions.get('screen');
const Separator = () => <View style={styles.itemSeparator} />;

const ContactComponent = ({navigation}) => {
  const [search, setSearch] = useState('');

  const updateSearch = search => {
    setSearch(search);
  };

  const RightActions = ({progress, dragX}) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    return (
      <View style={styles.rightAction}>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditContact')}
          style={{
            backgroundColor: '#009FA3',
            justifyContent: 'center',
            alignItems: 'center',
            width: 60,
          }}>
          <Animated.Text
            style={{
              color: '#F6F7F9',
              fontFamily: 'Poppins-Medium',
              fontSize: 12,
              transform: [{scale}],
            }}>
            Edit
          </Animated.Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#C60404',
            justifyContent: 'center',
            alignItems: 'center',
            width: 60,
          }}>
          <Animated.Text
            style={{
              color: '#F6F7F9',
              fontFamily: 'Poppins-Medium',
              fontSize: 12,
              transform: [{scale}],
            }}>
            Delete
          </Animated.Text>
        </TouchableOpacity>
      </View>
    );
  };

  let row = [];
  let prevOpenedRow;

  const renderItem = ({item, index}) => {
    const closeRow = index => {
      console.log('closerow');
      if (prevOpenedRow && prevOpenedRow !== row[index]) {
        prevOpenedRow.close();
      }
      prevOpenedRow = row[index];
    };
    return (
      <Swipeable
        renderRightActions={(progress, dragX) => (
          <RightActions progress={progress} dragX={dragX} />
        )}
        overshootRight={false}
        onSwipeableOpen={() => closeRow(index)}
        ref={ref => (row[index] = ref)}>
        <View
          style={{
            width: 200,
            marginLeft: 30,
            height: 47,
            flexDirection: 'row',
            marginTop: 15,
            marginBottom: 10,
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
                fontSize: 12,
                color: '#153142',
                opacity: 0.4,
              }}>
              {item.ph_no}
            </Text>
          </View>
        </View>
      </Swipeable>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          marginTop: 24,
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

      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <Separator />}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('AddContact')}
        style={{
          position: 'absolute',
          alignSelf: 'flex-end',
          bottom: 30,
          right: 30,
        }}>
        <ImageBackground
          style={{height: 64, width: 64}}
          source={require('../../assets/images/AddContact.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ContactComponent;

const styles = StyleSheet.create({
  itemSeparator: {
    marginHorizontal: 23,
    height: 1,
    backgroundColor: '#A8BAC4',
  },
  rightAction: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

// import {
//   TextInput,
//   StyleSheet,
//   Text,
//   View,
//   Dimensions,
//   Image,
//   TouchableOpacity,
//   FlatList,
//   ImageBackground,
//   Animated,
// } from 'react-native';
// import * as React from 'react';
// import {useState} from 'react';
// import {Data} from '../Data/Data';
// import Swipeable from 'react-native-gesture-handler/Swipeable';

// const screen = Dimensions.get('screen');
// const Separator = () => <View style={styles.itemSeparator} />;

// const ContactComponent = ({navigation}) => {
//   const [search, setSearch] = useState('');

//   const updateSearch = search => {
//     setSearch(search);
//   };

//   const rightSwipeActions = (progress, dragX) => {

//     return (
//       <View
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'center',
//           // marginRight: 44,
//           width: 162,
//           // alignItems:'flex-end',
//           // backgroundColor:'pink'
//         }}>
//         <TouchableOpacity
//           onPress={() => navigation.navigate('EditContact')}
//           style={{
//             backgroundColor: '#009FA3',
//             justifyContent: 'center',
//             alignItems: 'center',
//             width: 80,
//           }}>
//           <Text
//             style={{
//               color: '#F6F7F9',
//               fontFamily: 'Poppins-Medium',
//               fontSize: 12,
//             }}>
//             Edit
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={{
//             backgroundColor: '#C60404',
//             justifyContent: 'center',
//             alignItems: 'center',
//             width: 80,
//           }}>
//           <Text
//             style={{
//               color: '#F6F7F9',
//               fontFamily: 'Poppins-Medium',
//               fontSize: 12,
//               // transform: [{ scale }]
//             }}>
//             Delete
//           </Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   let row = [];
//   let prevOpenedRow;

//   const renderItem = ({item, index}) => {
//     const closeRow = index => {
//       console.log('closerow');
//       if (prevOpenedRow && prevOpenedRow !== row[index]) {
//         prevOpenedRow.close();
//       }
//       prevOpenedRow = row[index];
//     };
//     return (
//       <Swipeable
//         renderRightActions={rightSwipeActions}
//         overshootRight={false}
//         onSwipeableOpen={() => closeRow(index)}
//         ref={ref => (row[index] = ref)}>
//         <View
//           style={{
//             width: 200,
//             // backgroundColor:'yellow',
//             marginLeft: 25,
//             height: 47,
//             flexDirection: 'row',
//             marginTop: 15,
//             marginBottom: 10,
//           }}>
//           <View style={{height: 39, width: 39}}>
//             <Image
//               style={{height: 39, width: 39, borderRadius: 200}}
//               source={item.img}
//             />

//           </View>
//           <View style={{marginLeft: 15}}>
//             <Text
//               style={{
//                 fontFamily: 'Poppins-SemiBold',
//                 fontSize: 14,
//                 color: '#153142',
//               }}>
//               {' '}
//               {item.name}{' '}
//             </Text>
//             <Text
//               style={{
//                 fontFamily: 'Poppins-Regular',
//                 fontSize: 12,
//                 color: '#153142',
//                 opacity: 0.4,
//               }}>
//               {item.ph_no}
//             </Text>
//           </View>
//         </View>
//       </Swipeable>
//     );
//   };

//   return (
//     <View style={{flex: 1}}>
//       <View
//         style={{
//           marginTop: 24,
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

//       <FlatList
//         data={Data}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//         ItemSeparatorComponent={() => <Separator />}
//       />

//       <TouchableOpacity
//         onPress={() => navigation.navigate('AddContact')}
//         style={{
//           position: 'absolute',
//           alignSelf: 'flex-end',
//           bottom: 30,
//           right: 30,
//           // marginBottom: 40,
//           // marginRight: 40,
//         }}>
//         <ImageBackground
//           style={{height: 64, width: 64}}
//           source={require('../../assets/images/AddContact.png')}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default ContactComponent;

// const styles = StyleSheet.create({
//   itemSeparator: {
//     marginHorizontal: 23,
//     height: 1,
//     backgroundColor: '#A8BAC4',
//   },
// });