import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import FormField from "../Components/form-field/FormField";
import {loginValidation} from "../util/util";
import axios from 'axios';
import {useDispatch} from "react-redux";
import {setUser} from "../store/user/user.actions";


const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()


    const handleSubmit = async () => {
        setChecked(true)

        if (loginValidation(email, password).length === 0) {
            setLoading(true)

            try {
                const response = await axios({
                    method: 'POST',
                    url: 'http://localhost:8080/upload',
                    headers: {'Content-Type': 'application/json'},
                    data: {
                        "email" : email,
                        "password" : password
                    }
                });

                if (response.status === 201) {
                    dispatch(setUser(response.data))
                    navigation.navigate('Swipe') // navigate tp swipe screen
                }

            } catch (err)  {
                console.log(err)
            }
            setLoading(false)
        }
    }


    return (
        <View style={styles.componentContainer}>
            <Text style={styles.title}>Sign in</Text>

            <View style={styles.inputContainer}>
                <FormField title={'e-mail'} handleChange={setEmail} text={email}
                valid={!checked || (checked && !loginValidation(email, password).includes('email'))}/>
                <FormField title={'password'} handleChange={setPassword} text={password}
                valid={!checked || (checked && !loginValidation(email, password).includes('password'))}/>
            </View>

            <Pressable style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>{loading? 'loading...' : 'Sign in'}</Text>
            </Pressable>

        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    componentContainer: {
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