import React, { useLayoutEffect } from "react";
import { Button, View, Text, SafeAreaView, TouchableOpacity } from "react-native";

import { Octicons, Ionicons } from "@expo/vector-icons"
import { Form } from "formik";

const CreatePost = ( {navigation} ) => {

  useLayoutEffect(() => { 
    navigation.setOptions({
      title: 'Create A New Post'
    })
  })

  return(
    <SafeAreaView style={{ flex:1 }}>
      <TouchableOpacity
      style={{
        marginTop: 25,
        marginLeft: 15,
        flexDirection: 'row',
      }}
      >
        <Ionicons name="close" size={24} color="black" />
        <Text
        style={{
          alignItems: 'center', 
          justifyContent: 'center'
        }}>Create Post</Text>
      </TouchableOpacity>

      <Text>Topic</Text>
      <Button title="Topic Here"></Button>

      <Text>Details</Text>
      <Button title="Topic Here"></Button>

      <Text>Categories</Text>
      <Button title="Topic Here"></Button>
    </SafeAreaView>
  );
}

export default CreatePost;