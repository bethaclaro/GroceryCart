import React, { Component } from 'react'
import { ScrollView, SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { DrawerItems } from 'react-navigation'



export default class CustomDrawer extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { routes } = this.props.navigation
        console.log(routes)
        return (
            <ScrollView>
                <SafeAreaView>
                    <View style={styles.headerContainer}>
                    </View>
                    <DrawerItems {...this.props} />
                </SafeAreaView>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 70
    }
})