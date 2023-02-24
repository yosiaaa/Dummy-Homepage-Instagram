import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Navbar,
  Separator,
  Footer,
  StoryTray,
  Feeds,
} from "../components";
import Colors from "../constants/Colors";
import { Divider } from "@rneui/themed";

const Homepage = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <Navbar />
      <Separator height={StatusBar.currentHeight} />
      <StoryTray />
      <Divider
        orientation="horizontal"
        width={0.5}
        style={{ width: "100%" }}
      />
      <Feeds />
      <Footer />
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
});
