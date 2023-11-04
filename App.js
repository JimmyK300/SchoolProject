import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import StartScreen from "./assets/screens/StartScreen";
import HomeScreen from "./assets/screens/HomeScreen";
import IconButton from "./assets/components/IconButton";
import HomeRow from "./assets/components/HomeRow";
//import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatScreen from "./assets/screens/ChatScreen";
import React, { useState, createContext, useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import Login from "./assets/screens/Login";
import Signup from "./assets/screens/SignUp";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chat from "./assets/screens/Chat";
import Home from "./assets/screens/Home";
import { COLORS, FONT, SIZES, SHADOWS } from "./constants/theme";
import { Path, Svg } from "react-native-svg";
const Stack = createStackNavigator();
const AuthenticatedUserContext = createContext({});
// export default function App() {
//   const homeIcon = require("./assets/icons/paths.json");
//   return (
//     <>
//       {/* <View style={{ flex: 1 }}>
//           <HomeRow />
//         </View> */}
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="Home" component={HomeScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//       <NavigationContainer>
//         <HomeScreen />
//       </NavigationContainer>
//     </>
//   );
// }

const HomeStack = createBottomTabNavigator();
// const Messaging = createNativeStackNavigator();
// const HomeMessaging = createStackNavigator();
const BottomStack = createNativeStackNavigator();
const Icon = require("./assets/icons/paths.json");

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

function RootNavigator() {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = onAuthStateChanged(
      auth,
      async (authenticatedUser) => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        setIsLoading(false);
      }
    );
    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, [user]);
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <HomeComponentStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

function HomeComponentStack() {
  return (
    <NavigationContainer
      independent={true}
      //style={inchat && { display: "none" }}
    >
      <BottomStack.Navigator screenOptions={{ headerShown: false }}>
        <BottomStack.Screen name="Back" component={BottomNavigator} />
        <BottomStack.Screen name="Chat" component={MessagingStack} />
      </BottomStack.Navigator>
    </NavigationContainer>
    // <ChatScreen />
  );
}

function HomeMessagingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inbox" component={Home} />
    </Stack.Navigator>
  );
}

function MessagingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Username" component={Chat} />
    </Stack.Navigator>
  );
}

function SuperSvg(props) {
  return (
    <Svg
      height={props.height}
      width={props.width}
      style={styles.svg}
      viewBox={props.viewBox}
    >
      <Path
        fill={props.focused ? COLORS.primary : COLORS.gray}
        d={props.path}
      />
    </Svg>
  );
}

function BottomNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{ headerShown: false }}
      independent={true}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.gray,

          tabBarAllowFontScaling: true,
          tabBarIcon: ({ focused }) => (
            <SuperSvg
              height={150}
              width={150}
              path={Icon["home"]}
              focused={focused}
              viewBox="-38 -39 100 100"
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="Game"
        component={HomeScreen}
        options={{
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.gray,

          tabBarAllowFontScaling: true,
          tabBarIcon: ({ focused }) => (
            <SuperSvg
              height={60}
              width={60}
              path={Icon["game8"]}
              focused={focused}
              viewBox="-175 -200 850 850"
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="Chats"
        component={HomeMessagingStack}
        options={{
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.gray,

          tabBarAllowFontScaling: true,
          tabBarIcon: ({ focused }) => (
            <SuperSvg
              height={150}
              width={150}
              path={Icon["chat"]}
              focused={focused}
              viewBox="-38 -39 100 100"
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="Account"
        component={HomeScreen}
        options={{
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.gray,

          tabBarAllowFontScaling: true,
          tabBarIcon: ({ focused }) => (
            <SuperSvg
              height={150}
              width={150}
              path={Icon["account2"]}
              focused={focused}
              viewBox="-38 -39 100 100"
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
}

function App() {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator />
    </AuthenticatedUserProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#blue",
    justifyContent: "flex-end",
  },
  navigator: {
    backgroundColor: COLORS.primary,
  },
});
