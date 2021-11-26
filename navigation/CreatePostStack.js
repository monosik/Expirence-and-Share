import * as React from 'react';
import { Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CreatePost from '../screens/CreatePost';

import Ionicons from 'react-native-vector-icons/Ionicons';
import cat from '../assets/Image/cat.png';

const Stack = createNativeStackNavigator();

const CreatePostStack = ({navigation}) => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="CreatePostStack" component={CreatePost} options={{
                    title: 'Create Post',
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
                            <Image source={cat} style={{borderWidth: 1, borderColor: 'black', borderRadius: 15}}></Image>
                            <Text style={{fontWeight: 'bold'}}> Farlalook</Text>
                        </View>
                    ),
                }}/>
        </Stack.Navigator>
    );
}

export default CreatePostStack;