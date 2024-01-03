// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   Button,
//   TouchableOpacity,
// } from "react-native";
// import { SliderBox } from "react-native-image-slider-box";
// import { useState } from "react";

// import { COLORS, FONT, SIZES } from "../../constants/index.js";
// import { SafeAreaView } from "react-native-safe-area-context";
// import PrimaryButton from "../components/Button.js";

// function HomeScreen() {
//   const [selected, setSelected] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(-1);
//   const slides = [
//     require("../images/Player1.png"),
//     require("../images/Player2.png"),
//   ];
//   const userName = "Jimmy";

//   const enableButton = (i) => {
//     setSelected(true);
//     setCurrentIndex(i);
//   };
//   const disableButton = () => {
//     setSelected(false);
//     setCurrentIndex(-1);
//   };
//   const handleImgClick = (i) => {
//     selected ? disableButton() : enableButton(i);
//   };
//   return (
//     <SafeAreaView>
//       <Text style={styles.container}>Hi {userName}</Text>

//       {/* <Image
//         source={require("../images/Player2.png")}
//         style={styles.mainImage}
//       /> */}
//       <View style={styles.imgContainer}>
//         <SliderBox
//           images={slides}
//           dotColor={COLORS.primary}
//           inactiveDotColor={COLORS.gray}
//           ImageComponentStyle={styles.sliderBox}
//           sliderBoxHeight={"90%"}
//           circleloop
//           resizeMode={"contain"}
//           onCurrentImagePressed={(index) => handleImgClick(index)}
//         />
//       </View>
//       <View style={{ alignItems: "center" }}>
//         <TouchableOpacity
//           style={selected ? styles.selectButtonDisabled : styles.selectButton}
//           onPress={() => {}}
//           aria-disabled={selected}
//         >
//           <Text>SELECT</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     fontSize: SIZES.xLarge,
//     padding: 15,
//   },
//   mainImage: {
//     width: "100%",
//     height: "74%",
//     resizeMode: "contain",
//   },
//   imgContainer: {
//     height: "72%",
//     alignItems: "center",
//   },
//   sliderBox: {
//     marginTop: 15,
//     height: "99%",
//   },
//   selectButton: {
//     margin: 10,
//     padding: 20,
//     backgroundColor: COLORS.primary,
//     borderRadius: 30,
//   },
//   selectButtonDisabled: {
//     // backgroundColor: COLORS.gray2,
//     // color:
//     // margin: 10,
//     // padding: 20,
//     // borderRadius: 20,
//     margin: 10,
//     padding: 20,
//     backgroundColor: COLORS.primary,
//     borderRadius: 30,
//     opacity: 0.5,
//   },
// });

// export default HomeScreen;

import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Divider, List } from "react-native-paper";

import { AuthContext } from "../../config/authProvider";
import { chatkitty } from "../../chatkitty";
import Loading from "../components/Loading";

export default function HomeScreen({ navigation }) {
  const [channels, setChannels] = useState([]);
  const [loading, setLoading] = useState(true);

  const isFocused = useIsFocused();

  useEffect(() => {
    let isCancelled = false;

    chatkitty.listChannels({ filter: { joined: true } }).then((result) => {
      if (!isCancelled) {
        setChannels(result.paginator.items);

        if (loading) {
          setLoading(false);
        }
      }
    });

    return () => {
      isCancelled = true;
    };
  }, [isFocused, loading]);

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <View style={styles.container}>
      <FlatList
        data={channels}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({ item }) => (
          <List.Item
            title={item.name}
            description={item.type}
            titleNumberOfLines={1}
            titleStyle={styles.listTitle}
            descriptionStyle={styles.listDescription}
            descriptionNumberOfLines={1}
            onPress={() => navigation.navigate("Chat", { channel: item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    flex: 1,
  },
  listTitle: {
    fontSize: 22,
  },
  listDescription: {
    fontSize: 16,
  },
});
