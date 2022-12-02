import React, {useState} from 'react';
import {ImageBackground, Text, View} from "react-native";
import TinderCard from 'react-tinder-card';
import Card from "../Components/card/Card";

const mockData = [
    {
        name: 'Richard Hendricks',
        img: require('../assets/img/richard.jpg')
    },
    {
        name: 'Erlich Bachman',
        img: require('../assets/img/erlich.jpg')
    },
    {
        name: 'Monica Hall',
        img: require('../assets/img/monica.jpg')
    },
    {
        name: 'Jared Dunn',
        img: require('../assets/img/jared.jpg')
    },
    {
        name: 'Dinesh Chugtai',
        img: require('../assets/img/dinesh.jpg')
    }
]

const Swipe = () => {
    const people = mockData
    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                {people.map((character) =>

                    <TinderCard key={character.name} onSwipe={(dir) => swiped(dir, character.name)}
                                onCardLeftScreen={() => outOfFrame(character.name)}>
                        <Card character={character}/>
                    </TinderCard>
                )}
            </View>
            {lastDirection ? <Text style={styles.infoText}>You swiped {lastDirection}</Text> :
                <Text style={styles.infoText}/>}
        </View>
    )
};

export default Swipe;

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    cardContainer: {
        margin: 100,
        width: '90%',
        maxWidth: 260,
        height: 300,
    },
    infoText: {
        height: 28,
        justifyContent: 'center',
        display: 'flex',
        zIndex: -100,
    }
}