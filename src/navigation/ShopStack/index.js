import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from '../../screens/Categories';
import ProductDetail from '../../screens/Product-detail';
import Products from '../../screens/Products';
import {Platform} from 'react-native';
import {COLORS} from '../../utils/constants/colors';

const Stack = createNativeStackNavigator();

const ShopStackNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName='Categories'
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'ios' ? COLORS.secondary : COLORS.primary,
                },
                headerTintColor: Platform.OS === 'ios' ? 'white' : COLORS.primary,
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 24,
                    fontFamily: 'BarlowCondensed-SemiBoldItalic',
                }
            }}
        >
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen 
                name="Products"
                component={Products}
                options={({ route }) => ({
                    title: route.params.name,
                    headerStyle: {
                        backgroundColor: route.params.color
                    },
                })}
            />
            <Stack.Screen 
                name="ProductDetail"
                component={ProductDetail}
                options={({ route }) => ({
                    title: route.params.name,
                })}
            />
        </Stack.Navigator>
    )
}

export default ShopStackNavigation;