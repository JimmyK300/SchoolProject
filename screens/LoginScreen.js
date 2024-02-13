import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from "react-native";

import Loading from "../components/loading.js";
import { AuthContext } from "../context/AuthProvider.js";
import { COLORS, FONT, SHADOWS, SIZES } from "../constants";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }

  const backImage = require("../assets/images/cover.jpg");

  return (
    <>
      <Image source={backImage} style={styles.backImage} />
      <KeyboardAvoidingView
        style={styles.whiteSheet}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.form}>
          <Text style={styles.title}>Log In</Text>
          <TextInput
            style={[styles.input, { borderTopRightRadius: 45 }]}
            placeholder="Enter email"
            placeholderTextColor={COLORS.darkPlaceHolder}
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoFocus={true}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            placeholderTextColor={COLORS.darkPlaceHolder}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <View
            style={{
              marginTop: 0,
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "flex-start",
              paddingLeft: 10,
            }}
          >
            <Text
              style={{
                color: COLORS.darkText,
                fontWeight: "600",
                fontSize: windowHeight * 0.0175,
              }}
            >
              Don't have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text
                style={{
                  color: COLORS.tertiary,
                  fontWeight: "600",
                  fontSize: windowHeight * 0.0175,
                }}
              >
                {" "}
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              login(email, password);
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: COLORS.darkText,
                fontSize: 18,
              }}
            >
              {" "}
              Log In
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <StatusBar barStyle="light-content" />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkBg,
  },
  title: {
    fontSize: windowHeight * 0.045,
    fontWeight: "bold",
    color: COLORS.secondary,
    alignSelf: "flex-start",
    paddingBottom: windowHeight * 0.021,
    paddingLeft: "12%",
  },
  input: {
    backgroundColor: COLORS.darkButton,
    color: COLORS.darkText,
    marginBottom: windowHeight * 0.024,
    fontSize: 16,
    borderRadius: 10,
    height: windowHeight * 0.059,
    padding: "4.75%",
    paddingLeft: "6.5%",
  },
  backImage: {
    width: "100%",
    height: "80%",
    position: "absolute",
    top: 0,
    resizeMode: "cover",
  },
  whiteSheet: {
    width: "100%",
    height: "36%",
    position: "absolute",
    bottom: 0,
    backgroundColor: COLORS.darkBg,
    borderTopRightRadius: windowWidth * 0.2,
  },
  form: {
    flex: 1,
    justifyContent: "flex-end",
    marginHorizontal: "7.5%",
  },
  button: {
    backgroundColor: COLORS.primary,
    height: windowHeight * 0.07,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: windowHeight * 0.012,
    marginBottom: windowHeight * 0.05,
  },
});
