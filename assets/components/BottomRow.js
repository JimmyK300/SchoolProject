import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import StartScreen from "./assets/screens/StartScreen";
import HomeScreen from "./assets/screens/HomeScreen";
import IconButton from "./assets/components/IconButton";
import HomeRow from "./assets/components/HomeRow";
//import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createBottomTabNavigator();

function BottomRow() {
  const Icon = require("../icons/paths.json");
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={ScreenOptions}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={(tabBarIcon = {})}
        />
        <Stack.Screen name="Game" component={HomeScreen} />
        <Stack.Screen name="Chat" component={HomeScreen} />
        <Stack.Screen name="Account" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const ScreenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
};

export default BottomRow;
