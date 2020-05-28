
const ItemSchema = {
    title: 'string',
    link: 'string',
    creator: 'string',
    description: 'string',
    pubDate: 'string',
    content: 'string',
    read: 'bool',
    liked: { type: 'bool', default: 0 }
}

export default ItemSchema;


