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

const Login = () => {
  //Show hide password
  const [hidePassword, setHidePassword] = useState(true);

  return(
    <StyledContainer>
      <StatusBar style="dark"/>
      <InnerContainer>
        <PageLogo resizeMode="cover" source={require("./../assets/Image/logoEx.jpg")} />
        <PageTitle>Experience & Share</PageTitle>
        <SubTitle>Sign In</SubTitle>

        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
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

            <MsgBox>...</MsgBox>
            <StyledButton onPress ={handleSubmit}>
              <ButtonText>
                Sign In
              </ButtonText>
            </StyledButton>
            <ExtraView>
              <ExtraText>Don't Have an account? </ExtraText>
              <TextLink>
                <TextLinkContent>Sign Up</TextLinkContent>
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

export default Login;