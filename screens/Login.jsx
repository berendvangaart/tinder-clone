import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const Login = () => {
    const [text, onChangeText] = useState("example");

    return (
        <View style={styles.componentContainer}>
            <Text style={styles.title}>Sign in</Text>

            <TextInput
                style={styles.input}
                value={text}
            />
            <TextInput
                style={styles.input}
                value={text}
            />


            <Pressable style={styles.button} >
                <Text style={styles.buttonText}>Create an account</Text>
            </Pressable>

        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
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
        marginTop: 150,
        color: '#5F5F5F',
        fontWeight: "500"
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
        margin: 30
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
    input: {
        height: 40,
        margin: 12,
        width: 325,
        marginLeft: 32,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#5F5F5F',
        padding: 10,
    },
});