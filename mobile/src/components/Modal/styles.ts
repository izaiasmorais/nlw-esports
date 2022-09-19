import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.OVERLAY,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    width: 350,
    backgroundColor: THEME.COLORS.SHAPE,
  },
  checkButton: {
    marginBottom: 32,
  },
  closeIcon: {
    alignSelf: "flex-end",
    margin: 16,
  },
  header: {
    alignItems: "center",
    marginBottom: 32,
  },
  add: {
    color: THEME.COLORS.TEXT,
    marginBottom: 16,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
  },
  discordButton: {
    width: 231,
    height: 48,
    color: THEME.COLORS.TEXT,
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    fontSize: THEME.FONT_SIZE.MD,
    marginBottom: 32,
  },
  discord: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
  },
});
