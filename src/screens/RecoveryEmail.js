import {
  SafeAreaView,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const screen = Dimensions.get('screen');

const RecoveryEmail = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
        // hidden={true}
      />

      <View
        style={{
          flexDirection: 'row',
          marginTop: 48,
          //   justifyContent: 'flex-start',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Contacts')}
          style={{
            // alignItems:'center',
            // marginLeft: 25,
            height: 40,
            width: 10,
            // top: 60,
            left: 25,
          }}>
          <Image
            source={require('../../assets/images/backBlack.png')}
            style={{height: 14, width: 8}}
          />
        </TouchableOpacity>

        <View
          style={{
            // justifyContent: 'center',
            alignItems: 'center',
            // width: screen.width,
            flex: 1,
          }}>
          <Text
            style={{
              // marginTop: 55,
              fontFamily: 'Poppins-SemiBold',
              fontSize: 18,
              color: '#000000',
              //   top: 55,
            }}>
            Recovery Email
          </Text>
        </View>
      </View>

      <View style={styles.mainView}>
        <View>
          <Text
            style={{
              marginTop: 18,
              fontFamily: 'ArialRegular',
              fontSize: 14,
              color: '#4F4F4F',
            }}>
            Email{' '}
          </Text>
          <TextInput
            placeholder="Email"
            style={{
              marginTop: 10,
              borderWidth: 1,
              borderRadius: 10,
              // width: 325,
              height: 55,
              borderColor: '#009FA3',
              fontFamily: 'Gilroy-Bold',
              fontSize: 16,
              color: '#4F4F4F',
            }}
          />
        </View>
        <LinearGradient
          colors={['#009FA3', '#06CFD4']}
          start={{x: 0.1, y: 0.2}}
          end={{x: 0.8, y: 1}}
          style={{
            backgroundColor: '#009FA3',
            // width: 324,
            height: 62,
            borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 49,
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
              Save{' '}
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

export default RecoveryEmail;

const styles = StyleSheet.create({
  container: {
    height: screen.height,
    width: screen.width,
  },
  mainView: {
    marginHorizontal: 25,
    flex: 1,
    justifyContent: 'space-between',
    // alignItems: 'center',
    // justifyContent: 'space-between',
  },
});
