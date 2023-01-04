import React, {useMemo, useState} from 'react';
import {Image, Pressable, Text, View} from "react-native";
import TinderCard from 'react-tinder-card';
import Card from "../Components/card/Card";
import {defaultStyles} from "../styles";
import axios from "axios";
import {useSelector} from "react-redux";

const db = [
    {
        name: 'Richard Hendricks',
        img: require('../assets/img/richard.jpg'),
        jobTitle: 'UX-designer'
    },
    {
        name: 'Erlich Bachman',
        img: require('../assets/img/erlich.jpg'),
        jobTitle: 'UX-designer'
    },
    {
        name: 'Monica Hall',
        img: require('../assets/img/monica.jpg'),
        jobTitle: 'UX-designer'
    },
    {
        name: 'Jared Dunn',
        img: require('../assets/img/jared.jpg'),
        jobTitle: 'UX-designer'
    },
    {
        name: 'Dinesh Chugtai',
        img: require('../assets/img/dinesh.jpg'),
        jobTitle: 'UX-designer'
    }
]

const alreadyRemoved = []
let charactersState = db;

const Swipe = ({navigation}) => {
    const [characters, setCharacters] = useState(db)
    const [lastDirection, setLastDirection] = useState()
    const childRefs = useMemo(() => Array(db.length).fill(0).map(i => React.createRef()), [])

    const state = useSelector(state => state.user)

    const updateMatches = async (matchID) => {
        const response = await axios({
            method: 'POST',
            url: 'http://localhost:8080/match',
            headers: {'Content-Type': 'application/json'},
            data: {
                "userId" : state.user.userId,
                "matchId" : matchID
            }
        });

        console.log(response.data)
    }

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete + ' to the ' + direction)
        setLastDirection(direction)
        alreadyRemoved.push(nameToDelete)

        if (direction === "right") updateMatches("328aac51-b4de-4f3e-8f38-8776c58df2ed")
    }

    const outOfFrame = (name) => {
        charactersState = charactersState.filter(character => character.name !== name)
        setCharacters(charactersState)
    }


    const swipe = (dir) => {
        const cardsLeft = characters.filter(person => !alreadyRemoved.includes(person.name))
        if (cardsLeft.length) {
            const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
            const index = db.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
            alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
            childRefs[index].current.swipe(dir) // Swipe the card!
        }


    }

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
                    {characters.map((character, index) =>

                        <TinderCard ref={childRefs[index]} key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
                            <Card character={character}/>
                        </TinderCard>
                    )}
                </View>
                {lastDirection ? <Text style={styles.infoText}>You swiped {lastDirection}</Text> :
                    <Text style={styles.infoText}/>}
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
    }
}