import {Router} from "express"
import { AddUser, GetOneUser } from "../Controllers/all.controller";
const route =  Router();
route.post('/add',async(req,res)=>{
   let data = await AddUser(req.body)
    res.status(data.status).json(data)
})
route.get('/:id',async(req,res)=>{
    let data = await GetOneUser(req.body)
     res.status(data.status).json(data)
 })
export default route;