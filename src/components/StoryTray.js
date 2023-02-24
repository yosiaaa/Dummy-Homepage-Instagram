import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Display } from "../utils";
import Colors from "../constants/Colors";
const baseUrl = "https://private-fe8306-newdummyigapi.apiary-mock.com/users";
import { Divider } from '@rneui/themed';

const StoryTray = () => {
  const [data, setData] = useState("");
  
  const getData = async () => {
    try {
      const res = await axios(baseUrl);
      setData(res.data.record.data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    {console.log(data)}
    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
      {data &&
        data.map((item, i) => (
          <View key={i} style={styles.container}>
            <TouchableOpacity>
              <Image
                source={{ uri: item.caption.from.profile_picture }}
                style={styles.imageStory}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={styles.usernameStory}>
              {item.user.username.length > 11
                ? item.user.username.slice(0, 10).toLowerCase() + "..."
                : item.user.username.toLowerCase()}
            </Text>
            
          </View>
        ))}
    </ScrollView>
    </>
  );
};

export default StoryTray;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.DEFAULT_WHITE,
    flexDirection: "column",
    paddingHorizontal: 14,
    justifyContent: "center"
  },
  imageStory: {
    height: 75,
    width: 75,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: Colors.BORDER_IMG_COLOR,
  },
  usernameStory: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.DEFAULT_BLACK,
    lineHeight: 22,
    marginTop: 5,
  },
});
