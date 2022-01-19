import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerCardName: {
        flexGrow: 0.5,
        marginHorizontal: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0000007f',
        borderRadius: 5
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        color: '#fff',
        fontFamily: 'BebasNeue-Regular',
        marginVertical: 10
    },
    textName: {
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'BarlowCondensed-BoldItalic',
        marginVertical: 10,
        color: '#fff'
    },
    inputName: {
        fontSize: 20,
        backgroundColor: '#fff',
        width: 200,
        marginVertical: 10,
        borderRadius: 5,
        height: 50,
    }
})