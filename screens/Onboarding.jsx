import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import {defaultStyles} from "../styles";

const Onboarding = () => {

    return (
        <View style={styles.componentContainer}>
            <Text style={styles.title}>Profile details</Text>

            {/*<Pressable style={styles.button}>*/}
            {/*    <Text style={styles.buttonText}>Sign in</Text>*/}
            {/*</Pressable>*/}

        </View>
    );

};


export default Onboarding;

const styles = StyleSheet.create({
    ...defaultStyles,
    title: {
      ...defaultStyles.title,
      marginTop: 70,
    }


});