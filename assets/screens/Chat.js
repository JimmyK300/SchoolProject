import React, { useContext, useEffect, useState } from "react";
import { Bubble, GiftedChat } from "react-native-gifted-chat";
import {
  Composer,
  InputToolbar,
  Send,
  Actions,
} from "react-native-gifted-chat";
import {
  SafeAreaView,
  View,
  Dimensions,
  Platform,
  Text,
  TextInput,
  Image,
  StyleSheet,
} from "react-native";
import * as Device from "expo-device";

import { COLORS } from "../../constants";
import { chatkitty } from "../../chatkitty";
import Loading from "../../components/loading";
import { AuthContext } from "../../context/AuthProvider";
import InputArea from "../components/InputArea";
import SuperSvg from "../components/SuperSvg";

export default function ChatScreen({ route, navigation }) {
  const { user } = useContext(AuthContext);
  const { channel } = route.params;
  const isOldIphone = () => {
    const compare = Device.modelName.slice(7, 9);
    let isntSim = true;
    if (compare === "or" && Device.modelName === "Simulator iOS") {
      isntSim = false;
    }
    return compare === "SE" || Number(compare) <= 8 || isntSim;
  };

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadEarlier, setLoadEarlier] = useState(false);
  const [isLoadingEarlier, setIsLoadingEarlier] = useState(false);
  const [messagePaginator, setMessagePaginator] = useState(null);

  useEffect(() => {
    const startChatSessionResult = chatkitty.startChatSession({
      channel: channel,
      onMessageReceived: (message) => {
        setMessages((currentMessages) =>
          GiftedChat.append(currentMessages, [mapMessage(message)])
        );
      },
    });

    chatkitty
      .listMessages({
        channel: channel,
      })
      .then((result) => {
        setMessages(result.paginator.items.map(mapMessage));

        setMessagePaginator(result.paginator);
        setLoadEarlier(result.paginator.hasNextPage);

        setLoading(false);
      });

    return startChatSessionResult.session.end;
  }, [user, channel]);

  async function handleSend(pendingMessages) {
    await chatkitty.sendMessage({
      channel: channel,
      body: pendingMessages[0].text,
    });
  }

  async function handleLoadEarlier() {
    if (!messagePaginator.hasNextPage) {
      setLoadEarlier(false);

      return;
    }

    setIsLoadingEarlier(true);

    const nextPaginator = await messagePaginator.nextPage();

    setMessagePaginator(nextPaginator);

    setMessages((currentMessages) =>
      GiftedChat.prepend(currentMessages, nextPaginator.items.map(mapMessage))
    );

    setIsLoadingEarlier(false);
  }

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: "none",
      },
    });
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: undefined,
      });
  }, [navigation]);

  function renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: "#d3d3d3",
          },
        }}
      />
    );
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GiftedChat
        messages={messages}
        onSend={handleSend}
        user={mapUser(user)}
        loadEarlier={loadEarlier}
        isLoadingEarlier={isLoadingEarlier}
        onLoadEarlier={handleLoadEarlier}
        renderBubble={renderBubble}
        messagesContainerStyle={{ backgroundColor: COLORS.darkBg }}
        bottomOffset={isOldIphone() ? -4 : 32}
        minInputToolbarHeight={70}
        renderInputToolbar={(props) => MessengerBarContainer(props)}
      />
    </SafeAreaView>
  );
}

function mapMessage(message) {
  return {
    _id: message.id,
    text: message.body,
    createdAt: new Date(message.createdTime),
    user: mapUser(message.user),
  };
}

function mapUser(user) {
  return {
    _id: user.id,
    name: user.displayName,
    avatar: user.displayPictureUrl,
  };
}

const MessengerBarContainer = (props) => {
  const Icon = require("../icons/paths.json");

  return (
    <View style={{ backgroundColor: COLORS.darkBg, height: 200 }}>
      <View
        style={{
          flexDirection: "row",
          padding: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <Actions
          {...props}
          containerStyle={{
            backgroundColor: "white",
          }}
        /> */}
        <View style={{ marginHorizontal: 8, flex: 1, alignItems: "center" }}>
          <Composer
            {...props}
            placeholderTextColor={COLORS.darkPlaceHolder}
            placeholder="Write a message"
            textInputStyle={style.input}
            multiline={false}
          />
        </View>
        <Send
          {...props}
          alwaysShowSend={true}
          containerStyle={{ justifyContent: "center" }}
        >
          <View style={{ justifyContent: "center" }}>
            <SuperSvg
              height={50}
              width={50}
              path={Icon["send"]}
              color={COLORS.primary}
              viewBox="0 0 25 25"
            />
          </View>
        </Send>
      </View>
      <View></View>
    </View>
  );
};

// const handleOnPress = useCallbackOne(() => {
//   if (text && onSend) {
//       onSend({ text: text.trim() }, true);
//   }
// }, [text, onSend]);
// const showSend = useMemoOne(() => alwaysShowSend || (text && text.trim().length > 0), [alwaysShowSend, text]);
// if (!showSend) {
//   return null;
// }

const style = StyleSheet.create({
  input: {
    backgroundColor: COLORS.darkButton,
    color: COLORS.darkText,
    marginHorizontal: 16,
    fontSize: 16,
    borderRadius: 30,
    padding: 12,
    width: "100%",
    textAlignVertical: "center",
    lineHeight: 0,
    marginTop: 0,
    marginBottom: 0,
  },
});
