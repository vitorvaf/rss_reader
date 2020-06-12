import { Item } from '../../models/itemModel';
import { DatabaseConnection } from '../databaseConnection';


const table = "item"
const db = DatabaseConnection.getConnection()

async function createItem(itemModel) {

    return new Promise((resolve, reject) => db.transaction(
        tx => {
            tx.executeSql(`insert into ${table} (title, creator, link, pubdate, description, channel_id, liked, readed) 
                values (?,?,?,?,?,?,?,?)`,
                [itemModel.title,
                itemModel.creator,
                itemModel.link,
                itemModel.pubdate,
                itemModel.description,
                itemModel.channel_id,
                itemModel.liked,
                itemModel.readed],
                (_, { insertId, rows }) => {
                    console.log("id insert: " + insertId);
                    resolve(insertId)
                }), (sqlError) => {
                    console.log(sqlError);
                }
        }, (txError) => {
            console.log(txError);
        }));
};

async function getItems(){
    return new Promise((resolve, reject) => db.transaction(tx => {
        tx.executeSql(`select * from ${table} ;`, [], (_,  { rows } ) => {            
            resolve( rows )
        }), (sqlError) => {
            console.log(sqlError);
        }
    }, (txError) => {
        console.log(txError);
    }))
}


export { createItem , getItems };
