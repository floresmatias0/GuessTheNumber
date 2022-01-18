import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

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
        <View>
            <Text>GameScreen</Text>
            <Text>Player {player}</Text>
            <Text>Number {number}</Text>
            <Text>Points {points}</Text>
            <Text>CPU number {numberNew}</Text>
            <Button
                onPress={() => handleMinor()}
                title={'Minor'}
            />
            <Button
                onPress={() => handleHigher()}
                title={'Higher'}
            />
        </View>
    )
}

export default GameScreen;