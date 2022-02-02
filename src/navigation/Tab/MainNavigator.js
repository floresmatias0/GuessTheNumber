import React, { useContext } from 'react';
// import { useSelector } from 'react-redux';
// import LoggedContext from '../../context/LoggedContext';

import { NavigationContainer } from '@react-navigation/native';

//Stacks
import ShopNavigator from '../Shop';
import AuthNavigator from '../Auth';

const MainNavigator = () => {
    // const isLoggedIn = useSelector(state => state.auth.token);
    // const { isLoggedIn, setLoggedIn } = useContext(LoggedContext);
    let isLoggedIn = false;

    return (
        <NavigationContainer>
            {isLoggedIn ? (
                <ShopNavigator/>
            ) : (
                <AuthNavigator/>
            )}
        </NavigationContainer>
    )
}

export default MainNavigator;