import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image, SafeAreaView, StatusBar} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Register');
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor='transparent' />
      <Image
        source={require('../../assets/images/SplashScreenImage.png')}
        style={{flex: 1, width: '100%'}}
      />
      </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
});
