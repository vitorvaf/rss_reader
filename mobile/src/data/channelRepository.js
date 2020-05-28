const realm = require('realm');

module.exports = () => {

    async function create(channelModel) {

        try {
            realm.create('Channel', {
                title: channelModel.title,
                link: channelModel.link,
                description: channelModel.description,
                pubdate: channelModel.pubdate,
                image: channelModel.image,
                items: channelModel.items
            });

            return true;

        } catch (error) {

            console.log('erro on creation channel')
            return false;

        }
    };


    async function getChannels() {

        try {

            let channels = realm.objects('Channel');
            return channels;

        } catch (error) {

            console.log('Erro on get all Channels');

        }

    };

}









