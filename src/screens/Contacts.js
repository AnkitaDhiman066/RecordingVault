import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const screen = Dimensions.get('screen');

const Contacts = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle = "dark-content" />
      <ImageBackground
        source={require('../../assets/images/Vector.png')}
        style={styles.circle}
      />
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            style={styles.image}
            source={require('../../assets/images/headerBlack.png')}
          />
        </TouchableOpacity>
        <Text style={{top: 48}}> LOGO HERE </Text>

        <TouchableOpacity>
          <Image
            style={styles.image2}
            source={require('../../assets/images/notification.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.menu}>


      </View>
    </SafeAreaView>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  container: {
    height: screen.height,
    width: screen.width,
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
  },

  image: {
    marginTop: 54,
    width: 20,
    height: 14,
  },

  image2: {
    marginTop: 53,
    width: 16,
    height: 17,
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

  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 26,
  },
});
