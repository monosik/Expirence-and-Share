import * as React from "react";
import { View, Text } from "react-native";


const Profile = () => {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Home" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Profile Screen</Text>
        </View>
  );
}

export default Profile;