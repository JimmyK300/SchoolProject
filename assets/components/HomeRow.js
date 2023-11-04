import React from "react";
import { View, StyleSheet } from "react-native";
import IconButton from "./IconButton";
import GameButton from "./GameButton";
import { useState } from "react";

function HomeRow() {
  const Icon = require("../icons/paths.json");
  const [pressed, setPressed] = useState(0);

  return (
    <View style={styles.container}>
      <IconButton
        height={150}
        width={150}
        id={pressed === 1 ? 1 : 0}
        text={"Home"}
        path={Icon["home"]}
        clickHandler={() => setPressed(1)}
      />
      <GameButton
        height={150}
        width={150}
        id={pressed === 2 ? 1 : 0}
        text={"Play"}
        path={Icon["gamefill"]}
        clickHandler={() => setPressed(2)}
      />
      <IconButton
        height={150}
        width={150}
        id={pressed === 3 ? 1 : 0}
        text={"Chats"}
        path={Icon["chat"]}
        clickHandler={() => setPressed(3)}
      />
      <IconButton
        height={150}
        width={150}
        id={pressed === 4 ? 1 : 0}
        text={"Accounts"}
        path={Icon["account2"]}
        clickHandler={() => setPressed(4)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    height: "10%",
    backgroundColor: "#dddddd",
    borderTopWidth: 1,
    position: "relative",
  },
});

export default HomeRow;
