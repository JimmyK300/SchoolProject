import HomeScreen from "../screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState, createContext, useContext, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { COLORS, FONT, SIZES, SHADOWS } from "../constants";
import SuperSvg from "../assets/components/SuperSvg";
import { StyleSheet } from "react-native";
import Home from "../assets/screens/Home";
import CreateChannelScreen from "../screens/CreateChannelScreen";
import { IconButton } from "react-native-paper";
import ChatScreen from "../assets/screens/Chat";
import { NavigationContainer } from "@react-navigation/native";
import AccountScreen from "../assets/screens/AccountScreen";
import BrowseChannelsScreen from "../assets/screens/BrowseChannelScreen";

const Stack = createStackNavigator();
const ChatStack = createStackNavigator();
const ChatComponent = createStackNavigator();
const HomeStacks = createBottomTabNavigator();
const Icon = require("../assets/icons/paths.json");

function HomeMessagingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inbox" component={Home} />
    </Stack.Navigator>
  );
}

function ChatComponentOutside() {
  return (
    <ChatStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#5b3a70",
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontSize: 22,
        },
      }}
    >
      <ChatStack.Screen
        name="ChatHome"
        component={Home}
        options={({ navigation }) => ({
          headerRight: () => (
            <IconButton
              icon="plus"
              size={28}
              iconColor="#ffffff"
              onPress={() => navigation.navigate("BrowseChannels")}
            />
          ),
        })}
      />
      <ChatStack.Screen
        name="New"
        component={CreateChannelScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <IconButton
              icon="close-circle"
              size={36}
              iconColor="#ffffff"
              onPress={() => navigation.goBack()}
            />
          ),
          headerLeft: () => {},
        })}
      />
      <ChatStack.Screen
        name="BrowseChannels"
        component={BrowseChannelsScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <IconButton
              icon="plus"
              size={28}
              iconColor="#ffffff"
              onPress={() => navigation.navigate("CreateChannel")}
            />
          ),
        })}
      />
      <ChatStack.Screen
        name="Chat"
        component={ChatScreen}
        options={({ route }) => ({
          title: route.params.channel.name,
        })}
      />
    </ChatStack.Navigator>
  );
}

export default function HomeStack() {
  return (
    <HomeStacks.Navigator
      screenOptions={{ headerShown: false }}
      independent={true}
    >
      <HomeStacks.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.gray,
          tabBarAllowFontScaling: true,
          tabBarIcon: ({ focused }) => (
            <SuperSvg
              height={130}
              width={130}
              path={Icon["home"]}
              color={focused ? COLORS.primary : COLORS.gray}
              viewBox="-38 -39 100 100"
            />
          ),
        }}
      />
      <HomeStacks.Screen
        name="Game"
        component={CreateChannelScreen}
        options={{
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.gray,
          tabBarAllowFontScaling: true,
          tabBarIcon: ({ focused }) => (
            <SuperSvg
              height={52}
              width={52}
              path={Icon["game8"]}
              color={focused ? COLORS.primary : COLORS.gray}
              viewBox="-175 -200 850 850"
            />
          ),
        }}
      />
      <HomeStacks.Screen
        name="Chats"
        component={ChatComponentOutside}
        options={{
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.gray,
          tabBarAllowFontScaling: true,
          tabBarIcon: ({ focused }) => (
            <SuperSvg
              height={130}
              width={130}
              path={Icon["chat"]}
              color={focused ? COLORS.primary : COLORS.gray}
              viewBox="-38 -39 100 100"
            />
          ),
        }}
      />
      <HomeStacks.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.gray,
          tabBarAllowFontScaling: true,
          tabBarIcon: ({ focused }) => (
            <SuperSvg
              height={130}
              width={130}
              path={Icon["account2"]}
              color={focused ? COLORS.primary : COLORS.gray}
              viewBox="-38 -39 100 100"
            />
          ),
        }}
      />
    </HomeStacks.Navigator>
  );
}

const styles = StyleSheet.create({});
