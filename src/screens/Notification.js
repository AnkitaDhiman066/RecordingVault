import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {DataNotificaion} from '../Data/DataNotification';

const screen = Dimensions.get('screen');
const renderItem = ({item}) => {
  return (
    <View
      style={styles.mainView}>
      <Text
        style={{
          textAlign: 'right',
          fontFamily: 'Poppins-Regular',
          fontSize: 10,
          color: 'rgba(15,31,42,0.4)',
        }}>
        {item.time}
      </Text>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'flex-start',
          flexDirection: 'row',
        }}>
        <Image
          style={{width: 39, height: 39, borderRadius: 200}}
          source={item.profilePic}
        />

        <Text
          style={{
            fontFamily: 'Poppins-Light',
            fontSize: 14,
            color: '#153142',
            marginLeft: 10,
          }}>
          You have {item.eventNo} {item.eventName} from {item.messagedBy}.
        </Text>
      </View>
    </View>
  );
};

const Separator = () => <View style={styles.itemSeparator} />;

const Notification = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, marginTop: 55}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 22,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Contacts')}>
          <Image
            style={{height: 14, width: 8}}
            source={require('../../assets/images/backBlack.png')}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            color: '#000000',
            fontFamily: 'Poppins-SemiBold',
          }}>
          {' '}
          Notifications{' '}
        </Text>

        <TouchableOpacity>
          <Text
            style={{
              fontSize: 12,
              color: 'rgba(0,0,0,0.4)',
              fontFamily: 'Poppins-Regular',
            }}>
            Clear All
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={DataNotificaion}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <Separator />}
      />
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  itemSeparator: {
    marginHorizontal: 23,
    height: 1,
    backgroundColor: '#A8BAC4',
  },
  mainView:{
    marginHorizontal: 22,
    marginVertical: 20,
  }
});
