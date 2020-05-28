const realm = require('realm');

module.exports = () => {


    async function createItem(itemModel) {

        realm.create('Item', {

            title: itemModel.title,
            link: itemModel.link,
            creator: itemModel.creator,
            description: itemModel.description,
            pubdate: itemModel.pubdate,
            content: itemModel.content,
            read: itemModel.read,
            liked: itemModel.liked
            
        });
    };
}