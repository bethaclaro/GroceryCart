import { action, observable, computed } from 'mobx'



export default class AppStore {
    
    @observable productList = []
    @observable cartList = []
    @observable scannedBarcode

    @computed get findInProductList() {
        let found = this.productList.filter((item)=>{
            return item.barcode === this.scannedBarcode
        })

        return found
    }

    @computed get totalInCart() {
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
    removeFromCart(item) {
        let newcart = this.cartList.filter((i)=>{
            return i.barcode !== item.barcode
        })

        this.setCartList(newcart)
    }



    @action("sets barcode scanned")
    setScannedBarcode(barcode) {
        this.scannedBarcode = barcode
    }


    @action("sets product list")
    setProductList(products) {
        this.productList = products
    }

}