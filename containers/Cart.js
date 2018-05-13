import React, { Component } from 'react'
import { SafeAreaView, Text, View, ScrollView } from 'react-native'
import defStyles from './defaultStyles'
import { observable, computed } from 'mobx'
import { observer } from 'mobx-react/native'
import { List, ListItem, ListView, Button } from 'react-native-elements'
import ListBadge from '../components/ListBadge'
import { MaterialIcons } from '@expo/vector-icons'


@observer
export default class Cart extends Component {

    @observable cartTotal = 0

    constructor(props) {
        super(props)

        this.onAddNew = this.onAddNew.bind(this)

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
                qty: 2
            }
        ]
    }

    onPressItem(e) {
        console.log(e)
    }

    onAddNew() {

    }

    render() {
        return (
            <SafeAreaView style={defStyles.container}>
                
                {/* spacer component */}
                <View style={{flex: 0.01}} />

                <Text style={defStyles.resultText}>{this.cartTotal.toLocaleString('en', {minimumFractionDigits: 2})}</Text>

                <ScrollView style={defStyles.scrollableContent}>

                    <List containerStyle={{borderTopWidth: 0, borderBottomWidth: 0}}>
                        {
                            this.tempData.map((rowData, i)=>{
                                return <ListItem
                                    key={rowData.barcode}
                                    title={rowData.itemDescription + " @ " + rowData.price}
                                    titleStyle={{fontSize: 15}}
                                    subtitle={"Subtotal: " + (rowData.price*rowData.qty).toLocaleString('en', {minimumFractionDigits:2})}
                                    subtitleStyle={{fontSize: 14}}
                                    hideChevron={true}
                                    onPress={this.onPressItem.bind(this, rowData.barcode)}
                                    badge={{element: <ListBadge rowData={rowData}/>}}
                                />
                            })
                        }
                    </List>

                </ScrollView>

            </SafeAreaView>
        )
    }
}