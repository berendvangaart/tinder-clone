import React, {useEffect, useMemo, useState} from 'react';
import {Image, Pressable, Text, View} from "react-native";
import TinderCard from 'react-tinder-card';
import Card from "../Components/card/Card";
import {defaultStyles} from "../styles";
import axios from "axios";
import {useSelector} from "react-redux";

const Swipe = ({navigation}) => {
    const [characters, setCharacters] = useState(null)
    const [swipedUsers, setSwipedUsers] = useState([])
    const state = useSelector(state => state.user)

    const fetchUsers = async () => {
        const users = await axios({
            method: 'GET',
            url: 'http://localhost:8080/users',
            headers: {'Content-Type': 'application/json'},
        });
        setCharacters(await users.data)
    }

    useEffect(() => {
        let exclude = state.user.matches // exclude previous matches + own account
        exclude.push(state.user.userId)
        setSwipedUsers(exclude)
        fetchUsers()
    },[])

    const updateMatches = async (matchID) => {
        await axios({
            method: 'POST',
            url: 'http://localhost:8080/match',
            headers: {'Content-Type': 'application/json'},
            data: {
                "userId" : state.user.userId,
                "matchId" : matchID
            }
        });
    }

    const swiped = (direction, user) => {
        if (direction === "right") updateMatches(user.id)
    }

    const  swipeOptions = characters?.filter(user => !swipedUsers.includes(user.id)) // exclude previously swiped users

    return (
        <>
            <View style={styles.header}>
                <Text style={styles.title}>Discover</Text>
                <Pressable style={styles.IconContainer} onPress={() => navigation.navigate('Match')}>
                    <Image style={styles.icon} source={require('../assets/matchIcon.png')} alt=""/>
                </Pressable>
            </View>

            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    {swipeOptions?.map((character, index) =>

                        <TinderCard  key={character.firstName} onSwipe={(dir) => swiped(dir, character)} >
                            <Card character={character}/>
                        </TinderCard>
                    )}
                </View>
            </View>

            <View style={styles.footer}>
                <Pressable style={styles.button}  onPress={() => swipe('left')}>
                    <Image style={styles.btnIcon} source={require('../assets/dislike.png')} alt=""/>
                </Pressable>
                <Pressable style={styles.button}  onPress={() => swipe('right')}>
                    <Image style={styles.btnIcon} source={require('../assets/like.png')} alt=""/>
                </Pressable>
            </View>
        </>
    )
};

export default Swipe;

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
    }
}