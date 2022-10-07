import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const screen = Dimensions.get('screen');

const EditContact = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#F6F7F9', flex: 1, alignItems: 'center'}}>
    
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Contacts')}
          style={{
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
              fontFamily: 'Poppins-SemiBold',
              fontSize: 18,
              color: '#000000',
              top: 55,
            }}>
            Edit Contact
          </Text>
        </View>
      </View>

      <View style={{marginTop: 110}}>
        <ImageBackground
          style={{
            height: 126,
            width: 126,
            borderRadius: 200,
            borderWidth: 1.8,
            borderColor: '#009FA3',
          }}
          source={require('../../assets/images/Data/Lily.png')}
        />
        <View
          style={{
            backgroundColor: '#EAF3F5',
            height: 29,
            width: 29,
            borderRadius: 200,
            position: 'absolute',
            bottom: 1,
            right: 5,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#009FA3',
            borderWidth: 1.3,
            borderRadius: 200,
          }}>
          <Image
            style={{height: 10, width: 10}}
            source={require('../../assets/images/Edit.png')}
          />
        </View>
      </View>

      <View style={{flex: 1}}>
        <Text
          style={{
            marginTop: 26,
            fontFamily: 'ArialRegular',
            fontSize: 14,
            color: '#4F4F4F',
          }}>
          First Name{' '}
        </Text>
        <TextInput
          style={{
            marginTop: 10,
            borderWidth: 1,
            borderRadius: 10,
            width: 325,
            height: 55,
            borderColor: '#009FA3',
            fontFamily: 'Gilroy-Bold',
            fontSize: 16,
            color: '#4F4F4F',
          }}
        />

        <Text
          style={{
            marginTop: 26,
            fontFamily: 'ArialRegular',
            fontSize: 14,
            color: '#4F4F4F',
          }}>
          Last Name{' '}
        </Text>
        <TextInput
          style={{
            marginTop: 10,
            borderWidth: 1,
            borderRadius: 10,
            width: 325,
            height: 55,
            borderColor: '#009FA3',
            fontFamily: 'Gilroy-Bold',
            fontSize: 16,
            color: '#4F4F4F',
          }}
        />

        <Text
          style={{
            marginTop: 26,
            fontFamily: 'ArialRegular',
            fontSize: 14,
            color: '#4F4F4F',
          }}>
          Company{' '}
        </Text>
        <TextInput
          style={{
            marginTop: 10,
            borderWidth: 1,
            borderRadius: 10,
            width: 325,
            height: 55,
            borderColor: '#009FA3',
            fontFamily: 'Gilroy-Bold',
            fontSize: 16,
            color: '#4F4F4F',
          }}
        />

        <Text
          style={{
            marginTop: 26,
            fontFamily: 'ArialRegular',
            fontSize: 14,
            color: '#4F4F4F',
          }}>
          Phone Number{' '}
        </Text>
        <TextInput
          style={{
            marginTop: 10,
            borderWidth: 1,
            borderRadius: 10,
            width: 325,
            height: 55,
            borderColor: '#009FA3',
            fontFamily: 'Gilroy-Bold',
            fontSize: 16,
            color: '#4F4F4F',
          }}
        />
        <LinearGradient
          colors={['#009FA3', '#06CFD4']}
          start={{x: 0.1, y: 0.2}}
          end={{x: 0.8, y: 1}}
          style={{
            backgroundColor: '#009FA3',
            width: 324,
            height: 62,
            borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 49,
            // bottom: 50,
          }}>
          <TouchableOpacity
            // onPress={() => setShow(true)}
            style={{
              width: 325,
              height: 55,
              borderRadius: 40,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: 'Poppins-SemiBold',
                fontSize: 18,
              }}>
              {' '}
              Save{' '}
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

export default EditContact;

const styles = StyleSheet.create({});
