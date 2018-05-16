import { action, observable, computed } from 'mobx'



export default class AppStore {
    
    @observable productList = []
    @observable cartList = []

    @computed get totalInCart() {
        return 12345.00
    }

    @action("sets cart list")
    setCartList(cart) {
        this.cartList = cart
    }

    @action("adds to cart") 
    addCart(item) {
        this.cartList.push(item)
    }

    @action("removes from cart")
    removeFromCart(itemIndex) {
        //removing from cart means readjusting the totals
        this.cartList.splice(itemIndex, 1)
    }
}