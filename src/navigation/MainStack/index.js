import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../../screens/HomeScreen';
import GameScreen from '../../screens/GameScreen';
import GameOverScreen from '../../screens/GameOverScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Game" component={GameScreen} />
                <Stack.Screen name="GameOver" component={GameOverScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default MainStack;