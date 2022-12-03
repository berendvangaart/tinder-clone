import React, {useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import {defaultStyles} from "../styles";
import * as ImagePicker from 'expo-image-picker';
import FormField from "../Components/form-field/FormField";
import {onboardingValidation} from "../util/util";

/**
 * todo - form validation
 * todo - default img
 * todo - add img icon
 */
const Onboarding = ({navigation}) => {
    const [image, setImage] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastname] = useState('');
    const [bio, setBio] = useState('');
    const [checked, setChecked] = useState(false)

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const handleSubmit = () => {
        setChecked(true)
        if (onboardingValidation(firstName, lastName).length === 0) navigation.navigate('Profile-detail')
    }

    return (
        <View style={styles.componentContainer}>
            <Text style={styles.title}>Profile details</Text>

            <View style={styles.imgContainer}>
                <Button title="Pick an image" onPress={pickImage}/>
                {image ? <Image source={{uri: image}} style={styles.img}/> :
                    <Image source={require('../assets/photo.png')} style={styles.img}/>}
            </View>

            <View style={styles.inputContainer}>
                <FormField title={'first name'} text={firstName} handleChange={setFirstName}
                           valid={!checked || (checked && !onboardingValidation(firstName, lastName).includes('firstName'))}/>

                <FormField title={'last name'} text={lastName} handleChange={setLastname}
                           valid={!checked || (checked && !onboardingValidation(firstName, lastName).includes('lastName'))}/>
                <FormField title={'bio'} text={bio} handleChange={setBio}/>
            </View>

            <View style={styles.imgContainer}>
                <Image style={styles.dots} source={require('../assets/dots-left.png')} alt=""/>
            </View>

            <Pressable style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
        </View>
    );

};


export default Onboarding;

const styles = StyleSheet.create({
    ...defaultStyles,
    title: {
        ...defaultStyles.title,
        marginTop: 70,
    },
    imgContainer: {
        width: '100%',
        alignItems: "center",
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 25,
    },
    bioInput: {
        ...defaultStyles.input,
        height: 140
    },
    dots: {
        marginTop: 25
    },
    button: {
        ...defaultStyles.button,
        marginTop: 10
    }
});