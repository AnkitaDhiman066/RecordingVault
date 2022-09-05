import {StatusBar, StyleSheet, Text, View} from 'react-native';
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
import Home from './src/screens/Home';
import RecordVoice from './src/screens/RecordVoice';
import RecordingVoice from './src/screens/RecordingVoice';
import MyTapes from './src/screens/MyTapes';
import Contacts from './src/screens/Contacts';
// import NewFile from './src/screens/NewFile';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
          }}>
          {/* setup screens */}

          <Stack.Screen name="Splash" component={Splash} />

          <Stack.Screen name="Register" component={Register} />

          <Stack.Screen name="SetPhrase" component={SetPhrase} />

          <Stack.Screen name="ConfirmPhrase" component={ConfirmPhrase} />

          <Stack.Screen name="Recording" component={Recording} />

          <Stack.Screen name="ConfirmRecording" component={ConfirmRecording} />

          <Stack.Screen name="Successful" component={Successful} />

          {/* After account setup screens */}

          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="MyTapes" component={MyTapes} />
          <Stack.Screen name="RecordVoice" component={RecordVoice} />
          <Stack.Screen name="RecordingVoice" component={RecordingVoice} />
          <Stack.Screen name="Contacts" component={Contacts} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
