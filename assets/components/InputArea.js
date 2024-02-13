import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function InputArea(props) {
  return (
    <View
      style={[
        props.containerStyle,
        {
          flex: 1,
          alignItems: "center",
        },
      ]}
    >
      <TextInput
        {...props}
        style={props.style}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        testID={props.placeholder}
        accessible
        accessibilityLabel={props.placeholder}
        editable={true}
        autoFocus={true}
      />
    </View>
  );
}
