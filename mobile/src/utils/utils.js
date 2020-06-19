const parseString = require('react-native-xml2js').parseString;


class Utils {

    constructor() {
    }

    changeNameTags(name) {

        switch (name) {
            case 'content:encoded':
                name = 'content';
                return name;
            case 'dc:creator':
                name = 'creator';
                return name;                
            default:
                return name;
        }
    }

    async parserXmlToJson(xmlData) {
        var channel = {};

        parseString(xmlData, {
            trim: true,
            explicitRoot: false,
            ignoreAttrs: true,
            explicitArray: false,
            tagNameProcessors: [this.changeNameTags]

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