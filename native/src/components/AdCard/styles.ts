import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.SHAPE,
    width: 220,
    height: 320,
    borderRadius: 8,
    padding: 20,
    marginRight: 16,
    alignItems: "center",
  },
  button: {
    width: "100%",
    height: 36,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.COLORS.PRIMARY,
  },
  buttonTitle: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.SM,
    marginLeft: 8,
  },
});
