import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const screen = Dimensions.get('screen');

const RecordVoice = ({navigation}) => {
  const onPress = () => navigation.navigate('Home');
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        source={require('../../assets/images/Vector.png')}
        style={styles.circle}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}>
        <TouchableOpacity
          onPress={onPress}
          style={{
            // alignItems:'center',
            // marginLeft: 25,
            height: 40,
            width: 10,
            top: 60,
            left: 25,
          }}>
          <Image
            source={require('../../assets/images/backBlack.png')}
            style={{height: 14, width: 8}}
          />
        </TouchableOpacity>

        <View
          style={{
            justifyContent: 'center',
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
              top: 55,
            }}>
            Record Voice
          </Text>
        </View>
      </View>
      <View style={styles.mainView}>
        <View
          style={{
            backgroundColor: '#009FA3',
            width: 152,
            height: 152,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 200,
            marginTop: 217,
          }}>
          <Image
            source={require('../../assets/images/MicWhite.png')}
            style={{height: 55, width: 37}}
          />
        </View>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: 22,
            marginTop: 88,
            color: '#000000',
          }}>
          00:00:00
        </Text>
        <View
          style={{
            justifyContent: 'space-between',
            flex: 1,
            marginVertical: 50,
          }}>
          <Image
            source={require('../../assets/images/fooo.png')}
            style={{
              marginTop: 66,
              width: 274,
              height: 37,
            }}
          />
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
              // marginTop: 118,
              // marginBottom: 50,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('RecordingVoice')}
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
                Start
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RecordVoice;

const styles = StyleSheet.create({
  container: {
    height: screen.height,
    width: screen.width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainView: {
    height: screen.height,
    width: screen.width,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  circle: {
    width: 279,
    height: 350,
    resizeMode: 'contain',
    position: 'absolute',
    top: 0,
    left: 0,
    // backgroundColor: '#009FA3',
    // opacity: 0.03,
  },
});
