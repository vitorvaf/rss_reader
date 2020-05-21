import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'


module.exports = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: Constants.statusBarHeight + 20,

    },

    header: {
        flex: 0,
        padding: 5,
        paddingTop: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: "row",
        borderBottomColor: "black"

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
        fontWeight: 'bold'

    },

    itemList: {
        flex: 1,
        marginTop: 20,

    },

    title: {
        fontSize: 15,
        fontWeight: "bold",
        paddingBottom: 10

    },

    description: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        backgroundColor: "#0000",
        marginTop: 15,

    },
});