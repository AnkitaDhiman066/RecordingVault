import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const SetPhrase = ({navigation}) => {
  return (
    <View>
      <ImageBackground
        source={require('../../assets/images/BackGround2.png')}
        resizeMode="cover"
        style={{
          height: '100%',
          width: '100%',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Image
            source={require('../../assets/images/backButton.png')}
            style={{
              height: 14,
              width: 8,
              marginLeft: 25,
              marginTop: 55,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            justifyContent: 'space-between',
            alignSelf: 'center',
            alignItems: 'center',
            height: '100%',
            marginTop: 34,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: 'Poppins-SemiBold',
                fontSize: 26,
                alignSelf: 'center',
              }}>
              Set Access Phrase
            </Text>
            <Text
              style={{
                color: '#ECECEC',
                fontFamily: 'Poppins-Regular',
                width: 240,
                fontSize: 12,
                textAlign: 'center',
                // marginTop: 9,
              }}>
              Click on start and start recording your access phrase
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
            <TouchableOpacity
              onPress={() => navigation.navigate('Recording')}
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
                Start{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SetPhrase;

const styles = StyleSheet.create({});
