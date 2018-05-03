import ScanNew from '../containers/ScanNew'
import { TabNavigator, StackNavigator } from 'react-navigation'
import Cart from './Cart'


export default TabNavigator({
    Cart: {screen: Cart},
    Add: {screen: ScanNew}
})