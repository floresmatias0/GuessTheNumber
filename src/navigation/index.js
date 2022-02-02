import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopNavigator from './Shop';
import AuthNavigator from './Auth';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomTabs = createBottomTabNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer >
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
                    name='Login'
                    component={AuthNavigator}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Ionicons name='log-in-outline' size={25} />
                        )
                    }} 
                    />
            </BottomTabs.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;