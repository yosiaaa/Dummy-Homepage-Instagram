import { StyleSheet, View, Image, StatusBar } from "react-native";
import React, { useEffect } from "react";
import Colors from "../constants/Colors";
import Images from "../constants/Images";
import { Display } from "../utils";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Homepage");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Image source={Images.LOGO_ICON} resizeMode="contain" style={styles.logo} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: Display.setHeight(30),
    width: Display.setWidth(30),
  },
});
