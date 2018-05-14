import React, { Component } from 'react'
import { SafeAreaView, Text } from 'react-native'
import { FloatingAction } from 'react-native-floating-action'




export default class ProductList extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <FloatingAction onPressMain={this.onPressAdd} actions={[]} showBackground={false} />
            </SafeAreaView>
        )
    }
}