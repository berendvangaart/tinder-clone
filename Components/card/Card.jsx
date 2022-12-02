import React from 'react';
import {ImageBackground, Text, View} from "react-native";

const Card = ({character}) => {
    return (
        <View style={styles.card}>
            <ImageBackground style={styles.cardImage} source={character.img}>
                <Text style={styles.cardTitle}>{character.name}</Text>
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
        maxWidth: 260,
        height: 300,
        borderRadius: 20,
        resizeMode: 'cover',
    },
    cardImage: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: 20,
    },
    cardTitle: {
        position: 'absolute',
        bottom: 0,
        margin: 10,
        color: '#fff',
    },
    infoText: {
        height: 28,
        justifyContent: 'center',
        display: 'flex',
        zIndex: -100,
    }
}