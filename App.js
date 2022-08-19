import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import Splash from './src/screens/Splash';
import Register from './src/screens/Register';
import SetPhrase from './src/screens/SetPhrase';
import ConfirmPhrase from './src/screens/ConfirmPhrase';
import Recording from './src/screens/Recording';
import ConfirmRecording from './src/screens/ConfirmRecording';
import Successful from './src/screens/Successful';
// import NewFile from './src/screens/NewFile';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Splash" component={Splash} />

          <Stack.Screen name="Register" component={Register} />

          <Stack.Screen name="SetPhrase" component={SetPhrase} />

          <Stack.Screen name="ConfirmPhrase" component={ConfirmPhrase} />

          <Stack.Screen name="Recording" component={Recording} />

          <Stack.Screen name="ConfirmRecording" component={ConfirmRecording} />

          <Stack.Screen name="Successful" component={Successful} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});

// import * as React from 'react';
// import {Text, StatusBar, Button, StyleSheet} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {SafeAreaProvider} from 'react-native-safe-area-context';
// import SafeAreaView from 'react-native-safe-area-view';

// function Screen1({navigation}) {
//   return (
//     <SafeAreaView style={[styles.container, {backgroundColor: "#6a51ae"}]}>
//       <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
//       <Text style={{color: '#fff'}}>Light Screen</Text>
//       <Button
//         title="Next screen"
//         onPress={() => navigation.navigate('Screen2')}
//         color="#fff"
//       />
//     </SafeAreaView>
//   );
// }

// function Screen2({navigation}) {
//   return (
//     <SafeAreaView style={[styles.container, {backgroundColor: "#ecf0f1"}]}>
//       <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
//       <Text>Dark Screen</Text>
//       <Button
//         title="Next screen"
//         onPress={() => navigation.navigate('Screen1')}
//       />
//     </SafeAreaView>
//   );
// }

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>
//         <Stack.Navigator screenOptions={{headerShown: false}}>
//           <Stack.Screen name="Screen1" component={Screen1} />
//           <Stack.Screen name="Screen2" component={Screen2} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
// });
