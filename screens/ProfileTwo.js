import * as React from "react";
import styled from "styled-components";
import { OwnPost } from "../components/postData";
import { TestPost } from "../components/postDataTwo";

import { View, Text, TouchableOpacity, Image } from "react-native";
import { Octicons, Ionicons, Entypo } from "@expo/vector-icons";
import cat from "../assets/Image/CatProfile.png";

const Profile = ({ navigation }) => {
  const renderPost = ({ item }) => (
    <PostContainer>
      <PostHeaderContainer>
        <PostProfilePhoto
          source={{ uri: item.user.profilePhotoUrl }}
          style={{ borderWidth: 1.5, borderColor: "black" }}
        />

        <PostInfoContainer>
          <Text medium>{item.user.username}</Text>
          <Text medium marginRight="10px">
            {item.topic}
          </Text>
        </PostInfoContainer>

        <Options>
          <Entypo name="dots-three-horizontal" size={16} color="#73788b" />
        </Options>
      </PostHeaderContainer>
      <Post>
        <Text>{item.post}</Text>
        <PostPhoto source={{ uri: item.photoUrl }} marginTop="2%" />

        <PostDetail>
          <PostLikes>
            <Ionicons name="ios-heart-outline" size={24} color={"#cbe8ba"} />
            <Text tiny margin="0 0 0 8px">
              {item.likes}
            </Text>
          </PostLikes>

          <PostComments>
            <Ionicons name="ios-chatbox" size={24} color={"#cbe8ba"} />
            <Text tiny margin="0 0 0 8px">
              {item.comments}
            </Text>
          </PostComments>
        </PostDetail>
      </Post>
    </PostContainer>
  );
  const renderPostTwo = ({ item }) => (
    <PostContainer>
      <TouchableOpacity onPress={() => navigation.navigate("PostDetail")}>
        <PostHeaderContainer>
          <PostProfilePhoto
            source={{ uri: item.user.profilePhotoUrl }}
            style={{ borderWidth: 1.5, borderColor: "black" }}
          />

          <PostInfoContainer>
            <Text medium>{item.user.username}</Text>
            <Text medium marginRight="10px">
              {item.topic}
            </Text>
          </PostInfoContainer>

          <Options>
            <Entypo name="dots-three-horizontal" size={16} color="#73788b" />
          </Options>
        </PostHeaderContainer>
        <Post>
          <Text>{item.post}</Text>
          {/* <PostPhoto source={{ uri: item.photoUrl }} marginTop="2%" /> */}

          <PostDetail>
            <PostLikes>
              <Ionicons name="ios-heart-outline" size={24} color={"#cbe8ba"} />
              <Text tiny margin="0 0 0 8px">
                {item.likes}
              </Text>
            </PostLikes>

            <PostComments>
              <Ionicons name="ios-chatbox" size={24} color={"#cbe8ba"} />
              <Text tiny margin="0 0 0 8px">
                {item.comments}
              </Text>
            </PostComments>
          </PostDetail>
        </Post>
      </TouchableOpacity>
    </PostContainer>
  );

  return (
    <Container>
      <BackgroundContainer>
        <BackHome>
          <TouchableOpacity title="Go back" onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-sharp" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ fontWeight: "bold" }}>Home</Text>
          <TouchableOpacity
            style={{
              paddingTop: 10,
              paddingRight: 20,
              flexDirection: "row",
              flex: 1,
              justifyContent: "flex-end",
            }}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <Ionicons name="exit-outline" size={24} color="black" />
            <Text style={{ paddingLeft: 8, paddingTop: 2 }}>Logout</Text>
          </TouchableOpacity>
        </BackHome>

        <ProfilePhotoContainer>
          <ProfilePhoto
            source={cat}
            style={{
              height: 140,
              width: 140,
              borderWidth: 3,
              borderRadius: 70,
              borderColor: "black",
            }}
          />
          <NameProfileText>Farlalook</NameProfileText>
        </ProfilePhotoContainer>

        <StatsContainer>
          <StatContainer>
            <StateText>1</StateText>
            <StateText>Posts</StateText>
          </StatContainer>
        </StatsContainer>
      </BackgroundContainer>

      <Feed
        data={OwnPost}
        renderItem={renderPost}
        keyExtractor={(item) => item.id.toString()}
      />
    </Container>
  );
};

const Container = styled.View`
  margin: 30px 0px 0px 0px;
  flex: 1;
`;

const Feed = styled.FlatList`
`;

const BackgroundContainer = styled.View`
  padding: 10px 0 15% 0;
  background-color: #cbe8ba;
`;

const BackHome = styled.View`
  margin-left: 15px;
  flexDirection: row;
  align-items: center;
`;

const ProfilePhotoContainer = styled.View`
  shadow-opacity: 0.8;
  shadow-radius: 30px;
  shadow-color: #222222;
  justify-content: center;
  align-items: center;
`;

const ProfilePhoto = styled.Image`
  width: 128px;
  height: 128px;
  border-radius: 64px;
`;

const StatsContainer = styled.View`
  justify-content: center;
  flex: 1;
  margin-bottom: 0%;
`;

const StatContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: 15% 50px 0%;
`;

const NameProfileText = styled.Text`
  fontSize: 20px;
  fontWeight: bold;
  margin: 16px 0 0px 0;
  justify-content: center;
  align-items: center;
`;

const StateText = styled.Text`
  fontWeight: bold;
  color: #c2c4cd;
  align-items: center;
  padding: 0% 50px 0%;
`;

const PostContainer = styled.View`
  margin: 16px 16px 0 16px;
  background-color: #ffffff;
  border-radius: 6px;
  padding: 5px 5px 15% 5px;
`;

const PostHeaderContainer = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
  align-items: center;
`;

const PostProfilePhoto = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin-left: 20px;
`;

const PostInfoContainer = styled.View`
  flex: 1;
  margin: 0 16px;
`;

const Options = styled.View`
  margin-right: 20px;
`;

const Post = styled.View`
  margin-left: 20px;
  margin-right: 10px;
`;

const PostPhoto = styled.Image`
  width: 90%;
  height: 150px;
  border-radius: 6px;
`;

const PostDetail = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;

const PostLikes = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
  margin-top: 2%;
`;

const PostComments = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 16px;
  margin-top: 2%;
  margin-bottom: 5px;
`;

const StatusBar = styled.View``;

export default Profile;
