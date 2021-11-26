import * as React from "react";
import styled from "styled-components";
import {TestPost} from "../components/postDataTwo";
import { OwnPost } from "../components/postData";

import {
    View,
    Text,
    TouchableOpacity,
    Image
} from "react-native";
import { Octicons, Ionicons, Entypo } from "@expo/vector-icons"
import cat from '../assets/Image/CatProfile.png';

const PostDetail = ({navigation}) => {
    const renderPost = ({ item }) => (
      <PostContainer>
        <PostHeaderContainer>
          <PostProfilePhoto
            source={{ uri: item.user.profilePhotoUrl }}
            style={{ borderWidth: 1.5, borderColor: "black" }}
          />
          <PostInfoContainer>
            <Text medium style={{fontSize: 25}}>{item.user.username}</Text>
          </PostInfoContainer>
        </PostHeaderContainer>
        <Post>
          {/* <PostPhoto marginTop="1%" /> */}
          {/* <Text marginTop="10px" text-align='center'>
              {item.topic}
            </Text> */}
            <Text medium marginRight="10px" style={{fontSize: 20}}>
              {item.topic+ '\n'}
            </Text>
          <Text style={{fontSize: 20}}>{"\t" + "\t" + "\t" + "\t" + item.post + '\n'}</Text>
          <PostDetailProfile>
            <PostLikes>
              <Ionicons name="ios-heart" size={24} color={"#FFC0CB"} />
              <Text tiny margin="0 0 0 8px">
                {item.likes}
              </Text>
            </PostLikes>
            <PostComments>
              <Ionicons name="ios-chatbox" size={24} color={"#87CEFA"} />
              <Text tiny margin="0 0 0 8px">
                {item.comments}
              </Text>
            </PostComments>
          </PostDetailProfile>
        </Post>
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
                </BackHome>
            </BackgroundContainer>

            <PostContainer>
                <Feed
                data={TestPost}
                renderItem={renderPost}
                keyExtractor={(item) => item.id.toString()}
                />
            </PostContainer>
        </Container>
    );
}

const Container = styled.View`
  margin: 30px 0 0 0;
  flex: 1;
`;

const BackgroundContainer = styled.View`
  padding: 10px 0 4% 0;
  backgroundColor: #cbe8ba;
  border-radius: 6px;
`;

const BackHome = styled.View`
  margin-left: 15px;
  flexDirection: row;
  align-items: center;
`;

const ProfilePhotoContainer = styled.View`
  shadow-opacity: 0.8;
  shadow-radius: 30px;
  shadow-color: #2222;
  justify-content: center;
  align-items: center;
`;

const ProfilePhoto = styled.Image`
  width: 128px;
  height: 128px;
  border-radius: 64px;
`

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

const Feed = styled.FlatList``;

const PostContainer = styled.View`
  margin: 15px 16px 0 16px;
  borderStyle: dashed;
  background-color: #CEEF98;
  border-radius: 5px;
  padding: 0px 0px 23% 0px;
`;

const PostHeaderContainer = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
  align-items: center;
  background-color: #fafafa;
  border-style: solid;
  border-radius: 10px;
  padding: 10px;
`;

const PostProfilePhoto = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin: 0px 0px 0px 0px;
`;

const PostInfoContainer = styled.View`
  flex: 1;
  margin: 0 14px;
`;

const Options = styled.View`
  margin-right: 20px
`;

const Post = styled.View`
  padding: 20px 20px;
  border-radius: 10px;
  background-color: #fafafa;
`;

const PostPhoto = styled.Image`
  width: 90%;
  height: 150px;
  border-radius: 6px;
`;

const PostDetailProfile = styled.View`
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

export default PostDetail;