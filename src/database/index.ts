import "reflect-metadata"
import {DataSource} from "typeorm";
import * as Entity from "./entites"
export default new DataSource({
    type:'mysql',
    database:'test_db',
    host:'localhost',
    password:'',
    username:'root',
    port:3306,
    logging:'all',
    synchronize:true,
    migrationsRun: true,
    dropSchema: true,
    entities:[Entity.Users]
})