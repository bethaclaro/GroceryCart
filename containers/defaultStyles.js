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
    result: {
        backgroundColor: '#eeeeee',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    resultText: {
        height: 70,
        backgroundColor: '#8ea6b4',
        color: 'white',
        fontSize: 35,
        textAlign: 'right',
        textAlignVertical: 'center',
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    scrollableContent: {
        flex: 1,
        backgroundColor: 'gray'
    }
})