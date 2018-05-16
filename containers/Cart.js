import React, { Component } from 'react'
import { SafeAreaView, Text, View, ScrollView, StyleSheet, Picker } from 'react-native'
import defStyles from './defaultStyles'
import { observable, computed } from 'mobx'
import { observer, inject } from 'mobx-react/native'
// import { List, ListItem, ListView } from 'react-native-elements'
// import ListBadge from '../components/ListBadge'
import ShowPicker from '../components/ShowPicker'
import { FloatingAction } from 'react-native-floating-action'
import { MaterialIcons } from '@expo/vector-icons'
import CardStack, { Card } from 'react-native-card-stack-swiper'



// @inject('appStore')
@observer
export default class Cart extends Component {

    @observable cartTotal = 0
    @observable selectedItem
    @observable addMode = true
    @observable pickerModalVisible = false
    @observable swipedIndex = 0
    
    constructor(props) {
        super(props)
        
        this.renderRow = this.renderRow.bind(this)
        this.onPressItem = this.onPressItem.bind(this)
        this.onPressAdd = this.onPressAdd.bind(this)
        // this.onTapCard = this.onTapCard.bind(this)
        this.onPressOutside = this.onPressOutside.bind(this)
        this.onCancelModal = this.onCancelModal.bind(this)

        this.onSwipeUp = this.onSwipeUp.bind(this)
        // this.onSwipeLeft = this.onSwipeLeft.bind(this)
        // this.onSwipeRight = this.onSwipeRight.bind(this)
        this.moveCurrentIndex = this.moveCurrentIndex.bind(this)
        this.onSwipeDown = this.onSwipeDown.bind(this)

        this.tempData = [
            {
                barcode: "1234567890",
                itemDescription: "Test Item 0",
                price: 20.50,
                qty: 1
            },
            {
                barcode: "0987654321",
                itemDescription: "Test Item 1",
                price: 30.50,
                qty: 2
            },
            {
                barcode: "2351627381",
                itemDescription: "Test Item 2",
                price: 10.50,
                qty: 3
            },
            {
                barcode: "8904637182",
                itemDescription: "Test Item 3",
                price: 50.50,
                qty: 4
            }
        ]

    }

    onPressItem(e) {
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

    onPressOutside(e) {
        this.addMode = true
    }

    onSwipeUp(e) {
        console.log("swipe up!")
    }
    
    moveCurrentIndex(e) {
        this.swipedIndex = e
    }

    onSwipeDown(e) {
        this.swipedIndex = e
        this.pickerModalVisible = true
    }

    renderCards() {
        return (
            <CardStack style={styles.content} ref={swiper => { this.swiper = swiper }}
                        loop={true} verticalSwipe={true}
                        onSwipedBottom={this.onSwipeDown}
                        onSwipedTop={this.onSwipeUp}
                        // onSwipedLeft={this.moveCurrentIndex} onSwipedRight={this.moveCurrentIndex}
                >
                {this.tempData.map((item)=>{
                    return <Card style={[styles.card, styles.card1]} key={item.barcode}>
                        <Text style={{padding: 10}}>Barcode: {item.barcode}</Text>
                        <Text style={[styles.text, styles.itemDescription]}>{item.itemDescription}</Text>
                        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} >
                            <Text style={[styles.text, {fontSize: 16, marginBottom: 10}]}>Quantity <MaterialIcons name="edit" size={20} color='gray'/></Text>
                            <Text style={[styles.text, {fontSize: 22, fontWeight: 'bold', marginBottom: 10}]}>{item.qty}</Text>
                        </View>
                    </Card>
                })}
            </CardStack>
        )
        
    }

    onCancelModal() {
        this.pickerModalVisible = false
        // this.swiper.goBackFromBottom()
    }

    render() {
        return (
            <SafeAreaView style={defStyles.container} onPress={this.onPressOutside} >

                <ShowPicker visible={this.pickerModalVisible} onCancel={this.onCancelModal} selectedValue={this.tempData[this.swipedIndex].qty} /> 
                {/* selectedValue={this.getSelectedValue()} */}

                <Text style={defStyles.resultText}>{this.cartTotal.toLocaleString('en', {minimumFractionDigits: 2})}</Text>

                <View style={styles.container} >
                    {this.renderCards()}
                </View>

                <FloatingAction visible={this.addMode} distanceToEdge={50}
                    floatingIcon={<MaterialIcons name="add" size={40} color="white" />}
                    color='#65799B' position="center" onPressMain={this.onPressAdd} actions={[]} showBackground={false} />

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
        height: 400,
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
    text: {
        fontFamily: 'System',
        backgroundColor: 'transparent',
        // backgroundColor: 'blue',
        color: 'black'
    },
    itemDescription: {
        lineHeight: 100,
        textAlign: 'center',
        fontSize: 30,
    },
    qty: {
        fontSize: 20,
        textAlign: 'center'
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