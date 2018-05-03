import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react/native'
import { SafeAreaView, Text, View, StyleSheet, Modal } from 'react-native'
import defStyles from './defaultStyles'
import { Button } from 'react-native-elements'
import { BarCodeScanner } from 'expo'


@observer
export default class ScanNew extends Component {

    @observable scanVisible = false
    @observable scannedBarcode = "Yo"

    constructor(props) {
        super(props)
        this.onScanHandler = this.onScanHandler.bind(this)
        this.onBarcodeScan = this.onBarcodeScan.bind(this)
    }

    onScanHandler(e) {
        this.scanVisible = !this.scanVisible
    }

    onBarcodeScan(e) {
        this.scanVisible = !this.scanVisible
        this.scannedBarcode = e.data
    }

    render() {
        return (
            <SafeAreaView style={defStyles.container}>
                
                <Modal visible={this.scanVisible}>
                    <SafeAreaView style={{flex: 1}}>
                        <BarCodeScanner onBarCodeRead={this.onBarcodeScan} style={StyleSheet.absoluteFill} />
                    </SafeAreaView>
                </Modal>
                
                <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                    <Text style={{color: 'white'}}>{this.scannedBarcode}</Text>
                </View>
                
                <Button  title="Scan" onPress={this.onScanHandler} />

            </SafeAreaView>
        )
    }
}

const loc = StyleSheet.create({
})
