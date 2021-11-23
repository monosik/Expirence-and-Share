import * as React from 'react';
import { Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Searchpage from '../screens/Search';

import Ionicons from 'react-native-vector-icons/Ionicons';
import cat from '../assets/Image/cat.png';

const Stack = createNativeStackNavigator();

const SearchStack = ({navigation}) => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Search" component={Searchpage} options={{
                    title: 'Search',
                    headerStyle: {
                        backgroundColor: '#88cf93',
                    },
                    headerTitle: () => (
                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                            {/* <Ionicons name="list-outline" size={24} color="black" />
                            <Image source={cat} style={{}}></Image>
                            <Text> Farlalook</Text> */}
                        </View>
                    ),
                    headerLeft: () => (
                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                            <TouchableOpacity title="Go back" onPress={() => navigation.goBack()} >
                                <Ionicons name="chevron-back-sharp" size={24} color="black" />
                            </TouchableOpacity>
                            <Text style={{fontWeight: 'bold'}}>Home</Text>
                        </View>
                    ),
                    headerRight: () => (
                        <View style={{ flexDirection: 'row', alignItems: 'center', right: 10}}>
                            <Image source={cat} style={{}}></Image>
                            <Text style={{fontWeight: 'bold'}}> Farlalook</Text>
                        </View>
                    ),
                }}/>
        </Stack.Navigator>
        

    )
}

export default SearchStack;