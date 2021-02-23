import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import colors from '../config/colors';

import { useAuthState } from '../context/AuthUserContext';
import { SafeAreaView } from 'react-native-keyboard-aware-scroll-view';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';


const styles = StyleSheet.create({
  container: {},
  header: {
    backgroundColor: colors.black,
    height: 400,
    justifyContent: 'flex-end',
  },
  login: {
    margin: 20,
    fontSize: 40,
    color: colors.white,
  },
  inputContainer: {
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  textInputContainer: {
    width: '80%',
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
    borderColor: colors.green,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    borderWidth: 1,
    justifyContent: 'space-between',
  },
  textInput: {
    fontSize: 35,
    marginVertical: 10,
    paddingLeft: 10,
    color: colors.gray,
  },
  inputSubmit: {
    backgroundColor: colors.green,
    padding: 5,
    right: 80,
    borderRadius: 35,
  },
});

const Login = ({}) => {
  const [user, updateUser] = useState('');
  const [password, updatePassword] = useState('');
  const {login,isLoggedIn} = useAuthState();
 
  isLoggedIn();

    
  return (
    <KeyboardAwareScrollView>
     
      <View style={[styles.header]}>
        <Text style={styles.login}>LOGIN</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Usuario"
            value={user}
            autoCapitalize="none"
            onChangeText={(text) => updateUser(text)}
            style={styles.textInput}
          />
          <TextInput
            placeholder="*******"
            value={password}
            autoCapitalize="none"
            onChangeText={(text) => updatePassword(text)}
            style={styles.textInput}
            secureTextEntry
          />
        </View>
        <TouchableOpacity
          style={styles.inputSubmit}
          onPress={  () => login(user,password)  }>
          <Text>Ingresar</Text>  
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;