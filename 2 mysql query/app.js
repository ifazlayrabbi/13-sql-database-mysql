
import express from 'express'
const app = express()

import dotenv from 'dotenv'
dotenv.config()

import bodyParser from 'body-parser'
app.use(bodyParser.urlencoded({extended:true}))

import {dirname} from 'path'
import {fileURLToPath} from 'url'
const __dirname = dirname(fileURLToPath(import.meta.url))

import {query, create, read, update, deleteX, read_all} from './database.js'







app.get('/query', async (req, res) =>{
  // insert into notes (title, contents) values ('title3', '3');
  // select * from notes where title='title1';
  // update notes set title='title5' where id='124';
  // delete from notes where id between 121 and 124;

  let sql = `

  insert into notes (title, contents) values ('title5', '5');

  `
  res.send (await query(sql))
})

app.get('/create', async (req, res) => {
  let title = 'title2'
  let contents = '2'
  res.send(await create (title, contents))
})

app.get('/read', async (req, res) => {
  let title = 'title1'
  let readD = await read(title)
  console.log(readD)
  res.send(readD)
})

app.get('/update', async (req, res) => {
  let newData = 'title3'
  let oldData = 'title2'
  res.send(await update(newData, oldData))
})

app.get('/delete', async (req, res) => {
  res.send (await deleteX(116, 121))
})

app.get('/', async (req, res) => {
  let readAll = await read_all ()
  console.log(readAll)
  res.send (readAll)
})






const port = process.env.PORT || 3000 
app.listen(port, () => console.log('Server is running on port ' + port))
