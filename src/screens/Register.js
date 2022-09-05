import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const screen = Dimensions.get('screen');

const Register = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('../../assets/images/BackGround.png')}
        resizeMode="cover"
        style={{
          height: screen.height,
          width: screen.width,
          flex: 1,
          justifyContent: 'center',
          // alignItems: 'center',
        }}>
        {/* <View style={styles.circle}></View> */}
        <Image
          source={require('../../assets/images/Circle.png')}
          style={styles.circle}
        />

        <View style={styles.centerView}>
          <Text style={styles.textStyle}>Account Setup?</Text>
          <Text style={styles.textEmail}>Enter your email</Text>
          <TextInput style={styles.textInput} />
          <LinearGradient
            colors={['#009FA3', '#06CFD4']}
            start={{x: 0.1, y: 0.2}}
            end={{x: 0.8, y: 1}}
            style={{
              backgroundColor: '#009FA3',
              height: 65,
              width: 270,
              borderRadius: 40,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 43,
              marginBottom: 50,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SetPhrase')}
              style={{
                height: 60,
                width: 239,
                borderRadius: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 20,
                }}>
                Submit
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    // height: screen.height,
    // width: screen.width,
    // justifyContent:'center'
  },
  centerView: {
    backgroundColor: '#F6F7F9',
    // height: 374,
    // width: 325,
    margin: 25,
    borderRadius: 30,
    alignItems: 'center',
    // zIndex: 2,
    // position: 'relative',
  },
  textStyle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 53,
    color: '#4F4F4F',
  },
  textEmail: {
    fontFamily: 'ArialRegular',
    fontSize: 16,
    marginLeft: 43,
    alignSelf: 'flex-start',
    marginTop: 43,
    marginBottom: -29,
    color: '#4F4F4F',
    height: 35,
    // width: 103,
  },
  textInput: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 20,
    paddingLeft: 21,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: '#009FA30D',
    color: '#4F4F4F',
    borderWidth: 1,
    width: 270,
    height: 55,
    borderRadius: 16,
    borderColor: '#009FA3',
  },
  circle: {
    // backgroundColor: '#06CFD4',
    // borderRadius: 200,
    width: 253,
    height: 253,
    resizeMode: 'contain',
    position: 'absolute',
    zIndex: 1,
    top: -12,
    right: -34,
    borderRadius: 200,
    backgroundColor: '#FFFFFF',
    opacity: 0.09,
  },
});
