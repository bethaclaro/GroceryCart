import React, { Component } from 'react'
import { SafeAreaView, View, Text, 
    TouchableOpacity, StyleSheet } from 'react-native'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'



export default class CustomTabBar extends Component {

    constructor(props) {
        super(props)
        this.onPressHandler = this.onPressHandler.bind(this)
    }

    onPressHandler(e) {
        console.log("Add pressed")
    }

    renderTabs(routes) {

        return (
            routes.map((route)=> {
                return <TouchableOpacity style={styles.tab} key={route.key}
                    onPress={()=>{this.props.navigation.navigate(route.routeName)}}>
                        <MaterialIcons size={25}
                            name={route.routeName==='Cart' ? "shopping-cart" : "folder"}/>
                        <Text>{route.routeName}</Text>
                    </TouchableOpacity>
            })
        )
    }

    render() {
        
        const {routes} = this.props.navigation.state
        
        return (
            <View style={styles.tabContainer}>
                {this.renderTabs(routes)}
                <TouchableOpacity style={styles.tab} onPress={this.onPressHandler}>
                    <MaterialIcons name="add" size={50} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    // container: {
    //   marginTop: Platform.OS === 'ios' ? 20 : 0,
    // },
    tabContainer: {
      flexDirection: 'row',
      height: 80,
      backgroundColor: 'lightgray'
    },
    tab: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 4,
      marginBottom: 15
    },
    sampleText: {
      margin: 14,
    },
  });