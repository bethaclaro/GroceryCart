import React, { Component } from 'react'
import { SafeAreaView, Text, View, StyleSheet, Modal } from 'react-native'
import defStyles from './defaultStyles'
import { Button } from 'react-native-elements'
import { observer } from 'mobx-react/native'
import { observable } from 'mobx'
import { BarCodeScanner } from 'expo'


@observer
export default class ScanNew extends Component {

    @observable scanVisible = false


    onScanHandler(e) {
        alert("hey " + this.scanVisible)
        this.scanVisible = !this.scanVisible
    }

    onBarcodeScan(e) {
        alert(e.data)
        this.scanVisible = !this.scanVisible
    }

    render() {
        return (
            <SafeAreaView style={defStyles.container}>
                
                <Modal visible={this.scanVisible}>
                    <SafeAreaView style={{flex: 1}}>
                        <BarCodeScanner onBarCodeRead={this.onBarcodeScan} style={StyleSheet.absoluteFill} />
                    </SafeAreaView>
                </Modal>
                
                <View style={{alignItems: 'center', justifyContent: 'center', flex: 2}}>
                    <Text style={{color: 'white'}}>Yo!</Text>
                </View>
                
                <Button  title="Scan" onPress={this.onScanHandler} />
            </SafeAreaView>
        )
    }
}

const loc = StyleSheet.create({
})
