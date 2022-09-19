import {
  Image,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  // Modal,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';

const screen = Dimensions.get('screen');

const UploadComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{
          alignSelf: 'center',
          marginTop: 33,
          width: 350,
          height: 676,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        source={require('../../assets/images/Bg.png')}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image
            style={{width: 163, height: 144}}
            source={require('../../assets/images/Upload.png')}
          />

          <Text
            style={{
              marginTop: 21,
              fontFamily: 'Gilroy-Bold',
              fontSize: 18,
              color: '#009FA3',
              width: 165,
              textAlign: 'center',
            }}>
            Tap to upload your media files
          </Text>
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onBackdropPress={() => setModalVisible(false)}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity style={{height: 62, width: 159}}>
                <ImageBackground
                  source={require('../../assets/images/ButtonGradient.png')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 62,
                    width: 159,
                    flexDirection: 'row',
                  }}>
                  <Image
                    source={require('../../assets/images/gallery.png')}
                    style={{height: 24, width: 25}}
                  />
                  <Text
                    style={{
                      fontFamily: 'Poppins-SemiBold',
                      fontSize: 16,
                      color: '#FFFFFF',
                      marginLeft: 7,
                    }}>
                    Gallery
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={{height: 62, width: 159}}>
                <ImageBackground
                  source={require('../../assets/images/ButtonGradient.png')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 62,
                    width: 159,
                    flexDirection: 'row',
                  }}>
                  <Image
                    style={{height: 24, width: 25}}
                    source={require('../../assets/images/camera.png')}
                  />
                  <Text
                    style={{
                      fontFamily: 'Poppins-SemiBold',
                      fontSize: 16,
                      color: '#FFFFFF',
                      marginLeft: 7,
                    }}>
                    Camera
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
    // </View>
  );
};

export default UploadComponent;

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  modalView: {
    width: screen.width,
    justifyContent: 'space-between',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 132,
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 35,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
