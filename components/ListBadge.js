import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { FormInput } from 'react-native-elements'


export default class ListBadge extends Component {

    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'nowrap'}}>
                {/* <MaterialIcons name="add" size={35} style={{backgroundColor: 'white'}} onPress={this.onAdd(this.props.rowData.barcode)} /> */}
                {/* <FormInput keyboardType="numeric"
                    inputStyle={{width: 40, textAlign: 'center', fontSize: 14, backgroundColor: 'green', margin: 0, padding: 0}}
                 /> */}
                 <Text style={{fontSize: 16}}>Qty: {this.props.rowData.qty}  </Text>
                <MaterialIcons name="edit" size={25} style={{backgroundColor: 'white'}} />
            </View>
        )
    }
}