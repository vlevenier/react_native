/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AuthUserContext from './context/AuthUserContext';
import UserContext from './context/User';
import RootNavigation from './routes/RootStack';

const App: () => React$Node = () => {
  return (
    <>
    <AuthUserContext>
       <UserContext>
          <StatusBar barStyle="dark-content"/>
          <RootNavigation />
      </UserContext>
    </AuthUserContext>
     
       </>
  );
};


export default App;
