import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  ImageBackground,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';

import ContactComponent from '../components/ContactComponent';
import PhotoAlbumComponent from '../components/PhotoAlbumComponent';
import TextComponent from '../components/TextComponent';
import UploadComponent from '../components/UploadComponent';
import VideosComponent from '../components/VideosComponent';

const ContactsRoute = navigation => (
  <ContactComponent navigation={navigation} />
);

const UploadRoute = navigation => (
<UploadComponent navigation={navigation} />
);

const PhotoRoute = navigation => (
  <PhotoAlbumComponent navigation={navigation} />
);

const VideoRoute = navigation => (
<VideosComponent navigation={navigation} />
);

const TextMsgRoute = navigation => (
   <TextComponent navigation={navigation} />
);

const screen = Dimensions.get('screen');

const Contacts = ({navigation}) => {
  const renderScene = SceneMap({
    contacts: () => ContactsRoute(navigation),
    upload: () => UploadRoute(navigation),
    photoAlbums: () => PhotoRoute(navigation),
    videos: () => VideoRoute(navigation),
    textMsg: () => TextMsgRoute(navigation),
  });
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {key: 'contacts', title: 'Contacts'},
    {key: 'upload', title: 'Upload'},
    {key: 'photoAlbums', title: 'Photo Album'},
    {key: 'videos', title: 'Videos'},
    {key: 'textMsg', title: "Text Msg's"},
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      activeColor={'#009FA3'}
      inactiveColor={'rgba(0, 0, 0, 0.4)'}
      indicatorStyle={{backgroundColor: '#009FA3', height: 2}}
      // scrollEnabled={true}
      labelStyle={{
        fontSize: 12,
        fontFamily: 'Poppins-Bold',
        // width: 50,
        // height: 18,
      }}
      style={{
        marginTop: 25,
        backgroundColor: 'transparent',
      }}
      tabStyle={{
        width: 'auto',
      }}
    />
  );

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
      <View style={styles.header}>
        <TouchableOpacity
         onPress={ () => navigation.navigate('ChangeAccessPhrase') }
        >
          <Image
            style={styles.image}
            source={require('../../assets/images/headerBlack.png')}
          />
        </TouchableOpacity>
        <Text style={{top: 48}}> LOGO HERE </Text>

        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Image
            style={styles.image2}
            source={require('../../assets/images/notification.png')}
          />
        </TouchableOpacity>
      </View>

      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{width: screen.width}}
      />

      {/* <NavigationContainer> */}
      {/* <MyDrawer /> */}
      {/* </NavigationContainer> */}
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

// import * as React from 'react';
// import { View, useWindowDimensions, Text} from 'react-native';
// import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

// const FirstRoute = () => (
// 	<View style={{ flex: 1, backgroundColor: 'grey'}}>
//   	<Text>Tab One</Text>
// 	</View>
// );
// const SecondRoute = () => (
// 	<View style={{ flex: 1, backgroundColor: 'darkgrey'}} >
//   	<Text>Tab Two</Text>
// 	</View>
// );

// export default function TabViewExample() {
//   const layout = useWindowDimensions();

//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
// 	{ key: 'first', title: 'First' },
// 	{ key: 'second', title: 'Second' },
//   ]);

//   const renderScene = SceneMap({
// 	first: FirstRoute,
// 	second: SecondRoute,
//   });

//   const renderTabBar = props => (
//   	<TabBar
//      	 {...props}
//       	activeColor={'white'}
//       	inactiveColor={'black'}
//           style={{marginTop:25,backgroundColor:'red'}}
//   	/>
//   );

//   return (
//   	<TabView
//       	navigationState={{ index, routes }}
//       	renderScene={renderScene}
//       	renderTabBar={renderTabBar}
//       	onIndexChange={setIndex}
//       	initialLayout={{ width: layout.width }}
//   	/>
//   );
// }
