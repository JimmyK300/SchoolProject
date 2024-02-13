const COLORS = {
  primary: "#4f8951",
  secondary: "#80b4ea",
  tertiary: "#F69023",

  gray: "#6d756f",
  gray2: "#C1C0C8",
  bubbleGray: "#C5C6C7",

  white: "#F3F4F8",
  lightWhite: "#FAFAFC",

  darkText: "#e0e0e0",
  darkBg: "#1e1e1e",
  darkButton: "#282828",
  darkPlaceHolder: "#979797",
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
