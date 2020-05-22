import { StyleSheet }  from 'react-native'
import Constants from 'expo-constants'

module.exports = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: Constants.statusBarHeight + 20,

    },

    header: {  
        padding: 5,
        paddingTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    input: {
        marginTop: 30,        
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#FFF',
        borderRadius: 9,
    },

    channel: {
        paddingTop: 40,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems:'center',
        padding: 60
    }, 

    channelImage: {
        width: 100,
        height: 100,
        resizeMode: 'stretch',
    }, 

    channelName: {
        fontSize: 22,
        fontWeight: 'bold'


    }, 

    channelDescription: {
        marginTop: 5,
        fontSize: 15
    }


});