
const ChannelSchema = {
    name: 'Channel',

    properties:{
        title: 'string',
        link: 'string',
        description: 'string',
        pubDate: 'string',
        image: 'string',
        items: { type: 'list', objectType: 'Item'}        
    }
};

export default ChannelSchema;