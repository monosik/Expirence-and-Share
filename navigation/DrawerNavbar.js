import * as React from 'react';
import { Text, View, SafeAreaView, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

//Screen
import HomeStack from './HomeStack';
import SettingScreen from '../screens/SettingScreen'
import NavbarTab from './NavbarTab';
import BookmarksScreen from '../screens/BookmarksScreen';

//Icons & Image
import Ionicons from 'react-native-vector-icons/Ionicons';
import cat from '../assets/Image/CatProfile.png';

const Drawer = createDrawerNavigator();

const CustomDrawerComponent = ({props, navigation}) => (
    <SafeAreaView style= {{flex: 1}}>
        <ScrollView style={{marginLeft: 5, padding: 20}}> 
            <TouchableOpacity
                style={{marginTop: 8}}
                onPress={() => navigation.closeDrawer()}
            >
                <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>

            <View style={{height: 200, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={cat}
                    style = {{height: 120, width: 120, borderRadius:60}}
                />
            </View>

            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text>Farlalook</Text>
            </View>

            <TouchableOpacity
                style={{
                    marginTop: 20, 
                    flexDirection: 'row', 
                    alignItems: 'center',
                    
                }}
                onPress={() => props.navigation.navigate('NavbarTab')}
            >
                <Ionicons name="home-outline" size={24} color="black" />
                <Text
                    style={{
                        paddingLeft: 10
                    }}
                >Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    marginTop: 20,
                    flexDirection: 'row', 
                    alignItems: 'center',
                }}
                onPress={() => props.navigation.navigate('SettingScreen')}
            >
                <Ionicons name="settings-outline" size={24} color="black" />
                <Text
                style={{
                    paddingLeft: 10
                }}
                >Setting</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    marginTop: 20,
                    flexDirection: 'row', 
                    alignItems: 'center',
                }}
                onPress={() => props.navigation.navigate('BookmarksScreen')}
            >
                <Ionicons name="bookmarks-outline" size={24} color="black" />
                <Text
                style={{
                    paddingLeft: 10
                }}
                >Bookmarks</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    marginTop: 20,
                    flexDirection: 'row', 
                    alignItems: 'center',
                }}
                onPress={() => props.navigation.navigate('BookmarksScreen')}
            >
                <Ionicons name="exit-outline" size={24} color="black" />
                <Text
                style={{
                    paddingLeft: 10
                }}
                >Logout</Text>
            </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
)

const DrawerNavbar = () => {
    return(
        <NavigationContainer>
            <Drawer.Navigator
            drawerContent={props => CustomDrawerComponent(props)}
            screenOptions={{
                headerShown: false,
            }}>
                
                <Drawer.Screen name="Home" component={NavbarTab} />
                <Drawer.Screen name="Setting" component={SettingScreen} />
                <Drawer.Screen name="Bookmarks" component={BookmarksScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
        
    )
}

export default DrawerNavbar;