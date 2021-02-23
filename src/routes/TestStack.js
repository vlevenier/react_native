import React,{useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Button} from 'react-native';

import profile from '../screen/profile';

import Login from '../screen/login';
import { useAuthState } from '../context/AuthUserContext';

import camera from '../screen/camera';
import Pokemons from '../screen/Home/Pokemons';
import Pokemon from '../screen/Home/Pokemon';

const ScreenStack = createStackNavigator();

const Screen = () => {
  const { user } = useAuthState(); 
  
  const {isLoggedIn,tester,bootstrapAsync} = useAuthState();
  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
 

    bootstrapAsync();
  }, []);
  return (
  <ScreenStack.Navigator >

    {user.user === null || user.user === "" || user.user === undefined ? 
      ( 
        <ScreenStack.Screen name="login" component={Login} />

      )
       
      :
      
      
      
      (

        <>  
       
             <ScreenStack.Screen name="Pokemons" component={Pokemons}  options={({navigation}) => ({
                headerRight: () => (
                 <Button
                 onPress={() =>  navigation.navigate('profile')}
                   title="Perfil"
                   color="#00cc00"
                 />
               ),
             })}/>
             <ScreenStack.Screen name="Pokemon" component={Pokemon} />
           
            
             <ScreenStack.Screen name="profile" component={profile} />
             <ScreenStack.Screen name="camera" component={camera} />
            
       </>


      )
    }
    
    

    
  </ScreenStack.Navigator>

  );

  };

export default Screen;