import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from '../../screens/Categories';
import ProductDetail from '../../screens/Product-detail';
import Products from '../../screens/Products';
import {Platform} from 'react-native';
import {COLORS} from '../../utils/constants/colors';

const ShopStack = createNativeStackNavigator();

const ShopNavigator = () => {
    return (
        <ShopStack.Navigator
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
            <ShopStack.Screen 
                name="Categories"
                component={Categories}
            />
            <ShopStack.Screen 
                name="Products"
                component={Products}
                options={({ route }) => ({
                    title: route.params.name,
                    headerStyle: {
                        backgroundColor: route.params.color
                    },
                })}
            />
            <ShopStack.Screen 
                name="ProductDetail"
                component={ProductDetail}
                options={({ route }) => ({
                    title: route.params.name,
                })}
            />
        </ShopStack.Navigator>
    )
}

export default ShopNavigator;