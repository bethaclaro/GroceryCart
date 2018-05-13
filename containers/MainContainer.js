import React, { Component } from 'react'
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation'
import Cart from './Cart'
import ProductList from './ProductList'
import { Ionicons } from '@expo/vector-icons'
import { Text } from 'react-native'


export default DrawerNavigator({
    Cart: {screen: Cart},
    ProductList: {screen: ProductList}
})