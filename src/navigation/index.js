import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabsNavigator from './BottomTabs';
import AuthNavigator from './Auth';
import { useSelector } from 'react-redux';

const AppNavigator = () => {
    const isAuth = useSelector(state => state.auth.token);

    return (
        <NavigationContainer >
            {isAuth ? <BottomTabsNavigator/> : <AuthNavigator/>}
        </NavigationContainer>
    )
}

export default AppNavigator;