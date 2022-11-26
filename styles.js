import {StyleSheet} from "react-native";

export const defaultStyles = StyleSheet.create({
    componentContainer: {
        marginTop: 40,
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 34,
        marginLeft: 32,
        color: '#5F5F5F',
        fontWeight: "500"
    }, inputContainer: {
        marginLeft: 32,
    },
    input: {
        height: 40,
        marginTop: 25,
        width: 325,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#5F5F5F',
        padding: 10,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        width: 325,
        height: 56,
        elevation: 3,
        backgroundColor: '#EFB837',
        margin: 30,
        marginTop: 120,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
});