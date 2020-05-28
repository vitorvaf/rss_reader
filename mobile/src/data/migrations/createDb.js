// import realm from 'realm';
import Channel from '../../models/channel_model';
import  Item from '../../models/item_model';


module.exports = () => {

    realm.open({ schema: [Channel, Item]})
    .catch(error => {
        console.log(error);
    });
};
