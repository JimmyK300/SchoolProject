import "dotenv/config";

export default {
  expo: {
    name: "TheLostSurvivor",
    slug: "TheLostSurvivor",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
        // package: "com.school.project",
        // googleServicesFile: "./google-services.json",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "a3d48b08-f64a-4d42-a089-fa824e1003e5",
      },
    },
  },
};
