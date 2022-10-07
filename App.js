import {StyleSheet} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
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
import AddContact from './src/screens/AddContact';
import EditContact from './src/screens/EditContact';
import Notification from './src/screens/Notification';
import HideChatScreen from './src/screens/HideChatScreen';
import ChangeAccessPhrase from './src/screens/ChangeAccessPhrase';
import RecordChangePhrase from './src/screens/RecordChangePhrase';
import ConfirmChangePhrase from './src/screens/ConfirmChangePhrase';
import ConfirmRecordChangePhrase from './src/screens/ConfirmRecordChangePhrase';
import ChangePhraseSuccess from './src/screens/ChangePhraseSuccess';
import RecoveryEmail from './src/screens/RecoveryEmail';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomePage from './src/components/Page/HomePage';
import NewsPage from './src/components/Page/NewsPage';
import NotificationPage from './src/components/Page/NotificationPage';

// import HomePage from './Page/HomePage';
// import NewsPage from './Page/NewsPage';
// import NotificationPage from './Page/NotificationPage';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <StatusBar hidden={true}/> */}
      <Stack.Navigator
        initialRouteName="RecoveryEmail"
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
        <Stack.Screen name="AddContact" component={AddContact} />
        <Stack.Screen name="EditContact" component={EditContact} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="HideChatScreen" component={HideChatScreen} />
        <Stack.Screen name="RecoveryEmail" component={RecoveryEmail} />

        <Stack.Screen
          name="ChangeAccessPhrase"
          component={ChangeAccessPhrase}
        />
        <Stack.Screen
          name="RecordChangePhrase"
          component={RecordChangePhrase}
        />
        <Stack.Screen
          name="ConfirmChangePhrase"
          component={ConfirmChangePhrase}
        />
        <Stack.Screen
          name="ConfirmRecordChangePhrase"
          component={ConfirmRecordChangePhrase}
        />
        <Stack.Screen
          name="ChangePhraseSuccess"
          component={ChangePhraseSuccess}
        />
      </Stack.Navigator>

      {/* <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: {marginVertical: 5},
      }}
      // drawerContent={props => <CustomSidebarMenu {...props} />}
      >
      <Drawer.Screen
        name="FirstPage"
        options={{drawerLabel: 'First page Option'}}
        component={HomePage}
      />
      <Drawer.Screen
        name="SecondPage"
        options={{drawerLabel: 'Second page Option'}}
        component={NewsPage}
      />
    </Drawer.Navigator> */}
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
