import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontFamily: 'BarlowCondensed-SemiBoldItalic',
    },
    inputName: {
        fontSize: 20,
        backgroundColor: '#fff',
        marginVertical: 10,
        borderRadius: 5,
        height: 50,
    },
    linkText: {
        color: '#2e78b7',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    error: {
        color: '#FF0000',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})