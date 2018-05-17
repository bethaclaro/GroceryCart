import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react/native'
import { SafeAreaView, Text, View, StyleSheet, Modal } from 'react-native'
import defStyles from './defaultStyles'


@inject('appStore')
@observer
export default class ScanNew extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <SafeAreaView style={defStyles.container}>
            </SafeAreaView>
        )
    }
}

const loc = StyleSheet.create({
})
