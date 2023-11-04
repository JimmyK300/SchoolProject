import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

function InputArea(props) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder={props.placeholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 14,
    paddingHorizontal: 20,
    fontSize: 18,
    borderRadius: 20,
    backgroundColor: "white",
  },
  container: {
    margin: 10,
    width: "90%",
  },
});

export default InputArea;
