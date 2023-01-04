import React from 'react';
import {ImageBackground, Text, View} from "react-native";

/**
 * For future development: add gradient to cardInfoContainer background
 */

const Card = ({character}) => {
    return (
        <View style={styles.card}>
            <ImageBackground style={styles.cardImage} source={character.img}>
                <View style={styles.cardInfoContainer}>
                    <Text style={styles.name}>{character.name}</Text>
                    <Text style={styles.jobTitle}>{character.jobTitle}</Text>
                </View>

            </ImageBackground>
        </View>
    );
};

export default Card;


const styles = {
    card: {
        position: 'absolute',
        backgroundColor: '#fff',
        width: '100%',
        maxWidth: 350,
        height: 450,
        borderRadius: 20,
        resizeMode: 'cover',
    },
    cardImage: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: 20,
    },
    cardInfoContainer: {
        position: 'absolute',
        backgroundColor: '#1e1e1e',
        opacity: 0.93,
        width: '100%',
        height: 92,
        bottom: 0,
    },
    name : {
        marginTop: 10,
        marginLeft: 14,
        fontWeight: '400',
        fontSize: 26,
        color: '#fff',
    },
    jobTitle: {
        margin: 10,
        marginLeft: 14,
        color: '#fff',
    },
    infoText: {
        height: 28,
        justifyContent: 'center',
        display: 'flex',
        zIndex: -100,
    }
}