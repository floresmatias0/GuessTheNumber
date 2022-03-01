import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopNavigator from '../Shop';
import CartNavigator from '../Cart';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomTabs = createBottomTabNavigator();

const BottomTabsNavigator = () => {
    return (
        <BottomTabs.Navigator initialRouteName='Shop' screenOptions={{
            headerShown: false,
        }}>
            <BottomTabs.Screen
                name='Shop'
                component={ShopNavigator} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name='home-outline' size={25} />
                    )          
                }}
                    
            />
            <BottomTabs.Screen
                name='Cart'
                component={CartNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name='ios-cart-outline' size={25} />
                    )
                }} 
                />
        </BottomTabs.Navigator>
    )
}

export default BottomTabsNavigator;