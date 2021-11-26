import * as React from "react";
import styled from "styled-components";
import { Image, View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";

//icons & Picture
import CustomHeader from "../components/CustomHeader";
import { Octicons, Ionicons, Entypo } from "@expo/vector-icons";
import cat from "../assets/Image/cat.png";
import { TestPost } from "../components/postData";
import { TestPostThree } from "../components/postDataThree";

const HomePost = ({navigation}) => {
  const renderPost = ({ item }) => (
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
  
   const renderPostTwo = ({ item }) => (
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

  return (
    <Container>
      <Feed
        data={TestPost}
        renderItem={renderPost}
        keyExtractor={(item) => item.id.toString()}
      />
      <FeedContainer
        data={TestPostThree}
        renderItem={renderPostTwo}
        keyExtractor={(item) => item.id.toString()}
      />
      <StatusBar barStyle="dark-content" />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #cbe8ba;
  padding-bottom: 50px;
  marginBottom: 0%;
`;

const FeedContainer = styled.FlatList`
    paddingTop: 0%;
    marginTop: 0%;
`;

const Feed = styled.FlatList`
    paddingBottom: 20%;
`;

const PostContainer = styled.View`
  margin: 16px 16px 0 16px;
  background-color: #ffffff;
  border-radius: 6px;
  padding: 10px;
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

export default HomePost;
