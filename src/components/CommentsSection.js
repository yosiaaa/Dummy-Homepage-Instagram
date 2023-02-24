import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../constants/Colors";

const CommentsSection = ({ item }) => {
  return (
    <View>
      {!!item.comment.length && (
        <Text style={{ color: Colors.DEFAULT_GREY }}>
          View{item.comment.length > 1 ? " all" : ""} {item.comment.length}
          {item.comment.length > 1 ? " comments" : "comment"}
        </Text>
      )}
    </View>
  );
};

export default CommentsSection;
