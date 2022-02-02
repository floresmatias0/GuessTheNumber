import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from '../../screens/Login';
// import { Platform } from 'react-native';
// import { COLORS } from '../../utils/constants/colors';

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <AuthStack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false
            }}
        >
            <AuthStack.Screen 
                name="Login"
                component={AuthScreen}
            />
        </AuthStack.Navigator>
    )
}

export default AuthNavigator;