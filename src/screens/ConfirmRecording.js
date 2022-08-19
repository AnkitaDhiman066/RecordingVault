import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ConfirmRecording = ({navigation}) => {
  return (
    <View>
      <ImageBackground
        source={require('../../assets/images/BackGround2.png')}
        resizeMode="cover"
        style={{
          height: '100%',
          width: '100%',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('ConfirmPhrase')}>
          <Image
            source={require('../../assets/images/backButton.png')}
            style={{
              height: 14,
              width: 8,
              marginVertical: 45,
              marginLeft: 25,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            justifyContent: 'space-between',
            alignSelf: 'center',
            alignItems: 'center',
            height: '80%',
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: 'Poppins-SemiBold',
                fontSize: 26,
                alignSelf: 'center',
              }}>
              Recording
            </Text>
            <Text
              style={{
                color: '#ECECEC',
                fontFamily: 'Poppins-Regular',
                width: 240,
                fontSize: 12,
                textAlign: 'center',
              }}>
              keep speaking...
            </Text>
          </View>
          <Image
            source={require('../../assets/images/Mic.png')}
            style={{
              height: 155,
              width: 155,
              marginTop: 20,
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              justifyContent: 'space-between',
              alignSelf: 'center',
              alignItems: 'center',
              height: 200,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                textAlign: 'center',
                color: '#FFFFFF',
                fontSize: 18,
              }}>
              {' '}
              Listening...{' '}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Successful')}
              style={{
                height: 60,
                width: 237,
                borderRadius: 40,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
              }}>
              <Text
                style={{
                  color: '#25B0B4',
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 18,
                }}>
                {' '}
                Finish{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ConfirmRecording;

const styles = StyleSheet.create({});
