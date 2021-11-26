import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeStack from "./HomeStack";
import HomePostStack from "./HomePostStack";
import SearchStack from "./SearchStack";
import NotiPage from "../screens/NotiPage";
import PostDetail from "../screens/PostDetail";
import ProfileStack from "./ProfileStack";
import CreatePostStack from "./CreatePostStack";

import cat from "../assets/Image/cat.png";

//icons
import Ionicons from "react-native-vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";

//Create Stack
const Drawer = createDrawerNavigator();
//Create button tab
const Tab = createBottomTabNavigator();

const NavbarTabTwo = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#cbe8ba",
          bottom: 0,
          position: "absolute",
          marginHorizontal: 0,
          left: 0,
          right: 0,
          elevation: 0,
          borderRadius: 9,
          height: 60,
          shadowColor: "#000",
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 100,
          },
          paddingHorizontal: 20,
        },

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "HomePostStack") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "PostDetail") {
            iconName = focused
              ? "bookmarks"
              : "bookmarks-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "CreatePost") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#88cf93",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="HomePostStack" component={HomePostStack} />
      <Tab.Screen name="Search" component={SearchStack} />
      <Tab.Screen name="CreatePost" component={CreatePostStack} />
      <Tab.Screen name="PostDetail" component={PostDetail} />
      <Tab.Screen name="Profile" component={ProfileStack} />
      {/* <Tab.Screen name="HomeTwo" component={HomePostStack} /> */}
    </Tab.Navigator>
  );
};

export default NavbarTabTwo;
