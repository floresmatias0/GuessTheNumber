import React, { useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { styles } from './styles';
import guessImage from '../../assets/images/screen-0.jpg';
import CustomButton from '../../components/atoms/CustomButton';

const GameScreen = ({
    route,
    navigation
}) => {
    const {navigate} = navigation;
    const { player, number } = route.params;
    const [points, setPoints] = useState(0);
    const [numberNew, setNumberNew] = useState(0);

    const generateRandomNumber = (min, max, exclude) => {
        let randomNum = Math.floor(Math.random() * (max - min + min) + min)
        if(randomNum === exclude) generateRandomNumber(min, max, exclude)
        return randomNum
    }

    const handleMinor = () => {
        let num = generateRandomNumber(0, 100, number)
        setNumberNew(num)
        if(num < number) setPoints(points+10)
        else navigate('GameOver', {
            player: player,
            points: points,
        })
    }

    const handleHigher = () => {
        let num = generateRandomNumber(0, 100, number)
        setNumberNew(num)
        if(num > number) setPoints(points+10)
        else navigate('GameOver', {
            player: player,
            points: points,
        })
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={guessImage} resizeMode="cover" style={styles.image}>
                <View style={styles.containerGame}>
                    <Text style={[styles.text, styles.underline]}>Details</Text>
                    <Text style={styles.text}>Player: {player}</Text>
                    <Text style={styles.text}>Number selected: {number}</Text>
                    <Text style={styles.text}>CPU number: {numberNew}</Text>
                    <Text style={styles.text}>Points: {points}</Text>

                    <View style={styles.containerButtons}>
                        <CustomButton
                            onPress={handleMinor}
                            text={'Minor'}
                            buttonContainer={{
                                backgroundColor: "#009688",
                                marginVertical: 10,
                                marginHorizontal: 5,
                                padding: 10,
                                borderRadius: 5
                            }}
                        />
                        <CustomButton
                            onPress={handleHigher}
                            text={'Higher'}
                            buttonContainer={{
                                backgroundColor: "#009688",
                                marginVertical: 10,
                                marginHorizontal: 5,
                                padding: 10,
                                borderRadius: 5
                            }}
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default GameScreen;