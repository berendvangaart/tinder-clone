import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const Home = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Image source={require('../assets/photo.png')}/>
            <Text style={styles.title}>Discover</Text>
            <Text>Discover new professionals, match up and</Text>
            <Text>collaborate together</Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Onboarding')}>
                <Text style={styles.buttonText}>Create an account</Text>
            </Pressable>
            <Text onPress={() => navigation.navigate('Login')}>Already have an account? <Text style={styles.span}> Sign In</Text></Text>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        color: "#E94057",
        fontWeight: "500",
        margin: 40
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        width: 295,
        height: 56,
        elevation: 3,
        backgroundColor: '#EFB837',
        margin: 30
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
    span: {
        color: "#E94057"
    }
});