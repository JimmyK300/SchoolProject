// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { View, Text, SafeAreaView, FlatList, TextInput } from "react-native";
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// function ChatScreenNoHeader() {
//   return (
//     <View>
//       <View>
//         <Text>chat</Text>
//       </View>
//       <View>
//         <TextInput placeholder="write a message"></TextInput>
//       </View>
//     </View>
//   );
// }

// const handdleSubmit = async () => {
//   if (!state.result[0]) return;
//   try {
//     fetch data from chat Gpt
//   } catch (e) {
//     console.log(e);
//   }
// };

// main();

// function chatDisplay() {}

// function ChatScreen() {
//   const Stack = createMaterialTopTabNavigator();
//   const chatName = "Chat GPT";
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="ChatInside"
//         component={ChatScreenNoHeader}
//         options={{ title: chatName }}
//       />
//     </Stack.Navigator>
//   );
// }

// export default ChatScreen;

import React, { useState, createContext, useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, ActivityIndicator } from "react-native";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebase";
import Login from "./Login";
import Signup from "./SignUp";
import Chat from "./Chat";
import Home from "./Home";

const Stack = createStackNavigator();

export default function ChatScreen() {
  return (
    <Stack.Navigator defaultScreenOptions={Home}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Chats" component={Chat} />
    </Stack.Navigator>
  );
}
