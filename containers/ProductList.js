import React, { Component } from 'react'
import { SafeAreaView, Text } from 'react-native'
import { FloatingAction } from 'react-native-floating-action'
import { MaterialIcons } from '@expo/vector-icons'



export default class ProductList extends Component {

    constructor(props) {
        super(props)
        this.onShowDrawer = this.onShowDrawer.bind(this)
    }

    onShowDrawer() {
        this.props.navigation.navigate('DrawerOpen')
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>

                <MaterialIcons name="menu" color="black" size={30} style={{margin: 10}} onPress={this.onShowDrawer} />

                <FloatingAction onPressMain={this.onPressAdd} actions={[]} showBackground={false} />

            </SafeAreaView>
        )
    }
}