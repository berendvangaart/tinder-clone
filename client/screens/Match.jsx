import React, {useEffect, useState} from 'react';
import {defaultStyles} from "../styles";
import {Image, Pressable, ScrollView, Text, View} from "react-native";
import {Divider} from "@react-native-material/core";
import MatchCard from "../Components/match-card/MatchCard";
import {useSelector} from "react-redux";
import axios from "axios";



const Match = ({navigation}) => {
    const state = useSelector(state => state.user)
    const [matches, setMatches] = useState(null)

    const fetchUsers = async () => {
        const users = await axios({
            method: 'GET',
            url: 'http://localhost:8080/users',
            headers: {'Content-Type': 'application/json'},
        });

        const match = await users.data.filter(user => {
            return user.matches.includes(state.user.userId) && state.user.matches.includes(user.id)
        })

        setMatches(match)
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.title}>Matches</Text>
                <Pressable style={styles.IconContainer} onPress={() => navigation.navigate('Swipe')}>
                    <Image style={styles.icon} source={require('../assets/cards.png')} alt=""/>
                </Pressable>
            </View>
            <Divider style={{ marginTop: 60 }} leadingInset={32}  trailingInset={32}/>

            <ScrollView >

                <View style={styles.row}>
                    {matches?.map((character, index) =>  <MatchCard key={index} character={character}/>)}
                </View>

            </ScrollView>

        </View>
    );
};

export default Match;


const styles = {
    ...defaultStyles,
    header : {
        marginTop: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    IconContainer: {
        height: 54,
        width: 54,
        marginRight: 32,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#999999',
    },
    icon : {
        height: 22,
        width: 22,
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    cardContainer: {
        margin: 50,
        width: '90%',
        maxWidth: 320,
        height: 400,
    },
    infoText: {
        height: 28,
        justifyContent: 'center',
        display: 'flex',
        zIndex: -100,
    },
    footer: {
        width:' 100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#e5c2c2'

    },
    button: {
        margin: 5,
        height: 80,
        backgroundColor: 'rgba(255,255,255,0.61)',
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
        borderRadius: 100,
        // borderColor: '#999999',

    }, btnIcon : {
        height: 30,
        width: 30,
    },
    row: {
        margin: 32,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',

    }
}