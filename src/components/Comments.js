import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors';

const Comments = ({ item }) => {
    <>
      {item.comment.map((comment, i) => (
        <View key={i} style={{ flexDirection: "row", marginTop: 5 }}>
          <Text style={{ color: Colors.DEFAULT_WHITE }}>
            <Text style={{ fontWeight: "600" }}> {comment.userName}</Text>{" "}
            {comment.text}
          </Text>
        </View>
      ))}
    </>;
  };

export default Comments

const styles = StyleSheet.create({})