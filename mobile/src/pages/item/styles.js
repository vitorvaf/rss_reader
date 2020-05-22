import { StyleSheet }  from 'react-native'
import Constants from 'expo-constants'

module.exports = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: Constants.statusBarHeight + 20,
        justifyContent:'flex-start'

    } ,

    header: {  
        padding: 5,
        paddingTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'nowrap'
    },

    item: {
        flexDirection:'column',        
        flex:1,
        marginTop: 25
    }, 

    itemTitle: {
        fontSize: 25,
        marginBottom: 8,
        fontWeight: 'bold'
    },

    itemAuthor:{
        fontWeight: 'bold',
        fontSize: 15,
    },
    itemPublishDate:{
        marginBottom: 30
    }

    

});

   
