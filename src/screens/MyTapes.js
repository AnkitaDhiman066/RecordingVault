import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import Logo from '../../assets/svg/TapesNotFound.svg';
const screen = Dimensions.get('screen');
const MyTapes = ({navigation}) => {
  const onPress = () => navigation.navigate('Home');
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />

      <View
        style={{
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={onPress}
          style={{
            height: 20,
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
            flex:1
          }}>
          <Text
            style={{
              // marginTop: 55,
              fontFamily: 'Poppins-SemiBold',
              fontSize: 18,
              color: '#000000',
              top: 55,
            }}>
            My Tapes
          </Text>
        </View>
      </View>
      <View style={styles.mainView}>
        <Logo width={207} height={195} />
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: 22,
            color: '#009FA3',
            marginTop: 68,
          }}>
          Did not find any tape
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: 11,
            color: '#A8BAC4',
          }}>
          Go back and record new tape
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default MyTapes;

const styles = StyleSheet.create({
  mainView: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    height: screen.height,
    width: screen.width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
