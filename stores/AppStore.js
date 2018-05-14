import { action, observable, computed } from 'mobx'



export default class AppStore {
    
    @observable cartAddMode = true
    @observable productAddMode = false

    @action("sets cartAddMode")
    toggleCartAddMode(b) {
        this.cartAddMode = b
    }

    @action("sets productAddMode")
    toggleProductAddMode(b) {
        this.productAddMode = b
    }
}