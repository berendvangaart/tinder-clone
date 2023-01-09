import React, {useState} from 'react';
import {Alert, ImageBackground, Modal, Pressable, Text, View} from "react-native";

const Card = ({character}) => {
    const [modalVisible, setModalVisible] = useState(false)

    const showBio = () => {
        Alert.alert(
            //title
            'Bio',
            //body
            character.bio,
        );
    }

    return (
        <View>
            <View style={styles.card}>
                <ImageBackground
                    style={styles.cardImage}
                    source={{
                        uri: `${process.env.REACT_APP_BACK_END_URL}/storage/${character.img}`,
                    }}
                >
                    <Pressable
                        style={styles.cardInfoContainer}
                        onTouchStart={() => showBio()}
                    >
                        <Text style={styles.name}>{character.firstName}</Text>
                        <Text style={styles.jobTitle}>{character.jobTitle}</Text>
                    </Pressable>
                </ImageBackground>
            </View>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <View style={styles.modal}>
                    <Text>{character.bio}</Text>
                </View>

            </Modal>
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
    }, modal: {
        height: 100,
        width: 100,
        padding: 10,
    }
}