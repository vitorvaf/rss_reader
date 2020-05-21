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
        flex: 1,
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems:'center',
      
    }, 

    channelImage: {
        width: 100,
        height: 100,
        resizeMode: 'stretch',
    }




});