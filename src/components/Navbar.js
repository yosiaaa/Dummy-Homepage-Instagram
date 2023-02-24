import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Images from "../constants/Images";
import { Display } from "../utils";
import Colors from "../constants/Colors";
import { Entypo } from "@expo/vector-icons";

const Navbar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.leftContainer}>
          <View style={styles.leftSubContainer}>
            <Image source={Images.LOGO_TEXT} resizeMode="contain" />
            <TouchableOpacity>
              <Entypo name="chevron-down" size={22} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.rightSubContainer}>
            <TouchableOpacity>
              <Image
                source={Images.LIKE}
                style={styles.iconHeader}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={Images.MESSAGE}
                style={styles.iconHeader}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: Display.setHeight(8),
  },
  leftContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    paddingVertical: 30,
    paddingHorizontal: 14,
  },
  leftSubContainer: {
    flexDirection: "row",
  },
  rightContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    paddingVertical: 30,
    paddingHorizontal: 14,
  },
  rightSubContainer: {
    flexDirection: "row",
  },
  iconHeader: {
    marginLeft: 12,
  },
});
