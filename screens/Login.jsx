import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const Login = ({navigation}) => {
    const [text, onChangeText] = useState("example");

    return (
        <View style={styles.componentContainer}>
            <Text style={styles.title}>Sign in</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={text}
                    onChange={onChangeText}
                />
                <TextInput
                    style={styles.input}
                    value={text}
                />
            </View>

            <Pressable style={styles.button} onPress={() => navigation.navigate('Swipe')}>
                <Text style={styles.buttonText}>Sign in</Text>
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
        margin: 30,
        marginTop: 120,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
    inputContainer: {
        marginTop: 130,
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
});