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
        height: 100,
        lineHeight: 100,
        backgroundColor: '#393e46',
        color: 'white',
        fontSize: 40,
        textAlign: 'right',
        textAlignVertical: 'center',
        paddingRight: 20,
    },
    scrollableContent: {
        flex: 1,
        backgroundColor: 'gray'
    }
})