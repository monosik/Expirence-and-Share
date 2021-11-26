import * as React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerActions } from "react-navigation";

import HomePost from "../screens/HomePost";
import CreatePost from '../screens/CreatePost';
import DrawerNavbar from './DrawerNavbar';
import NavbarTab from './NavbarTab';

import Ionicons from 'react-native-vector-icons/Ionicons';
import cat from '../assets/Image/cat.png';

const Stack = createNativeStackNavigator();

const HomePostStack = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomePostStack"
                component={HomePost}
                options={{
                    title: "HomeTwo",
                    headerStyle: {
                        backgroundColor: "#88cf93",
                    },
                    headerTitle: () => (
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            {/* <Ionicons name="list-outline" size={24} color="black" />
                            <Image source={cat} style={{}}></Image>
                            <Text> Farlalook</Text> */}
                        </View>
                    ),
                    headerLeft: () => (
                        <View
                            style={{ flexDirection: "row", alignItems: "center", left: 10 }}
                        >
                            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                <Ionicons name="list-outline" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    ),
                    headerRight: () => (
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                right: 10,
                            }}
                        >
                            <Image
                                source={cat}
                                style={{
                                    borderWidth: 1,
                                    borderColor: "black",
                                    borderRadius: 15,
                                }}
                            ></Image>
                            <Text style={{ fontWeight: "bold" }}> Farlalook</Text>
                        </View>
                    ),
                }}/>
        </Stack.Navigator>
    );
}

export default HomePostStack;