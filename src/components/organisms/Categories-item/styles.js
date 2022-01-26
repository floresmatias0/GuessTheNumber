import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: height / 4,
      borderRadius: 6,
      margin: 8,
      justifyContent: "center",
    },
    containerTouchable: {
        flex: 1,
        borderRadius: 6,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: 8,
    },
    title: {
        fontFamily: 'BarlowCondensed-SemiBoldItalic',
        fontSize: 22,
        color: "#fff",
        fontWeight: "bold",
        backgroundColor: "#0000007f"
    },
    image: {
        flex: 1,
        justifyContent: "center",
      }
  });