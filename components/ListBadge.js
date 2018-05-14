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
                <Text>Qty: </Text>
                {/* <Ionicons name="ios-add-circle" size={25} /> */}
                {/* <FormInput inputStyle={{width: 35, fontSize: 14, textAlign: 'center'}} keyboardType="numeric" underlineColor="transparent" /> */}
                {/* <Ionicons name="ios-remove-circle" size={25} /> */}
            </View>
        )
    }
}