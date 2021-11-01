import React, { useLayoutEffect } from "react";
import { View, Text } from "react-native";



const SettingScreen = ( {navigation} ) => {

  useLayoutEffect(() => { 
    navigation.setOptions({
      title: 'Setting'
    })
  })

  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Home" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Setting Screen</Text>
    </View>
  );
}

export default SettingScreen;
