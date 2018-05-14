import React, { Component } from 'react'
import { SafeAreaView, Text, View, ScrollView, TouchableWithoutFeedback } from 'react-native'
import defStyles from './defaultStyles'
import { observable, computed } from 'mobx'
import { observer, inject } from 'mobx-react/native'
import { List, ListItem, ListView } from 'react-native-elements'
import ListBadge from '../components/ListBadge'
import { FloatingAction } from 'react-native-floating-action'
import { MaterialIcons } from '@expo/vector-icons'


// @inject('appStore')
@observer
export default class Cart extends Component {

    @observable cartTotal = 0
    @observable selectedItem
    @observable addMode = true
    
    constructor(props) {
        super(props)
        
        this.renderRow = this.renderRow.bind(this)
        this.onPressItem = this.onPressItem.bind(this)
        this.onPressAdd = this.onPressAdd.bind(this)
        this.onPressEdit = this.onPressEdit.bind(this)
        this.onPressOutside = this.onPressOutside.bind(this)

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
        // console.log("pressed " + e)
        this.addMode = !this.addMode
        this.selectedItem = e
    }

    renderRow(rowData, barcode) {
        return <ListItem
            key={barcode}
            title={rowData.itemDescription}
            subtitle={rowData.price}
             />
    }

    onPressAdd(e) {
        console.log("add button pressed")
    }

    onPressEdit(e) {
        console.log("edit button pressed")
    }

    onPressOutside(e) {
        // console.log("pressed outside")
        this.addMode = true
    }

    onPressDeleteOnItem(e, item) {
        console.log("delete on " + e)
    }

    render() {
        return (
            <SafeAreaView style={defStyles.container} onPress={this.onPressOutside}>

                {/* spacer component */}
                {/* <View style={{flex: 0.10}} /> */}

                <Text style={defStyles.resultText}>{this.cartTotal.toLocaleString('en', {minimumFractionDigits: 2})}</Text>

                <ScrollView style={defStyles.scrollableContent} onTouchStart={this.onPressOutside}>
                        <List containerStyle={{borderTopWidth: 0, borderBottomWidth: 0}}>
                            {
                                this.tempData.map((rowData, i)=>{
                                    return <ListItem
                                        key={rowData.barcode}
                                        title={rowData.itemDescription + " @ " + rowData.price}
                                        subtitle={"Subtotal: " + (rowData.price*rowData.qty).toLocaleString('en', {minimumFractionDigits:2})}
                                        hideChevron={true}
                                        onPress={this.onPressItem}
                                        badge={{element: <ListBadge item={rowData} onPressDeleteOnItem={this.onPressDeleteOnItem.bind(this, rowData.barcode)} />}}
                                    />
                                })
                            }
                        </List>
                </ScrollView>

                <FloatingAction visible={this.addMode}
                    floatingIcon={<MaterialIcons name="add" size={20} color="white" />}
                    color='#65799B' position="center" onPressMain={this.onPressAdd} actions={[]} showBackground={false} />

                <FloatingAction visible={!this.addMode}
                    floatingIcon={<MaterialIcons name="edit" size={20} color="white" />} 
                    color='#65799B' position="center" onPressMain={this.onPressEdit} actions={[]} showBackground={false} />

                {/* <FloatingAction visible={}
                    floatingIcon={<MaterialIcons name="delete" size={20} color="white" />}
                    color="#65799B" position="center" actions={[]} showBackground={false} /> */}
                    
            </SafeAreaView>
        )
    }
}