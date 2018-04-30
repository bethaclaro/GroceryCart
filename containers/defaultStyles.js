import { StyleSheet, Dimensions } from 'react-native';

// const width = Dimensions.get('window').width;
// const height = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a3c40'
      },
    header: {
        height: 50,
        paddingTop: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    button: {
        backgroundColor: '#137EA8',
        width: "50%"
    },
    menuContainer: {
        backgroundColor: '#e4eddb',
        flex: 1,
        paddingTop: 15
    }
})