import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function PrimaryButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

// Path: assets/components/button.js

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#4f8951",
    width: "90%",
    margin: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
});

export default PrimaryButton;
