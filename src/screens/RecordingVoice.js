import React, {useState} from 'react';
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
  Modal,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const screen = Dimensions.get('screen');

const RecordingVoice = ({navigation}) => {
  const onPress = () => navigation.navigate('RecordVoice');
  const [isShow, setShow] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
         <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ImageBackground
        source={require('../../assets/images/Vector.png')}
        style={styles.circle}
      />

      <View
        style={{
          flexDirection: 'row',
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
            width: screen.width,
          }}>
          <Text
            style={{
              // marginTop: 55,
              fontFamily: 'Poppins-SemiBold',
              fontSize: 18,
              color: '#000000',
              top: 55,
            }}>
            Recording Voice
          </Text>
        </View>
      </View>

      <Modal animationType={'fade'} visible={isShow} transparent={true}>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor:'rgba(0,0,0,0.5)'}}>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0.5)"  />
          <View style={styles.modal}>
            <TouchableOpacity
              styles={{height: 10, width: 40}}
              onPress={() => setShow(!isShow)}>
              <Image
                style={{height: 16, width: 16, top: 18, marginLeft: 260}}
                source={require('../../assets/images/Close.png')}
              />
            </TouchableOpacity>
            <Image
              source={require('../../assets/images/oops.png')}
              style={styles.image}
            />
            <Text style={styles.text}> Oops! </Text>
            <Text style={styles.text2}>
              Insufficient memory to save this recording
            </Text>
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
                marginTop: 34,
                // marginTop: 118,
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                style={{
                  height: 62,
                  width: 237,
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
                  Okay
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </Modal>

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
          00:05:36
        </Text>
        <View
          style={{
            justifyContent: 'space-between',
            flex: 1,
            marginVertical: 50,
          }}>
          <Image
            source={require('../../assets/images/fooo2.png')}
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
              onPress={() => setShow(true)}
              style={{
                height: 60,
                width: 237,
                borderRadius: 40,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../assets/images/stopButtonWhite.png')}
                style={{height: 41, width: 41, left: -90}}
              />
              <Text
                style={{
                  color: '#FFFFFF',
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 18,
                  marginLeft: -41,
                }}>
                {' '}
                Finish{' '}
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RecordingVoice;

const styles = StyleSheet.create({
  container: {
    height: screen.height,
    width: screen.width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: 67,
    width: 210,
    height: 121,
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

  modal: {
    width: 320,
    height: 405,
    backgroundColor: '#FFFFFF',
    // justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    // borderWidth: 1,
  },

  text: {
    fontSize: 32,
    color: '#009FA3',
    fontFamily: 'Poppins-SemiBold',
  },
  text2: {
    fontSize: 12,
    color: '#A8BAC4',
    fontFamily: 'Poppins-Regular',
  },
});
