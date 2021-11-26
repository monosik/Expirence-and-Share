import * as React from 'react';
import { Text, View, SafeAreaView, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

//Screen
import HomeStack from './HomeStack';
import SettingScreen from '../screens/SettingScreen'
import NavbarTab from './NavbarTab';
import BookmarksScreen from '../screens/BookmarksScreen';
import Login from '../screens/Login'

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

            <View style={{height: 150, alignItems: 'center', justifyContent: 'center', paddingTop: 30}}>
                <Image source={cat}
                    style={{height: 120, width: 120, borderWidth: 4, borderRadius: 60, borderColor: 'black'}}
                />
            </View>

            <View style={{alignItems: 'center', justifyContent: 'center', paddingTop: 10}}>
                <Text style={{fontSize: 30}}>Farlalook</Text>
            </View>

            <TouchableOpacity
                style={{
                    marginTop: 20, 
                    flexDirection: 'row', 
                    alignItems: 'center',
                }}
                onPress={() => navigation.navigate('Home')}
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
                onPress={() => navigation.navigate('SettingScreen')}
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
                onPress={() => navigation.navigate('BookmarksScreen')}
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
                onPress={() => navigation.navigate('Login')}
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
    return (
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => CustomDrawerComponent(props)}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Drawer.Screen name="NavHome" component={NavbarTab} />
          <Drawer.Screen name="HomeStack" component={HomeStack} />
          <Drawer.Screen name="Setting" component={SettingScreen} />
          <Drawer.Screen name="Bookmarks" component={BookmarksScreen} />
          <Drawer.Screen name="Login" component={Login} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
}

export default DrawerNavbar;