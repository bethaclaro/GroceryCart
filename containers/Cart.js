import React, { Component } from 'react'
import { SafeAreaView, Text, View, ScrollView } from 'react-native'
import defStyles from './defaultStyles'
import { observable, computed } from 'mobx'
import { observer } from 'mobx-react/native'
import { List, ListItem, ListView } from 'react-native-elements'
import ListBadge from '../components/ListBadge'
import { FloatingAction } from 'react-native-floating-action'

const buttonActions = [
    {
        text: "Add",
        name: "bt_add",
        position: 1
    }
]


@observer
export default class Cart extends Component {

    @observable cartTotal = 0
    
    constructor(props) {
        super(props)
        
        this.renderRow = this.renderRow.bind(this)
        this.onPressItem = this.onPressItem.bind(this)
        this.onPressAdd = this.onPressAdd.bind(this)

        this.tempData = [
            {
                barcode: "1234567890",
                itemDescription: "Test Item 1",
                price: 20.50,
                qty: 1
            },
            {
                barcode: "0987654321",
                itemDescription: "Test Item 2",
                price: 30.50,
                qty: 1
            }
        ]

    }

    onPressItem(e) {
        console.log("pressed " + e)
    }

    renderRow(rowData, barcode) {
        return <ListItem
            key={barcode}
            title={rowData.itemDescription}
            subtitle={rowData.price}
             />
    }

    onPressAdd(e) {
        console.log("main button pressed")
    }

    render() {
        return (
            <SafeAreaView style={defStyles.container}>

                {/* spacer component */}
                <View style={{flex: 0.10}} /> 

                <Text style={defStyles.resultText}>{this.cartTotal.toLocaleString('en', {minimumFractionDigits: 2})}</Text>

                <ScrollView style={defStyles.scrollableContent}>

                    <List containerStyle={{borderTopWidth: 0, borderBottomWidth: 0}}>
                        {
                            this.tempData.map((rowData, i)=>{
                                return <ListItem
                                    key={rowData.barcode}
                                    title={rowData.itemDescription + " @ " + rowData.price}
                                    subtitle={"Subtotal: " + (rowData.price*rowData.qty).toLocaleString('en', {minimumFractionDigits:2})}
                                    hideChevron={true}
                                    onPress={this.onPressItem}
                                    badge={{element: <ListBadge />}}
                                />
                            })
                        }
                    </List>

                </ScrollView>

                <FloatingAction onPressMain={this.onPressAdd} actions={[]} showBackground={false} />

            </SafeAreaView>
        )
    }
}