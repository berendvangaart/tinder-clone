import React from 'react';
import {StyleSheet, Text, TextInput, View} from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import {defaultStyles} from "../styles";
import FormField from "../Components/form-field/FormField";

const ProfileDetail = ({navigation}) => {
    return (
        <View style={styles.componentContainer}>

            <Text style={styles.title}>Profile details</Text>

            <View style={styles.inputContainer}>
                <FormField title={'Password'} />
                <FormField title={'email'} />
                <FormField title={'Linkedin'} />
                <FormField title={'GitHub'} />
                <FormField title={'Phone'} />
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