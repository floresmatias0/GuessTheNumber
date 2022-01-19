import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    containerGame: {
        flexGrow: 0.5,
        marginHorizontal: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0000007f',
        borderRadius: 5
    },
    text: {
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'BarlowCondensed-BoldItalic',
        marginVertical: 10,
        color: '#fff'
    },
    containerButtons: {
        flexDirection: 'row'
    },
    underline: {
        textDecorationLine: 'underline',
        textDecorationColor: "#009688",
        textDecorationStyle: 'dotted'
    }
})