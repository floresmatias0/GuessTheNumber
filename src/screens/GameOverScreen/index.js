import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { styles } from './styles';
import guessImage from '../../assets/images/screen-0.jpg';
import CustomButton from '../../components/atoms/CustomButton';
import gameOverImage from '../../assets/images/gameover.png';

const GameOverScreen = ({
    route,
    navigation
}) => {
    const { navigate } = navigation;
    const { player, points } = route.params;

    const handleHome = () => {
        navigate('Home')
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={guessImage} resizeMode="cover" style={styles.image}>
                <View style={styles.containerGame}>
                    <Image source={gameOverImage} alt="game over" style={styles.gameImage} />
                    <Text style={styles.text}>Player: {player}</Text>
                    <Text style={styles.text}>Total Points: {points}</Text>
                    <CustomButton
                        onPress={() => handleHome()}
                        text={'Try again'}
                        buttonContainer={{
                            backgroundColor: "#009688",
                            marginVertical: 10,
                            marginHorizontal: 5,
                            padding: 10,
                            borderRadius: 5
                        }}
                    />
                </View>
            </ImageBackground>
        </View>
    )
}

export default GameOverScreen;