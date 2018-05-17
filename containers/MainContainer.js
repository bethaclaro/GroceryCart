import React, { Component } from 'react'
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation'
import Cart from './Cart'
import ProductList from './ProductList'
import Settings from './Settings'
import { Ionicons } from '@expo/vector-icons'
import { Text } from 'react-native'
import CustomDrawer from '../components/CustomDrawer'

export default DrawerNavigator({
        Cart: {screen: Cart},
        ProductList: {screen: ProductList},
        Settings: {screen: Settings}
    },
    {
        contentComponent: CustomDrawer
    }
)