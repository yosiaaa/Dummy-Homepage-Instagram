import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import Images from "../constants/Images";
import { AntDesign } from "@expo/vector-icons";
import { Display } from "../utils";

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.footerContainer}>
        <View style={styles.subFooterContainer}>
          <View style={styles.iconFooterContainer}>
            <TouchableOpacity>
              <Image
                source={Images.HOME}
                resizeMode="contain"
                style={styles.iconFooter}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.iconFooterContainer}>
            <TouchableOpacity>
              <Image
                source={Images.SEARCH}
                resizeMode="contain"
                style={styles.iconFooter}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.iconFooterContainer}>
            <TouchableOpacity>
              <Image
                source={Images.ADD_POST}
                resizeMode="contain"
                style={styles.iconFooter}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.iconFooterContainer}>
            <TouchableOpacity>
              <Image
                source={Images.REELS}
                resizeMode="contain"
                style={styles.iconFooter}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.iconFooterContainer}>
            <TouchableOpacity>
              <AntDesign name="user" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
  },
  footerContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    paddingHorizontal: 14,
  },
  subFooterContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  iconFooter: {
    width: 24,
    height: 24,
  },
  iconFooterContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    justifyContent: "space-around",
    alignItems: "center",
    width: Display.setWidth(30),
    height: Display.setHeight(8),
  },
});
