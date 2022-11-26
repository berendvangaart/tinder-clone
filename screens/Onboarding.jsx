import React, {useState} from 'react';
import {Button, Image, StyleSheet, Text, TextInput, View} from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import {defaultStyles} from "../styles";
import * as ImagePicker from 'expo-image-picker';



const Onboarding = () => {
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
    };

    return (
        <View style={styles.componentContainer}>
            <Text style={styles.title}>Profile details</Text>

            {/*<Pressable style={styles.button}>*/}
            {/*    <Text style={styles.buttonText}>Sign in</Text>*/}
            {/*</Pressable>*/}

             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Pick an image from camera roll" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />}
        </View>

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