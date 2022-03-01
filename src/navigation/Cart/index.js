import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../../screens/Cart';
import Orders from '../../screens/Orders';
// import { Platform } from 'react-native';
// import { COLORS } from '../../utils/constants/colors';

const CartStack = createNativeStackNavigator();

const CartNavigator = () => {
    return (
        <CartStack.Navigator
            initialRouteName="Cart-shop"
            screenOptions={{
                headerShown: false
            }}
        >
            <CartStack.Screen 
                name="Cart-shop"
                component={Cart}
            />
            <CartStack.Screen 
                name="Orders"
                component={Orders}
            />
        </CartStack.Navigator>
    )
}

export default CartNavigator;