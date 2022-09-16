import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  Image,
  StatusBar,
  SafeAreaView
} from 'react-native';
import React from 'react';
import Logo from '../../assets/svg/success.svg';

const Successful = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainView}>
       <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
        // hidden={true}
      />
      <ImageBackground
        source={require('../../assets/images/BackGround.png')}
        resizeMode="cover"
        style={{
          // height: '100%',
          width: '100%',
          flex: 1,
          // justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Logo width={406} height={386} style={{top: 143}} />

        <View style={{flex: 1, top: 130}}>
          <Text
            style={{
              color: '#FFFFFF',
              fontFamily: 'Poppins-SemiBold',
              fontSize: 32,
              alignSelf: 'center',
            }}>
            {' '}
            Successful!{' '}
          </Text>
          <Text
            style={{
              color: '#ECECEC',
              fontFamily: 'Poppins-Regular',
              width: 250,
              fontSize: 12,
              textAlign: 'center',
            }}>
            {' '}
            Your access phrase recorded successfully.{' '}
          </Text>
        </View>

        <TouchableOpacity
          style={{
            height: 60,
            width: 237,
            borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            bottom: 70,
          }}
          onPress={() => navigation.navigate('Home')}>
          <Text
            style={{
              color: '#25B0B4',
              fontFamily: 'Poppins-SemiBold',
              fontSize: 18,
            }}>
            Proceed
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Successful;

const styles = StyleSheet.create({
  mainView: {
    height: '100%',
    alignItems: 'center',
  },

  textStyle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 43,
    color: '#4F4F4F',
  },
  textEmail: {
    fontFamily: 'ArialRegular',
    fontSize: 14,
    marginLeft: 43,
    alignSelf: 'flex-start',
    marginTop: 29,
    color: '#4F4F4F',
    height: 30,
    width: 103,
  },
});
