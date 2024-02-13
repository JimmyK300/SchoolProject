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
  Dimensions,
} from "react-native";
import { AuthContext } from "../context/AuthProvider";
import { COLORS, FONT, SHADOWS, SIZES } from "../constants";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const { register, loading } = useContext(AuthContext);

  // if (loading) {
  //   return <Loading />;
  // }

  //   return (
  //     <View style={styles.container}>
  //       <Title style={styles.titleText}>Welcome!</Title>
  //       <FormInput
  //         labelName="Email"
  //         value={email}
  //         autoCapitalize="none"
  //         onChangeText={(userEmail) => setEmail(userEmail)}
  //       />
  //       <FormInput
  //         labelName="Password"
  //         value={password}
  //         secureTextEntry={true}
  //         onChangeText={(userPassword) => setPassword(userPassword)}
  //       />
  //       <FormButton
  //         title="Login"
  //         modeValue="contained"
  //         labelStyle={styles.loginButtonLabel}
  //         onPress={() => {
  //           // TODO
  //         }}
  //       />
  //       <FormButton
  //         title="Sign up here"
  //         modeValue="text"
  //         uppercase={false}
  //         labelStyle={styles.navButtonText}
  //         onPress={() => navigation.navigate("Signup")}
  //       />
  //     </View>
  //   );
  // }

  // const styles = StyleSheet.create({
  //   container: {
  //     backgroundColor: "#f5f5f5",
  //     flex: 1,
  //     justifyContent: "center",
  //     alignItems: "center",
  //   },
  //   titleText: {
  //     fontSize: 24,
  //     marginBottom: 10,
  //   },
  //   loginButtonLabel: {
  //     fontSize: 22,
  //   },
  //   navButtonText: {
  //     fontSize: 16,
  //   },
  // });

  const backImage = require("../assets/images/cover.jpg");

  return (
    <View style={styles.container}>
      <Image source={backImage} style={styles.backImage} />
      <View style={styles.whiteSheet}>
        <View style={styles.form}>
          <Text style={styles.title}>Sign Up</Text>
          <TextInput
            style={[styles.input, { borderTopRightRadius: 50 }]}
            placeholder="Username"
            placeholderTextColor={COLORS.darkPlaceHolder}
            autoCapitalize="none"
            value={displayName}
            autoFocus={true}
            autoCorrect={false}
            onChangeText={(text) => setDisplayName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter email"
            placeholderTextColor={COLORS.darkPlaceHolder}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
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
              Already have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  color: COLORS.tertiary,
                  fontWeight: "600",
                  fontSize: windowHeight * 0.0175,
                }}
              >
                {" "}
                Log in
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => register(displayName, email, password)}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: COLORS.darkText,
                fontSize: 18,
              }}
            >
              {" "}
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar barStyle="light-content" />
    </View>
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
    height: "45%",
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
