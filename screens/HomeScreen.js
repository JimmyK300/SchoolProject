import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { useState } from "react";

import { COLORS, FONT, SIZES } from "../constants/index.js";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "../assets/components/Button.js";

function HomeScreen() {
  const [selected, setSelected] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const slides = [
    require("../assets/images/Player1.png"),
    require("../assets/images/Player2.png"),
  ];
  const userName = "Jimmy";

  const enableButton = (i) => {
    setSelected(true);
    setCurrentIndex(i);
  };
  const disableButton = () => {
    setSelected(false);
    setCurrentIndex(-1);
  };
  const handleImgClick = (i) => {
    selected ? disableButton() : enableButton(i);
  };
  return (
    <SafeAreaView>
      <Text style={styles.container}>Hi {userName}</Text>
      {/* <Image
        source={require("../images/Player2.png")}
        style={styles.mainImage}
      /> */}
      <View style={styles.imgContainer}>
        <SliderBox
          images={slides}
          dotColor={COLORS.primary}
          inactiveDotColor={COLORS.gray}
          ImageComponentStyle={styles.sliderBox}
          sliderBoxHeight={"90%"}
          circleloop
          resizeMode={"contain"}
          onCurrentImagePressed={(index) => handleImgClick(index)}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={selected ? styles.selectButtonDisabled : styles.selectButton}
          onPress={() => {}}
          aria-disabled={selected}
        >
          <Text>SELECT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: SIZES.xLarge,
    padding: 15,
  },
  mainImage: {
    width: "100%",
    height: "74%",
    resizeMode: "contain",
  },
  imgContainer: {
    height: "72%",
    alignItems: "center",
  },
  sliderBox: {
    marginTop: 15,
    height: "99%",
  },
  selectButton: {
    margin: 10,
    padding: 20,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
  },
  selectButtonDisabled: {
    // backgroundColor: COLORS.gray2,
    // color:
    // margin: 10,
    // padding: 20,
    // borderRadius: 20,
    margin: 10,
    padding: 20,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    opacity: 0.5,
  },
});

export default HomeScreen;
