import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

//screens
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';
import NavbarTab from './navigation/NavbarTab';
import DrawerNavbar from './navigation/DrawerNavbar';

export default function App() {
  
  return (
    <DrawerNavbar/>
  );
}


