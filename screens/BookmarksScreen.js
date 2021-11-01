import * as React from "react";
import { Image, View, Text, SafeAreaView, StyleSheet} from "react-native";

//icons & Picture
import CustomHeader from "../components/CustomHeader";
import { Octicons, Ionicons } from "@expo/vector-icons"
import cat from '../assets/Image/cat.png';

const BookmarksScreen = () => {
  return(
    <SafeAreaView style={{ flex:1 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={cat} ></Image>
      </View>
    </SafeAreaView>
      

    
  );
}

export default BookmarksScreen;