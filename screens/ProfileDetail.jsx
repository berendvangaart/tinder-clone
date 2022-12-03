import React, {useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import {defaultStyles} from "../styles";
import FormField from "../Components/form-field/FormField";
import {profileDetailValidation} from "../util/util";


const ProfileDetail = ({navigation}) => {
    const [password, setPassWord] = useState('');
    const [email, setEmail] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [phone, setPhone] = useState('');
    const [checked, setChecked] = useState(false)

    const handleSubmit = () => {
        setChecked(true)
        if (profileDetailValidation(password, email,linkedin, jobTitle).length === 0)
        navigation.navigate('Swipe')
    }

    return (
        <View style={styles.componentContainer}>

            <Text style={styles.title}>Profile details</Text>

            <View style={styles.inputContainer}>
                <FormField title={'Password'} text={password} handleChange={setPassWord}
                valid={!checked || (checked && !profileDetailValidation(password, email,linkedin, jobTitle).includes('password'))}/>
                <FormField title={'email'} text={email} handleChange={setEmail}
                valid={!checked || (checked && !profileDetailValidation(password, email,linkedin, jobTitle).includes('email'))}/>
                <FormField title={'Linkedin'} text={linkedin} handleChange={setLinkedin}
                valid={!checked || (checked && !profileDetailValidation(password, email,linkedin, jobTitle).includes('linkedin'))}/>
                <FormField title={'Job title'} text={jobTitle} handleChange={setJobTitle}
                           valid={!checked || (checked && !profileDetailValidation(password, email,linkedin, jobTitle).includes('email'))}/>
                <FormField title={'Phone'} text={phone} handleChange={setPhone}/>
            </View>

            <View style={styles.imgContainer}>
                <Image style={styles.dots} source={require('../assets/dots-right.png')} alt=""/>
            </View>

            <Pressable style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Sign inn</Text>
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
        marginTop: 55
    },
    button: {
        ...defaultStyles.button,
        marginTop: 12
    }
});