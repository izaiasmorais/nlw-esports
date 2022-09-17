import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginRight: 24,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 32,
    marginTop: 28,
    justifyContent: "space-between",
  },
  logo: {
    width: 72,
    height: 40,
  },
  right: {
    width: 20,
    height: 20,
  },
  cover: {
    width: 400,
    height: 200,
    borderRadius: 8,
    marginTop: 40,
    resizeMode: "contain",
  },
  contentList: {
    paddingTop: 32,
    paddingLeft: 32,
    alignItems: "flex-start",
  },
  containerList: {
    width: "100%",
  },
  empty: {
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
  emptyListContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
