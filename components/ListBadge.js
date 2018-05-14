import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { FormInput } from 'react-native-elements'

export default class ListBadge extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{width: 120, flexDirection: 'row'}}>
                <Text style={{flex: 0.5}}>Qty: {this.props.item.qty}</Text>
                <MaterialIcons style={{flex: 0.5, textAlign: 'right'}} name="delete" size={20} 
                    color="black" onPress={this.props.onPressDeleteOnItem} />
            </View>
        )
    }
}