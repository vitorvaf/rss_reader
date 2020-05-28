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
                // console.log(err);
                var str = JSON.stringify(result);            
                // console.log(str);
                channel = JSON.parse(str);
                // console.log(channel);
            } catch (error) {
                console.log(error)
            }
            
        });

        return channel;
    }

}


export default new Utils();