import React from 'react';
import { View, Text, Button } from 'react-native';

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
        <View>
            <Text>Game Over</Text>
            <Text>Player: {player}</Text>
            <Text>Points: {points}</Text>
            <Button
                onPress={() => handleHome()}
                title={'Try again'}
            />
        </View>
    )
}

export default GameOverScreen;