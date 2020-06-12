const parseString = require('react-native-xml2js').parseString;


class Utils {

    constructor() {
    }

    async parserXmlToJson(xmlData) {
        var channel = {};

        parseString(xmlData, {
            trim: true,
            explicitRoot: false,
            ignoreAttrs: true,
            explicitArray: false

        }, (err, result) => {
            try {
                var str = JSON.stringify(result);            
                channel = JSON.parse(str);
                
            } catch (error) {
                console.log(error)
            }
            
        });

        return channel;
    }

}


export default new Utils();