import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import PrimaryButton from "../components/Button";
import InputArea from "../components/InputArea";
import { BlurView } from "expo-blur";
import { useState } from "react";

function StartScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <Image
        style={styles.image}
        source={require("../images/start.jpg")}
      ></Image>
      {/* <BlurView style={styles.container} intensity={30}>
        <InputArea placeholder={"Username or email"} />
        <InputArea placeholder={"Password"} />
        <PrimaryButton text="Go" onPress={() => alert("Hello world")} />
      </BlurView> */}
      <View style={styles.containerBefore}>
        <PrimaryButton text="Login" onPress={() => setLoggedIn(true)} />
      </View>
      {loggedIn && (
        <>
          <Image style={styles.image} source={require("../images/start.jpg")} />
          <KeyboardAvoidingView behavior="position" style={styles.outer}>
            <View style={styles.container}>
              <InputArea placeholder={"Username or email"} />
              <InputArea placeholder={"Password"} />
              <PrimaryButton text="Go" onPress={() => setLoggedIn(false)} />
            </View>
          </KeyboardAvoidingView>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    top: "90%",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    overflow: "hidden",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
  },
  outer: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  containerBefore: {
    alignItems: "center",
    justifyContent: "center",
    top: "85%",
  },
});

export default StartScreen;
