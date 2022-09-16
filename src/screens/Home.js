import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Register from './Register';

const screen = Dimensions.get('screen');

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ImageBackground
        source={require('../../assets/images/BackGround.png')}
        style={{
          height: 201,
          width: screen.width,
          justifyContent: 'flex-end',
        }}>
        <Text style={styles.textStyle}>
          Select Your
          <Text style={styles.textStyle2}> Option</Text>
        </Text>
        <ImageBackground
          source={require('../../assets/images/Circle.png')}
          style={styles.circle}></ImageBackground>
      </ImageBackground>
      <View
        style={{
          marginTop: -38,
          backgroundColor: '#F6F7F9',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          flex: 1,
          zIndex: 2,
          // justifyContent:'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('MyTapes')}>
          <View
            style={{
              marginTop: 36,
              width: 297,
              height: 120,
              borderRadius: 15,
              backgroundColor: '#FFFFFF',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/images/Mytapes.png')}
              style={{height: 88, width: 88, marginLeft: -29}}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                flex: 1,
                marginRight: 25,
              }}>
              <Text
                style={{
                  color: '#000000',
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 18,
                }}>
                My Tapes
              </Text>
              <Image
                style={{height: 14, width: 23}}
                source={require('../../assets/images/Next.png')}
              />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('RecordVoice')}>
          <View
            style={{
              marginTop: 36,
              width: 297,
              height: 120,
              borderRadius: 15,
              backgroundColor: '#FFFFFF',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/images/Record.png')}
              style={{height: 88, width: 88, marginLeft: -29}}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                flex: 1,
                marginRight: 25,
              }}>
              <Text
                style={{
                  color: '#000000',
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 18,
                }}>
                Record Now
              </Text>
              <Image
                style={{height: 14, width: 23}}
                source={require('../../assets/images/Next.png')}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: screen.height,
    width: screen.width,
  },
  circle: {
    width: 253,
    height: 253,
    resizeMode: 'contain',
    position: 'absolute',
    zIndex: 1,
    top: -12,
    right: -34,
    borderRadius: 200,
    backgroundColor: '#000000',
    opacity: 0.09,
  },
  textStyle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    // marginTop: 21,
    marginLeft: 24,
    lineHeight: 32,
    width: 125,
    height: 60,
    color: '#FFFFFF',
    marginBottom: 52,
  },
  textStyle2: {
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    marginLeft: 24,
    lineHeight: 32,
    color: '#FFFFFF',
  },
});
