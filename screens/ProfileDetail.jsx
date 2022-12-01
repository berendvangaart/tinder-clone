import React from 'react';
import {StyleSheet, Text, TextInput, View} from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import {defaultStyles} from "../styles";

const ProfileDetail = ({navigation}) => {
    return (
        <View style={styles.componentContainer}>
            <Text style={styles.title}>Profile details</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    // value={text}
                    // onChange={onChangeText}
                />
                <TextInput
                    style={styles.input}
                    // value={text}
                />
                <TextInput
                    style={styles.input}
                    // value={text}
                />
                <TextInput
                    style={styles.input}
                    // value={text}
                />

                <TextInput
                    style={styles.input}
                    placeholder={'test'}
                    // value={text}
                />
            </View>

            <Pressable style={styles.button} onPress={() => navigation.navigate('Swipe')}>
                <Text style={styles.buttonText}>Sign in</Text>
            </Pressable>

        </View>
    );
};

export default ProfileDetail;


const styles = StyleSheet.create({
    ...defaultStyles,
    title: {
        ...defaultStyles.title,
        marginTop: 70,
    },
    inputContainer: {
        ...defaultStyles.inputContainer,
        marginTop: 50,
    },
    imgContainer: {
        width: '100%',
        alignItems: "center",
    },
    dots: {
        marginTop: 25
    },
    button: {
        ...defaultStyles.button,
        marginTop: 50
    }
});