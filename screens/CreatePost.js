import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
  Select,
  Button,
} from "react-native";

import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledInputLabel,
  StyledTextInput,
  PostTextInput,
  DetailInput,
  Colors,
  PostButton,
  ButtonText,
} from "./../components/styles";

import { Octicons, Ionicons } from "@expo/vector-icons";
import { Formik, useField } from "formik";
import styled from "styled-components";

const { brand, darkLight } = Colors;

const CreatePost = () => {
  const [value, onChangeText] = React.useState("Write Something");
  return (
    <StyledContainer>
      <InnerContainer>
        <Formik
        initialValues={{ topic: "", detail: "", categories: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <StyledFormArea>
            <MyTextInput
              label="Topic"
              placeholder="Topic Here"
              placeholderTextColor={darkLight}
              onChangeText={handleChange("topic")}
              onBlur={handleBlur("topic")}
              value={values.topic}
            />

            <MyDetailInput
              label="Detail"
              placeholder="Write Something"
              rows="6"
              placeholderTextColor={darkLight}
              onChangeText={handleChange("detail")}
              onBlur={handleBlur("detail")}
              value={values.detail}
            />

            <MySelectInput
              label="Categories"
              placeholder="Select Categories"
              placeholderTextColor={darkLight}
              onChangeText={handleChange("categories")}
              onBlur={handleBlur("categories")}
              value={values.categories}
            />

            <PostButton onPress={handleSubmit}>
              <ButtonText>Post</ButtonText>
            </PostButton>
          </StyledFormArea>
        )}
      </Formik>
      </InnerContainer>
      
    </StyledContainer>
  );
};


const MyTextInput = ({label, icon, ...props}) => {
  return(
    <View>
      <StyledInputLabel>{label}</StyledInputLabel>
      <PostTextInput {...props} />
    </View>
  )
}

const MyDetailInput = ({label, icon, ...props}) => {
  return (
      <>
          <StyledInputLabel>{label}</StyledInputLabel>
          <PostTextInput {...props} />
      </>
  );
}

const MySelectInput = ({label, icon, ...props}) => {
  return (
      <>
          <StyledInputLabel>{label}</StyledInputLabel>
          <PostTextInput {...props} />
      </>
  );
}

export default CreatePost;
