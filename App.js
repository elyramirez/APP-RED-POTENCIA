import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ActivityIndicator,
  View,
} from 'react-native';
import { DrawerContent } from './src/screens/DrawerContent';
import { AuthContext } from './src/components/Context';
import MainTabScreen from './src/screens/MainTabScreen';
import CardScreen from './src/screens/CardScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import RootStackScreen from './src/screens/RootStackScreen'
const Drawer = createDrawerNavigator();



const App = () => {

  
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };
  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async(foundUser) => {
      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].username;
      
      try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async() => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    }
  }), []);

  useEffect(() => {
    setTimeout(async() => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);

  if( loginState.isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }
 
  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
    { loginState.userToken != null ? (
       <Drawer.Navigator drawerContent={ props => <DrawerContent{...props}/> }>
      <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="DetailsScreen" component={DetailsScreen} />
        <Drawer.Screen name="PaymentScreen" component={PaymentScreen} /> 
        <Drawer.Screen name="CardScreen" component={CardScreen} />
      </Drawer.Navigator>
      )
      :
      <RootStackScreen/>
      }
    </NavigationContainer>
    </AuthContext.Provider>
    
  );

}

export default App;