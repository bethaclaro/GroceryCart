import React, { Component } from 'react';
import MainContainer from './containers/MainContainer'
import ScanNew from './containers/ScanNew'
import { Provider } from 'mobx-react/native'
import AppStore from './stores/AppStore'

const stores = {
  appStore: new AppStore()
}

const tempCartData = [
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

const tempProductData = [
  {
      barcode: "1234567890",
      itemDescription: "Test Item 0",
      price: 20.50
  },
  {
      barcode: "0987654321",
      itemDescription: "Test Item 1",
      price: 30.50,
  },
]


// TO DO: Remove once local data storage has been setup
stores.appStore.setCartList(tempCartData)
stores.appStore.setProductList(tempProductData)

export default class App extends Component {

  render() {

    return (
      <Provider {...stores}>
        <MainContainer />
      </Provider>
    )
  }
}