import * as React from "react";
import { Image, View, Text, SafeAreaView, StyleSheet} from "react-native";

const CustomHeader = () => {
    return(
        <View style = {{flexDirection: 'row', height: 50, borderWidth: 1, borderColor: '#cbe8ba'}}>
            <View style={{ flex: 1, borderColor: '#cbe8ba', borderWidth: 1 }}></View>
            <View style={{ flex: 1, borderColor: '#cbe8ba', borderWidth: 1 }}></View>
            <View style={{ flex: 1, borderColor: '#cbe8ba', borderWidth: 1 }}></View>
        </View>
    )
}
export default CustomHeader;