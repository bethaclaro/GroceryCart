import React, { Component } from 'react';
import MainContainer from './containers/MainContainer'
import ScanNew from './containers/ScanNew'
import { Provider } from 'mobx-react/native'
import AppStore from './stores/AppStore'

const stores = {
  appStore: new AppStore()
}

export default class App extends Component {

  render() {
    return (
      <Provider {...stores}>
        <MainContainer />
      </Provider>
    )
  }
}