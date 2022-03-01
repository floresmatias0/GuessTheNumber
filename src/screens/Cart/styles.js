import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 25
    },
    list: {
        flex: 1
    },
    footer: {
        padding: 12,
        bottomTopColor: "#ccc",
        borderTopWidth: 1,
    },
    confirm: {
        backgroundColor: "#00a680",
        padding: 12,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    total: {
        flexDirection: "row",
    },
    text: {
        fontSize: 18,
        fontFamily: 'BarlowCondensed-SemiBoldItalic',
        color: "#212121",
    }
});