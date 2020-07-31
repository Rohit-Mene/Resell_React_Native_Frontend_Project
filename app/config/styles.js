import { Platform } from "react-native";

import colors from "../config/colors";

export default {
  colors: colors, // or you can simply write colors,
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.dark,
  },
};
