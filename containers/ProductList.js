import React, { Component } from 'react'
import { SafeAreaView, Text } from 'react-native'

export default class ProductList extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <SafeAreaView>
                <Text>Product List</Text>
            </SafeAreaView>
        )
    }
}