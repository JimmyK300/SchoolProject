import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { IconButton, Title } from "react-native-paper";

import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import Loading from "../components/Loading";
import { AuthContext, AuthProvider } from "../../config/authProvider";

export default function SignupScreen({ navigation }) {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register, loading } = useContext(AuthContext);

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <View style={styles.container}>
      <Title style={styles.titleText}>Let's get started!</Title>
      <FormInput
        labelName="Display Name"
        value={displayName}
        autoCapitalize="none"
        onChangeText={(userDisplayName) => setDisplayName(userDisplayName)}
      />
      <FormInput
        labelName="Email"
        value={email}
        autoCapitalize="none"
        onChangeText={(userEmail) => setEmail(userEmail)}
      />
      <FormInput
        labelName="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={(userPassword) => setPassword(userPassword)}
      />
      <FormButton
        title="Signup"
        modeValue="contained"
        labelStyle={styles.loginButtonLabel}
        onPress={() => register(displayName, email, password)}
      />
      <FormButton
        title="Login here"
        modeValue="text"
        uppercase={false}
        labelStyle={styles.navButtonText}
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10,
  },
  loginButtonLabel: {
    fontSize: 22,
  },
  navButtonText: {
    fontSize: 18,
  },
  navButton: {
    marginTop: 10,
  },
});
