import React, { Component } from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import Cart from './Cart'
import ProductList from './ProductList'
import { Ionicons } from '@expo/vector-icons'
import { Text } from 'react-native'


export default class MainContainer extends Component {
    render() {
        return (
            <Cart />
        )
    }
}