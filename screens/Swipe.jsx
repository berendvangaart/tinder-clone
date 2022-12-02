import React, {useState} from 'react';
import {Image, Pressable, Text, View} from "react-native";
import TinderCard from 'react-tinder-card';
import Card from "../Components/card/Card";
import {defaultStyles} from "../styles";

const mockData = [
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

const Swipe = ({navigation}) => {
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
        <>

            <View style={styles.header}>
                <Text style={styles.title}>Discover</Text>
                <Pressable style={styles.IconContainer} onPress={() => navigation.navigate('Home')} >
                    <Image style={styles.icon} source={require('../assets/matchIcon.png')} alt=""/>
                </Pressable>

            </View>
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                {people.map((character, index) =>

                    <TinderCard key={index} onSwipe={(dir) => swiped(dir, character.name)}
                                onCardLeftScreen={() => outOfFrame(character.name)}>
                        <Card character={character}/>
                    </TinderCard>
                )}
            </View>
            {lastDirection ? <Text style={styles.infoText}>You swiped {lastDirection}</Text> :
                <Text style={styles.infoText}/>}
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
        margin: 100,
        width: '90%',
        maxWidth: 320,
        height: 300,
    },
    infoText: {
        height: 28,
        justifyContent: 'center',
        display: 'flex',
        zIndex: -100,
    }
}