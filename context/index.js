import React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import { AuthProvider } from "./AuthProvider";
// import { NotificationProvider } from "./NotificationProvider";
import Routes from "./Routes";

export default function Providers() {
  return (
    <PaperProvider theme={theme}>
      <AuthProvider>
        {/* <NotificationProvider>
          <Routes />
        </NotificationProvider> */}
        <Routes />
      </AuthProvider>
    </PaperProvider>
  );
}

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#5b3a70",
    accent: "#50c878",
    background: "#f7f9fb",
  },
};
