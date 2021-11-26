import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";

//form
import { Formik } from "formik";

//icons
import { Octicons, Ionicons } from "@expo/vector-icons"

import{
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  Colors,
  StyledButton,
  ButtonText,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent
} from "./../components/styles";

import { View } from "react-native";

//colors
const {brand, darkLight} = Colors;

const Signup = ({navigation}) => {
  //Show hide password
  const [hidePassword, setHidePassword] = useState(true);

  return(
    <StyledContainer>
      <StatusBar style="dark"/>
      <InnerContainer>
        <PageTitle>Experience & Share</PageTitle>
        <SubTitle>Sign Up</SubTitle>

        <Formik
          initialValues={{userName: '', email: '', password: '', confirmPassword: ''}}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
            {({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
                <MyTextInput
                    label = "Username"
                    icon = "person"
                    placeholder = "username"
                    placeholderTextColor = {darkLight}
                    onChangeText = {handleChange('userName')}
                    onBlur = {handleBlur('userName')}
                    value = {values.userName}
                />

                <MyTextInput
                label = "Email Address"
                icon = "mail"
                placeholder = "email@mail.com"
                placeholderTextColor = {darkLight}
                onChangeText = {handleChange('email')}
                onBlur = {handleBlur('email')}
                value = {values.email}
                keyboardType = "email-address"
            />

            <MyTextInput
                label = "Password"
                icon = "lock"
                placeholder = "password"
                placeholderTextColor = {darkLight}
                onChangeText = {handleChange('password')}
                onBlur = {handleBlur('password')}
                value = {values.password}
                secureTextEntry = {hidePassword}
                isPassword = {true}
                hidePassword = {hidePassword}
                setHidePassword = {setHidePassword}
            />

            <MyTextInput
                label = "Confirm Password"
                icon = "lock"
                placeholder = "password"
                placeholderTextColor = {darkLight}
                onChangeText = {handleChange('confirmPassword')}
                onBlur = {handleBlur('confirmPassword')}
                value = {values.confirmPassword}
                secureTextEntry = {hidePassword}
                isPassword = {true}
                hidePassword = {hidePassword}
                setHidePassword = {setHidePassword}
            />

            <MsgBox>...</MsgBox>
            <StyledButton onPress ={handleSubmit}>
                <ButtonText>
                    Sign Up
                </ButtonText>
            </StyledButton>
            <ExtraView>
                <ExtraText>Already have an account? </ExtraText>
                <TextLink onPress ={() => navigation.navigate('LoginScreen')}>
                    <TextLinkContent>Sign In</TextLinkContent>
                </TextLink>
            </ExtraView>
            
            <ExtraView>
            
            </ExtraView>
            </StyledFormArea>)}

        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
}

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
  return(
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand}/>
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress = { () => setHidePassword (!hidePassword)}>
          <Ionicons name = {hidePassword ? 'md-eye-off' : 'md-eye'} size = {30} color={darkLight} /> 
        </RightIcon>
      )}
    </View>
  )
}

export default Signup;