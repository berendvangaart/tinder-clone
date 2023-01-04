import React from 'react';
import {Image, ImageBackground, Pressable, Text, View} from "react-native";

const MatchCard = ({character}) => {
    return (
        <View style={styles.card}>
            <ImageBackground style={styles.cardImage} source={character.img}>
                <Text style={styles.name}>{character.name}</Text>

                <View style={styles.cardInfoContainer}>
                    <Pressable style={styles.IconContainer} onPress={() => {}}>
                        <Image  source={require('../../assets/linkedin.png')} alt=""/>
                    </Pressable>
                    <Pressable style={styles.IconContainer} onPress={() => {}}>
                        <Image  source={require('../../assets/cross.png')} alt=""/>
                    </Pressable>
                </View>
            </ImageBackground>
        </View>
    );
};

export default MatchCard;

const styles = {
    card: {
        backgroundColor: '#fff',
        width: '100%',
        maxWidth: 140,
        height: 200,
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
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: '#1e1e1e',
        opacity: 0.93,
        width: '100%',
        height: 40,
        bottom: 0,
    },
    name : {
        marginTop: 130,
        marginLeft: 14,
        fontWeight: '400',
        fontSize: 16,
        color: '#fff',
    },

    infoText: {
        height: 28,
        justifyContent: 'center',
        display: 'flex',
        zIndex: -100,
    }
}