import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';
import NavbarTab from './navigation/NavbarTab';
import NavbarTabTwo from './navigation/NavbarTabTwo';
import DrawerNavbar from './navigation/DrawerNavbar';
import HomeStack from './navigation/HomeStack';
import PostDetail from './screens/PostDetail';
import HomePost from './screens/HomePost';
import HomePostStack from "./navigation/HomePostStack";

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
          name="DrawerNavbar"
          component={DrawerNavbar}
          options={{
            headerShown: false,
          }}
        /> */}
        <Stack.Screen
          name="NavbarTab"
          component={NavbarTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NavbarTabTwo"
          component={NavbarTabTwo}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HomePostStack"
          component={HomePostStack}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    //<PostDetail />
  );
}


