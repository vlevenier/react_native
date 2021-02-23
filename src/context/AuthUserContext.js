import React, { useReducer } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthStateContext = React.createContext();
const AuthDispatchContext = React.createContext();

const initialState = {
    user: null,
    token: null,
    loading: false,
    errorMessage: "",
  };


const AuthUserContext = ({children}) => {
     const [user,dispatch] = useReducer(AuthReducer, initialState);
     
     


    const login =  (username, password) => {
           
        if(username === "admin" && password === "admin"){
            AsyncStorage.setItem("username",username);
            dispatch({type: 'LOGIN_SUCCESS',username,password});
            return;
        }else{
            dispatch({type: 'LOGIN_ERROR'});
            return;    
        }    
       
    };

    const logout = () => {
        
        AsyncStorage.removeItem('username');
        dispatch({type: 'LOGOUT'});
    }
  

    const isLoggedIn = () => {
        
        
        return async (dispatch) => {
          const currentSessionId = await AsyncStorage.getItem('username');
         
          setTimeout(() => {  

            

             }, 2000)
          if (currentSessionId) {
              
            dispatch({
              type: 'LOGIN_SUCCESS',
              username: currentSessionId
            });
            return;
          }
      
          
        };
    }


    const bootstrapAsync = async () => {
        let username;
  
        try {
          username = await AsyncStorage.getItem('username');
          
        //  password = "";
          
          if(username){
             console.log();
            dispatch({type: 'LOGIN_SUCCESS',username});
          }else{
              logout();
          }
        } catch (e) {
          console.log(e);
          console.log("cayo AL CATCH");
         
        }
  
       
      };
     

    return (

        <AuthStateContext.Provider value={{user,login,isLoggedIn,bootstrapAsync,logout}}>
            
                {children}
           
        </AuthStateContext.Provider>

        

    )

};

export default AuthUserContext;
const AuthReducer = (initialState,action) => {
    

    switch (action.type) {
        case "REQUEST_LOGIN":
          return {
            ...initialState,
            loading: true
          };
        case "LOGIN_SUCCESS":
            

          return {
            ...initialState,
           
            user: action.username,
            loading: false
          };
        case "LOGOUT":
          return {
            ...initialState,
            user: "",
            token: ""
          };
     
        case "LOGIN_ERROR":
          return {
            ...initialState,
            loading: false,
            //errorMessage: action.error
          };
     
        default:
          throw new Error(`Unhandled action type: ${action.type}`);
      }


}





export const useAuthState = () =>{
    const context = React.useContext(AuthStateContext);
    if (context === undefined) {
      throw new Error("useAuthState must be used within a AuthProvider");
    }
   
    return context;
  }
   
  export const useAuthDispatch = () => {
    const context = React.useContext(AuthDispatchContext);
    if (context === undefined) {
      throw new Error("useAuthDispatch must be used within a AuthProvider");
    }
   
    return context;
  }