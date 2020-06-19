import { DatabaseConnection } from './databaseConnection';

var db = null;

export default class DatabaseInit {

    constructor() {
        db = DatabaseConnection.getConnection();
        db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
            console.log('Foreign keys turned on')
        );
        this.InitDb();
    }

    InitDb(){
        var sql = [
            `DROP TABLE IF EXISTS item;`,
            `DROP TABLE IF EXISTS channel;`,
            

            `create table if not exists channel (
            id integer primary key autoincrement,
            title text,
            link text,
            image text,
            description text
         
            );`,
            `create table if not exists item (
            id integer primary key autoincrement,
            title text,
            creator text,
            link text,
            pubDate text,
            description text,
            content text,
            channel_id int,
            liked bool,
            readed bool,
            foreign key (channel_id) references channel (id)
            );`
        ];

        db.transaction(
            tx => {
                for (var i = 0; i < sql.length; i++) {
                    console.log("execute sql : " + sql[i]);
                    tx.executeSql(sql[i]);
                }
            }, (error) => {
                console.log("error call back : " + JSON.stringify(error));
                console.log(error);
            }, () => {
                console.log("transaction complete call back ");
            }
        );

    }

}