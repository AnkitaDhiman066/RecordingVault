import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import React from 'react';

const SetPhrase = ({navigation}) => {
  return (
    <SafeAreaView>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
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
            height: '95%',
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
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
              onPress={() => {
                navigation.navigate('Recording');
              }}
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
    </SafeAreaView>
  );
};

export default SetPhrase;

const styles = StyleSheet.create({});
