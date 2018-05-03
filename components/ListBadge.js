import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { FormInput } from 'react-native-elements'

export default class ListBadge extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{width: 120, flexDirection: 'row'}}>
                <Ionicons name="ios-add-circle" size={30} />
                <FormInput inputStyle={{width: 25, fontSize: 14, textAlign: 'center'}} keyboardType="numeric" />
                <Ionicons name="ios-remove-circle" size={30} />
            </View>
        )
    }
}