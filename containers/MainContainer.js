import React, { Component } from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import Cart from './Cart'
import ProductList from './ProductList'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'
import { Text } from 'react-native'
import CustomTabBar from '../components/CustomTabBar'


export default TabNavigator({
        Cart: {screen: Cart},
        "Product List" : {screen: ProductList}
    },
    {
        tabBarComponent: CustomTabBar,
        tabBarPosition: 'bottom',
    }
    // {
    //     navigationOptions: ({navigation}) => ({
    //         tabBarIcon: ({focused, tintColor}) =>{
    //             const {routeName} = navigation.state
    //             if(routeName==='Cart') {
    //                 return <MaterialIcons name="shopping-cart" size={25} color={tintColor} />
    //             } else if (routeName==='Product List') {
    //                 return <MaterialIcons name="folder" size={25} color={tintColor} />
    //             }
    //         }
    //     }),
    //     tabBarOptions: {
    //         style: {
    //             height: 60,
    //             paddingTop: 10
    //         },
    //         labelStyle: {
    //             fontSize: 12,
    //             fontWeight: "bold"
    //         },
    //         activeTintColor: "#65799B"
    //     }
    // }
)

