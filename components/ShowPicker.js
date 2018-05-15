import React, { Component } from 'react'
import { Picker, Modal, SafeAreaView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'



export default class ShowPicker extends Component {

    constructor(props) {
        super(props)
        this.onCancel = this.onCancel.bind(this)
    }

    onCancel(e) {
        this.props.onCancel()
    }

    render() {
        return (
            <Modal visible={this.props.visible}>
                <SafeAreaView style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <Picker style={{width: 100}} selectedValue={this.props.selectedValue}>
                        <Picker.Item label="1" value={1} />
                        <Picker.Item label="2" value={2} />
                        <Picker.Item label="3" value={3} />
                        <Picker.Item label="4" value={4} />
                        <Picker.Item label="5" value={5} />
                        <Picker.Item label="6" value={6} />
                        <Picker.Item label="7" value={7} />
                        <Picker.Item label="8" value={8} />
                        <Picker.Item label="9" value={9} />
                        <Picker.Item label="10" value={10} />
                    </Picker>
                    <MaterialIcons name="cancel" size={30} color='black' onPress={this.onCancel} />
                </SafeAreaView>
            </Modal>
        )
    }
}