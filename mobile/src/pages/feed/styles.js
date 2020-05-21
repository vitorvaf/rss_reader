import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { color } from 'react-native-reanimated';


module.exports = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        paddingTop: 25,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: "row",
    },

    logo: {

    },

    input: {
        borderRadius: 8,
        backgroundColor: "#FFFF",
        borderBottomColor: '#000000',
        paddingHorizontal: 10,
        width: 210

    },

    headerText: {
        paddingHorizontal: 10,

    },

    itemList: {
        flex: 1,
        marginTop: 20,

    },

    description: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "#0000",
        marginTop: 15,

    },

    content: {
        flex: 1,
        backgroundColor: "#0000",
        fontSize: 20,

    }
});