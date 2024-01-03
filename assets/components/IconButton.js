import React from "react";
import {
  Image,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
} from "react-native";
import { useState } from "react";
import { Svg, Path } from "react-native-svg";

function IconButton(props) {
  //const styles = props.styles;
  return (
    <View style={styles.outerContainer}>
      <TouchableHighlight
        underlayColor={"none"}
        style={[
          styles.button,
          { backgroundColor: props.id ? "#8df390" : "#ddd" },
        ]}
        onPress={props.clickHandler}
      >
        <View style={styles.container}>
          <Svg
            height={props.height}
            width={props.width}
            style={styles.svg}
            viewBox="-38 -22 100 100"
          >
            <Path fill={props.id ? "#4f8951" : "#5A5A5A"} d={props.path} />
          </Svg>
          {/* <Text style={styles.text}>{props.text}</Text> */}
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  svg: {
    // position: "relative",
    top: 0,
    // right: 0,
    // left: 0,
    // bottom: 0,
  },
  button: {
    position: "absolute",
    width: "100%",
    height: "100%",
    //borderRadius: 5,
  },
  text: {},
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  outerContainer: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default IconButton;
