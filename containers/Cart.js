import React, { Component } from 'react'
import { SafeAreaView, Text, View, ScrollView, StyleSheet, Picker } from 'react-native'
import defStyles from './defaultStyles'
import { observable, computed } from 'mobx'
import { observer, inject } from 'mobx-react/native'
import ShowPicker from '../components/ShowPicker'
import { FloatingAction } from 'react-native-floating-action'
import { MaterialIcons } from '@expo/vector-icons'
import Swiper from 'react-native-deck-swiper'


@inject('appStore')
@observer
export default class Cart extends Component {

    @observable selectedItem
    @observable addMode = true
    @observable pickerModalVisible = false
    @observable swipedIndex = 0
    
    constructor(props) {
        super(props)
        
        this.appStore = this.props.appStore
        this.onPressAdd = this.onPressAdd.bind(this)
        this.onCancelModal = this.onCancelModal.bind(this)

        this.onDeleteSwipe = this.onDeleteSwipe.bind(this)
        this.onEditTap = this.onEditTap.bind(this)

    }

    onPressAdd(e) {
        console.log("add button pressed")
    }

    onDeleteSwipe(e) {
        console.log("swipe up! delete item at index " + e)
        this.appStore.removeFromCart(e)
    }
    
    onEditTap(e) {
        this.swipedIndex = e
        this.pickerModalVisible = true
    }

    onCancelModal() {
        this.pickerModalVisible = false
    }

    renderCard(item) {
        return (
            <View style={[styles.card, styles.card1]}>
                <Text style={{padding: 10}}>Barcode: {item.barcode}</Text>
                <Text style={[styles.text, styles.itemDescription]}>{item.itemDescription}</Text>
                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} >
                    <Text style={[styles.text, {fontSize: 16, marginBottom: 10}]}>Quantity <MaterialIcons name="edit" size={20} color='gray'/></Text>
                    <Text style={[styles.text, {fontSize: 22, fontWeight: 'bold', marginBottom: 10}]}>{item.qty}</Text>
                </View>
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView style={defStyles.container} onPress={this.onPressOutside} >

                <ShowPicker visible={this.pickerModalVisible} onCancel={this.onCancelModal} selectedValue={this.appStore.cartList[this.swipedIndex].qty} /> 

                <Text style={defStyles.resultText}>{this.appStore.totalInCart.toLocaleString('en', {minimumFractionDigits: 2})}</Text>

                <View style={styles.container} >
                   <Swiper cardStyle={styles.cardContainer} backgroundColor="gray"
                        ref={swiper => {this.swiper = swiper}}
                        cards={this.appStore.cartList} 
                        renderCard={this.renderCard}
                        infinite={true} showSecondCard={true} stackSize={this.appStore.cartList.length}
                        disableBottomSwipe={true}
                        onSwipedTop={this.onDeleteSwipe} onTapCard={this.onEditTap} 
                        cardIndex={this.swipedIndex}
                   />
                </View>

                <FloatingAction visible={this.addMode} distanceToEdge={50}
                    floatingIcon={<MaterialIcons name="add" size={40} color="white" />}
                    color='#65799B' position="center" onPressMain={this.onPressAdd} actions={[]} showBackground={false} />

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    }, 
    container: {
      flex: 1,
    },
    content:{
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
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