import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerDetail: {
        height: 200,
        borderRadius: 6,
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF5733',
        color: '#fff'
    },
    containerText: {
        flexGrow: 0.5,
        // backgroundColor: "#0000003f",
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20
    },
    text: {
        fontFamily: 'BarlowCondensed-SemiBoldItalic',
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        textAlign: 'center',
        marginHorizontal: 5
    },
    title: {
        fontFamily: 'BarlowCondensed-SemiBoldItalic',
        fontSize: 24,
        color: "#fff",
        alignSelf: "stretch",
        backgroundColor: '#A6402A',
        fontWeight: "bold",
        textAlign: 'center',
    }
});