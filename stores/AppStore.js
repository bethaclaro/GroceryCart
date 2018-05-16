import { action, observable, computed } from 'mobx'



export default class AppStore {
    
    @observable productList = []
    @observable cartList = []

    @computed get totalInCart() {
        // return 12345.00
        let total = 0
        let cart = this.cartList
        cart.map((item)=>{
            let subtotal = item.qty * item.price
            total = total + subtotal
        })
        return total
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
        console.log("HERE")
        this.cartList.splice(itemIndex, 1)
        console.log("new cartlist")
        console.log(this.cartList)
    }
}