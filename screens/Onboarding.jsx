import React, {useState} from 'react';
import {Button, Image, StyleSheet, Text, TextInput, View} from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import {defaultStyles} from "../styles";
import * as ImagePicker from 'expo-image-picker';


/**
 * todo - form validation
 * todo - default img
 * todo - add img icon
 */
const Onboarding = ({navigation}) => {
    const [image, setImage] = useState(null);

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

        alert(result.assets[0].uri)
    };

    return (
        <View style={styles.componentContainer}>
            <Text style={styles.title}>Profile details</Text>

            <View style={styles.imgContainer}>
                <Button title="Pick an image" onPress={pickImage}/>
                {image ? <Image source={{uri: image}} style={styles.img}/> :
                    <Image source={require('../assets/photo.png')} style={styles.img}/>}
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    // value={text}
                    //onChange={onChangeText}
                />
                <TextInput
                    style={styles.input}
                    // value={text}
                />

                <TextInput
                    style={styles.bioInput}
                    // value={text}
                />
            </View>

            <View style={styles.imgContainer}>
                <Image style={styles.dots} source={require('../assets/dots-left.png')} alt=""/>
            </View>

            <Pressable style={styles.button} onPress={() => navigation.navigate('Profile-detail')}>
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