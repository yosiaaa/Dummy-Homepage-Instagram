import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Colors from "../constants/Colors";
import Images from "../constants/Images";
import { Divider } from "@rneui/themed";
import Comments from "./Comments";
import CommentsSection from "./CommentsSection";
import { Ionicons } from "@expo/vector-icons";

const baseUrl = "https://private-fe8306-newdummyigapi.apiary-mock.com/users";

const Feeds = () => {
  const [data, setData] = useState();
  const [comment, onChangeComment] = useState("");
  const [changeIconHeart, setChangeIconHeart] = useState(false);
  const [changeIconSaved, setChangeIconSaved] = useState(false);
  const handleChangeIconHeartColor = () => {
    setChangeIconHeart(!changeIconHeart);
  };
  const handleChangeIconSavedColor = () => {
    setChangeIconSaved(!changeIconSaved);
  }

  const getData = async () => {
    try {
      const res = await axios(baseUrl);
      console.log(res);
      setData(res.data.record.data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const renderImage = ({ item, i }) => {
    return (
      <View key={i}>
        <View
          style={{
            paddingHorizontal: 14,
            justifyContent: "space-evenly",
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={{ uri: item.caption.from.profile_picture }}
                resizeMode="contain"
                style={styles.imagesUser}
              />
              <Text style={{ fontSize: 14, fontWeight: "400", marginLeft: 8 }}>
                {item.user.username}
              </Text>
            </View>
            <Image
              source={Images.DOTS}
              resizeMode="contain"
              style={{
                transform: [{ rotate: "90deg" }],
              }}
            />
          </View>
        </View>
        <View>
          <Image
            source={{ uri: item.caption.from.profile_picture }}
            resizeMode="cover"
            style={styles.imageFeeds}
          />
        </View>
        <View style={styles.postInfoContainer}>
          <View style={styles.iconLeft}>
            <TouchableOpacity onPress={() => handleChangeIconHeartColor()}>
              <Ionicons
                name={changeIconHeart ? "md-heart" : "md-heart-outline"}
                size={26}
                color={changeIconHeart ? "#FF0000" : "#000000"}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons
                name="chatbubble-outline"
                size={24}
                color="black"
                style={{ transform: [{ rotate: "270deg" }] }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons
                name="ios-paper-plane-outline"
                size={24}
                color="black"
                style={{ transform: [{ rotate: "15deg" }] }}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => handleChangeIconSavedColor()}>
              <Ionicons name={changeIconSaved ? "bookmark" : "bookmark-outline"} size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 14,
            marginBottom: 5,
          }}
        >
          <Text style={{ color: Colors.DEFAULT_BLACK }}>
            <Text style={{ fontWeight: "600" }}>
              {item.caption.from.username}
            </Text>
            <Text style={{ color: Colors.DEFAULT_BLACK }}>
              {item.caption.text}
            </Text>
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 15,
            flexDirection: "row",
            marginBottom: 5,
          }}
        >
          <CommentsSection item={item} />
          <Comments item={item} />
        </View>
        {/* <AddNewComment /> */}
        <View style={styles.inputFieldComment}>
          <Image
            source={{ uri: item.caption.from.profile_picture }}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
              borderRadius: 50,
              borderWidth: 3,
              borderColor: Colors.BORDER_IMG_COLOR,
            }}
          />
          <TextInput
            placeholder="Add a comment..."
            onChangeText={onChangeComment}
            value={comment}
            style={{ height: 40, padding: 10 }}
          />
        </View>
        <Divider
          orientation="horizontal"
          width={0.5}
          style={{ width: "100%" }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderImage} />
    </View>
  );
};

export default Feeds;

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  imageFeeds: {
    width: "100%",
    height: 400,
  },
  imagesUser: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: Colors.BORDER_IMG_COLOR,
  },
  postInfoContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 14,
    backgroundColor: Colors.DEFAULT_WHITE,
    marginVertical: 10,
  },
  iconLeft: {
    flexDirection: "row",
  },
  iconLeftStyle: {
    marginRight: 7,
  },
  inputFieldComment: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
    paddingHorizontal: 14,
  },
});
