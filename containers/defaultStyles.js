import { StyleSheet, Dimensions } from 'react-native';

// const width = Dimensions.get('window').width;
// const height = Dimensions.get('window').height;

// Color scheme
// #E2EFF1
// #65799B
// #555273
// #e23e57

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E2EFF1'
      },
    header: {
        height: 50,
        paddingTop: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    button: {
        backgroundColor: '#65799B',
        width: "50%"
    },
    menuContainer: {
        backgroundColor: '#e4eddb',
        flex: 1,
        paddingTop: 15
    }
})