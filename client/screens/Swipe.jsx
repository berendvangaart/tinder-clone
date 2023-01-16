import React, {useEffect, useMemo, useState} from 'react';
import {Image, Pressable, Text, View} from "react-native";
import TinderCard from 'react-tinder-card';
import Card from "../Components/card/Card";
import {defaultStyles} from "../styles";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {addMatch, setUser} from "../store/user/user.actions";
import {showToast} from "../util/util";
import {Menu, MenuOption, MenuOptions, MenuTrigger} from "react-native-popup-menu";

const Swipe = ({navigation}) => {
    const [characters, setCharacters] = useState(null)
    const [swipedUsers, setSwipedUsers] = useState([])
    const state = useSelector(state => state.user)
    const dispatch = useDispatch()
    const swipeOptions = characters?.filter(user => !swipedUsers.includes(user.id)) // exclude previously swiped users

    const fetchUsers = async () => {
        const users = await axios({
            method: 'GET',
            url: `${process.env.REACT_APP_BACK_END_URL}/users`,
            headers: {'Content-Type': 'application/json'},
        });
        setCharacters(await users.data)
    }

    useEffect(() => {
        let exclude = state.user.matches?  state.user.matches: []// exclude previous matches + own account
        if ( state.user.userId ) exclude.push(state.user.userId)
        setSwipedUsers(exclude)
        fetchUsers()
    },[])

    const updateMatches = async (matchID) => {
        await axios({
            method: 'POST',
            url: `${process.env.REACT_APP_BACK_END_URL}/match`,
            headers: {'Content-Type': 'application/json'},
            data: {
                "userId" : state.user.userId,
                "matchId" : matchID
            }
        });
        dispatch(addMatch(matchID))
    }

    const swiped = (direction, user) => {
        if (direction === "right") {
            updateMatches(user.id)
            if (user.matches.includes(state.user.userId)) {
                showToast("🔥 You got a new connection! 🔥")
            }
        }
    }

    const handleMenu = (val) => {
        if (val === 1 ) navigation.navigate('Match')
        else {
            dispatch(setUser(null))
            navigation.navigate("Home")
        }
    }

    return (
        <>
            <View style={styles.header}>
                <Text style={styles.title}>Discover</Text>

                <Menu onSelect={value => handleMenu(value)}>
                    <MenuTrigger style={styles.trigger}>
                            <Image style={styles.icon} source={require('../assets/matchIcon.png')} alt=""/>
                    </MenuTrigger>
                    <MenuOptions>
                        <MenuOption value={1}>
                            <Text style={styles.menuOption}>Matches</Text>
                        </MenuOption>
                        <MenuOption value={2}>
                            <Text style={styles.menuOption }>Sign out</Text>
                        </MenuOption>
                    </MenuOptions>
                </Menu>
            </View>

            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    {swipeOptions?.map((character, index) =>

                        <TinderCard  key={character.firstName} onSwipe={(dir) => swiped(dir, character)} >
                            <Card character={character}/>
                        </TinderCard>
                    )}
                    <Text style={styles.noMoreUsers}>No more users, please come back later 🕒</Text>
                </View>
            </View>

            {/*<View style={styles.footer}>*/}
            {/*    <Pressable style={styles.button}  onPress={() => swipe('left')}>*/}
            {/*        <Image style={styles.btnIcon} source={require('../assets/dislike.png')} alt=""/>*/}
            {/*    </Pressable>*/}
            {/*    <Pressable style={styles.button}  onPress={() => swipe('right')}>*/}
            {/*        <Image style={styles.btnIcon} source={require('../assets/like.png')} alt=""/>*/}
            {/*    </Pressable>*/}
            {/*</View>*/}
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
    },
    footer: {
        marginTop: 60,
        // width:' 100%',
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
    }, trigger: {
        height: 54,
        width: 54,
        marginRight: 32,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#999999',
    }, menuOption : {
        padding: 8,
    } , noMoreUsers : {
        marginTop: 25,
        fontSize: 16,
        zIndex: -1
    }
}