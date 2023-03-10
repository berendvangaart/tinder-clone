import React, {useState} from 'react';
import {TextInput, StyleSheet, View, Text} from "react-native";

const FormField = ({title, placeholder = '', handleChange, text = '', valid = true}) => {

    return (<View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text></View>

        {title === 'bio' ? (
            <TextInput
                style={styles.bio}
                value={text}
                onChangeText={handleChange}
                multiline={true}
                autoCapitalize='none'
                autoCorrect={false}
            />
        ) : (
            <TextInput
                secureTextEntry={title === 'password'}
                style={ valid ? styles.input : styles.inputInvalid}
                value={text}
                onChangeText={handleChange}
                autoCapitalize='none'
                autoCorrect={false}
            />
        )}
        </View>);
};

export default FormField;

const styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: '#FFFFFF',
        position: "absolute",
        marginLeft: 10,
        top: 16,
        zIndex: 1,
        paddingLeft: 3,
        paddingRight: 3,
    }, title: {
        marginLeft: 1,
        color: '#5F5F5F',
        fontWeight: '450',
    }, input: {
        height: 50,
        marginTop: 25,
        width: 325,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#999999',
        color: '#5F5F5F',
        padding: 10,
    } ,inputInvalid : {
        height: 50,
        marginTop: 25,
        width: 325,
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        color: '#5F5F5F',
        borderColor: '#e81616',
    }, bio : {
        height: 140,
        marginTop: 25,
        width: 325,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#999999',
        color: '#5F5F5F',
        padding: 10,
    }
})