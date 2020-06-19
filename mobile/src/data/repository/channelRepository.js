import { Channel } from '../../models/channelModel';
import { DatabaseConnection } from '../databaseConnection';


const table = 'channel';
const db = DatabaseConnection.getConnection();

async function create(channelModel) {
    return new Promise((resolve, reject) => db.transaction(
        tx => {
            tx.executeSql(`insert into ${table}
                                 (title, link, description, image) 
                    values (?,?,?,?)`,
            [channelModel.title,
            channelModel.link,
            channelModel.description,
            channelModel.image],
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


async function getChannels() {

    return new Promise((resolve, reject) => db.transaction(tx => {
        tx.executeSql(`select * from ${table}`, [], (_, { rows }) => {
            resolve(rows)
        }), (sqlError) => {
            console.log(sqlError);
        }
    }, (txError) => {
        console.log(txError);
    }))
};

async function getByName(title) {

    return new Promise((resolve, reject) => db.transaction(tx => {
        tx.executeSql(`select * from ${table} where title like ${title}`, [], (_, { rows }) => {
            resolve(rows)
        }), (sqlError) => {
            console.log(sqlError);
        }
    }, (txError) => {
        console.log(txError);
    }))
};


export { create, getChannels, getByName };










