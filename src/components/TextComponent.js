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
} from 'react-native';
import * as React from 'react';
import {useState} from 'react';
import {ChatData} from '../Data/ChatData';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const screen = Dimensions.get('screen');
const Separator = () => <View style={styles.itemSeparator} />;

const TextComponent = ({navigation}) => {
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
          style={{
            backgroundColor: '#009FA3',
            justifyContent: 'center',
            alignItems: 'center',
            width: 91,
          }}>
          <Text
            style={{
              color: '#F6F7F9',
              fontFamily: 'Poppins-Medium',
              fontSize: 12,
            }}>
            Unhide
          </Text>
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
            width: 370,
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
                fontSize: 11,
                color: '#153142',
                opacity: 0.4,
              }}>
              {' '}
              {item.msg_latest}{' '}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
            }}>
            <Text
              style={{
                color: '#A8BAC4',
                fontSize: 10,
                fontFamily: 'Roboto-Regular',
              }}>
              {' '}
              {item.time}
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
        data={ChatData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <Separator />}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('HideChatScreen')}
        style={{
          position: 'absolute',
          alignSelf: 'flex-end',
          bottom: 30,
          right: 30,
        }}>
        <ImageBackground
          style={{height: 64, width: 64}}
          source={require('../../assets/images/AddChat.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TextComponent;

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
