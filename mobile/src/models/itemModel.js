export default class ItemModel {
    constructor(title, creator, link, pubdate, description, channel_id, liked, readed){

        this.title = title;
        this.creator = creator;
        this.link = link;
        this.pubdate = pubdate;
        this.description = description;
        this.channel_id = channel_id;
        this.liked = liked;
        this.readed = readed;
    }

}