import * as React from "react";
import { StyleSheet,Text, View, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeStack from "./HomeStack";
import SearchStack from "./SearchStack";
import NotiPage from "../screens/NotiPage";
import Profile from "../screens/Profile";
import CreatePostStack from "./CreatePostStack";

import cat from '../assets/Image/cat.png';

//icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons'; 

//Create Stack

const Drawer = createDrawerNavigator();
//Create button tab
const Tab = createBottomTabNavigator();

const NavbarTab = ({navigation}) => {
    return(
            <Tab.Navigator
            screenOptions={({route}) =>({
                headerShown: false,
                tabBarShowLabel: false,  
                tabBarStyle: {
                    backgroundColor: '#cbe8ba',
                    bottom: 25,
                    position: 'absolute',
                    marginHorizontal: 20,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    borderRadius: 15,
                    height: 60,
                    shadowColor: '#000',
                    shadowOpacity: 0.06,
                    shadowOffset: {
                        width: 10,
                        height: 100
                    },
                    paddingHorizontal: 20,
                },

                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
        
                    if (route.name === 'Feed') {
                        iconName = focused
                        ? 'home'
                        : 'home-outline';

                    } else if (route.name === 'Search') {
                        iconName = focused 
                        ? 'search' 
                        : 'search-outline';
                    } else if (route.name === 'Notification') {
                        iconName = focused 
                        ? 'md-notifications' 
                        : 'md-notifications-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused 
                        ? 'person' 
                        : 'person-outline';
                    } else if (route.name === 'CreatePost') {
                        iconName = focused 
                        ? 'add-circle' 
                        : 'add-circle-outline';
                    }
        
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#88cf93',
                tabBarInactiveTintColor: 'gray',
                
            })}
            
            >
                <Tab.Screen name="Feed" component={HomeStack} />
                <Tab.Screen name="Search" component={SearchStack} />
                <Tab.Screen name="CreatePost" component={CreatePostStack} />
                <Tab.Screen name="Notification" component={NotiPage} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>

            
    );
}

export default NavbarTab;