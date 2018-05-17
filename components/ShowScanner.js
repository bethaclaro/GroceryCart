import React, { Component } from 'react'
import { BarCodeScanner } from 'expo'
import { Modal, SafeAreaView, StyleSheet, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'


export default class ShowScanner extends Component {

    constructor(props) {
        super(props)
        this.onCancel = this.onCancel.bind(this)
        this.onBarCodeRead = this.onBarCodeRead.bind(this)
    }

    onCancel(e) {
        this.props.onCancel()
    }

    onBarCodeRead(e) {
        this.props.appStore.setScannedBarcode(e.data)
        this.props.onBarcodeScanned()
    }

    render() {
        return (
            <Modal visible={this.props.visible}>
                <SafeAreaView style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <BarCodeScanner onBarCodeRead={this.onBarCodeRead} style={StyleSheet.absoluteFill} 
                        onPress={this.onCancel}/>
                    <View style={{position: "absolute", top: 50, right: 10, backgroundColor: "transparent"}}>
                        <MaterialIcons name="cancel" size={40} color="white" onPress={this.onCancel} />
                    </View>
                </SafeAreaView>
            </Modal>
        )
    }
}