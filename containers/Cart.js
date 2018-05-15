import React, { Component } from 'react'
import { SafeAreaView, Text, View, ScrollView, StyleSheet } from 'react-native'
import defStyles from './defaultStyles'
import { observable, computed } from 'mobx'
import { observer, inject } from 'mobx-react/native'
import { List, ListItem, ListView } from 'react-native-elements'
import ListBadge from '../components/ListBadge'
import { FloatingAction } from 'react-native-floating-action'
import { MaterialIcons } from '@expo/vector-icons'
import CardStack, { Card } from 'react-native-card-stack-swiper'



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
        this.onSwipeUp = this.onSwipeUp.bind(this)

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
        this.addMode = true
    }

    onPressDeleteOnItem(e, item) {
        console.log("delete on " + e)
    }

    onSwipeUp(e) {
        console.log("swipe up!")
    }

    renderCards() {
        return (
            <CardStack style={styles.content} ref={swiper => { this.swiper = swiper }}
                        loop={true} disableBottomSwipe={true} verticalSwipe={true} onSwipedTop={this.onSwipeUp}>
                {this.tempData.map((item)=>{
                    return <Card style={[styles.card, styles.card1]} key={item.barcode}>
                        <Text style={{padding: 10}}>Barcode: {item.barcode}</Text>
                        <Text style={styles.label}>{item.itemDescription}</Text>
                    </Card>
                })}
            </CardStack>
        )
        
    }

    render() {
        return (
            <SafeAreaView style={defStyles.container} onPress={this.onPressOutside}>

                {/* spacer component */}
                {/* <View style={{flex: 0.10}} /> */}

                <Text style={defStyles.resultText}>{this.cartTotal.toLocaleString('en', {minimumFractionDigits: 2})}</Text>

                <View style={styles.container} >
                    {this.renderCards()}
                </View>

                <FloatingAction visible={this.addMode} distanceToEdge={50}
                    floatingIcon={<MaterialIcons name="add" size={20} color="white" />}
                    color='#65799B' position="center" onPressMain={this.onPressAdd} actions={[]} showBackground={false} />

                <FloatingAction visible={!this.addMode} distanceToEdge={50}
                    floatingIcon={<MaterialIcons name="edit" size={20} color="white" />} 
                    color='#65799B' position="center" onPressMain={this.onPressEdit} actions={[]} showBackground={false} />

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'white'
    },
    content:{
      flex: 1,
      alignItems: 'center',
      marginTop: 60
    //   justifyContent: 'center',
    },
    card: {
        width: 300,
        height: 450,
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
        width: 0,
        height: 1
        },
        shadowOpacity:0.5,
    },
    card1: {
        backgroundColor: '#EEEEEE',
    },
    card2: {
        backgroundColor: '#FEB12C',
    },
    label: {
      lineHeight: 400,
      textAlign: 'center',
      fontSize: 55,
      fontFamily: 'System',
      color: 'black',
      backgroundColor: 'transparent',
    },
    footer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    buttonContainer:{
      width:220,
      flexDirection:'row',
      justifyContent: 'space-between',
    },
    button:{
      shadowColor: 'rgba(0,0,0,0.3)',
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowOpacity:0.5,
      backgroundColor:'#fff',
      alignItems:'center',
      justifyContent:'center',
      zIndex: 0,
    },
    orange:{
      width:55,
      height:55,
      borderWidth:6,
      borderColor:'rgb(246,190,66)',
      borderWidth:4,
      borderRadius:55,
      marginTop:-15
    },
    green:{
      width:75,
      height:75,
      backgroundColor:'#fff',
      borderRadius:75,
      borderWidth:6,
      borderColor:'#01df8a',
    },
    red:{
      width:75,
      height:75,
      backgroundColor:'#fff',
      borderRadius:75,
      borderWidth:6,
      borderColor:'#fd267d',
    }
  });