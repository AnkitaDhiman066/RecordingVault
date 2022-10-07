import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PhotoAlbumComponent = ({navigation}) => {
  return (
    <View>
      <Button title="Click" />
    </View>
  );
};

export default PhotoAlbumComponent;

const styles = StyleSheet.create({});

// import {createAppContainer} from 'react-navigation';
// import {
//   createDrawerNavigator,
//   DrawerNavigatorItems,
// } from 'react-navigation-drawer';
// import {SafeAreaView, View} from 'react-native';
// import React from 'react';
// import {LogBox} from 'react-native';
// import HomePage from './Page/HomePage';
// import SettingsPage from './Page/SettingsPage';
// import NotificationPage from './Page/NotificationPage';
// import NewsPage from './Page/NewsPage';

// const RootStack = createDrawerNavigator(
//   {
//     HomePage: {screen: HomePage},
//     SettingsPage: {screen: SettingsPage},
//     NotificationPage: {screen: NotificationPage},
//     NewsPage: {screen: NewsPage},
//   },
//   {
//     contentComponent: props => <CustomDrawerComponent {...props} />,
//   },
// );

// const CustomDrawerComponent = props => (
//   <SafeAreaView>
//     <DrawerNavigatorItems {...props} />
//   </SafeAreaView>
// );
// const AppContainer = createAppContainer(RootStack);

// const PhotoAlbumComponent = () => {
//   LogBox.ignoreLogs(['EventEmitter.removeListener']);
//   return (
//     <View>
//       <AppContainer />
//     </View>
//   );
// };
// export default PhotoAlbumComponent;

// import 'react-native-gesture-handler';

// import * as React from 'react';
// import {View, TouchableOpacity, Image, Button} from 'react-native';

// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// // import {createDrawerNavigator} from '@react-navigation/drawer';

// import HomePage from './Page/HomePage';
// import NewsPage from './Page/NewsPage';
// import NotificationPage from './Page/NotificationPage';

// // Import Custom Sidebar
// import CustomSidebarMenu from './CustomSidebarMenu';

// const Stack = createStackNavigator();
// // const Drawer = createDrawerNavigator();

// const NavigationDrawerStructure = props => {
//   //Structure for the navigatin Drawer
//   const toggleDrawer = () => {
//     //Props to open/close the drawer
//     props.navigationProps.toggleDrawer();
//   };

//   return (
//     <View style={{flexDirection: 'row'}}>
//       <TouchableOpacity onPress={toggleDrawer}>
//         {/*Donute Button Image */}
//         <Image
//           source={{
//             uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
//           }}
//           style={{width: 25, height: 25, marginLeft: 5}}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };

// function firstScreenStack({navigation}) {
//   return (
//     <Stack.Navigator initialRouteName="FirstPage">
//       <Stack.Screen
//         name="HomePage"
//         component={HomePage}
//         options={{
//           title: 'HomePage', //Set Header Title
//           headerLeft: () => (
//             <NavigationDrawerStructure navigationProps={navigation} />
//           ),
//           headerStyle: {
//             backgroundColor: '#f4511e', //Set Header color
//           },
//           headerTintColor: '#fff', //Set Header text color
//           headerTitleStyle: {
//             fontWeight: 'bold', //Set Header text style
//           },
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// function secondScreenStack({navigation}) {
//   return (
//     <Stack.Navigator
//       initialRouteName="NewsPage"
//       screenOptions={{
//         headerLeft: () => (
//           <NavigationDrawerStructure navigationProps={navigation} />
//         ),
//         headerStyle: {
//           backgroundColor: '#f4511e',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//       }}>
//       <Stack.Screen
//         name="NewsPage"
//         component={NewsPage}
//         options={{
//           title: 'News Page', //Set Header Title
//         }}
//       />
//       <Stack.Screen
//         name="NotificationPage"
//         component={NotificationPage}
//         options={{
//           title: 'Notification Page', //Set Header Title
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// function PhotoAlbumComponent({navigation}) {
//   return (
// <NavigationContainer>
// <Drawer.Navigator
//   drawerContentOptions={{
//     activeTintColor: '#e91e63',
//     itemStyle: {marginVertical: 5},
//   }}
//   drawerContent={props => <CustomSidebarMenu {...props} />}>
//   <Drawer.Screen
//     name="FirstPage"
//     options={{drawerLabel: 'First page Option'}}
//     component={firstScreenStack}
//   />
//   <Drawer.Screen
//     name="SecondPage"
//     options={{drawerLabel: 'Second page Option'}}
//     component={secondScreenStack}
//   />
// </Drawer.Navigator>
// </NavigationContainer>

//     <Button title="click" onPress={() => navigation.openDrawer()} />
//   );
// }

// export default PhotoAlbumComponent;
