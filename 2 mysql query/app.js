
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



const pages = ['/query', '/create', '/read', '/update', '/delete']

pages.forEach((element) => {
  app.get(element, async (req, res) => {
    res.sendFile(__dirname + '/pages' + element + '.html')
  })
})

app.get('/', async (req, res) => {
  res.sendFile(__dirname + '/pages/home.html')
})

app.get('/read_all', async (req, res) => {
  let readAll = await read_all ()
  console.log(readAll)
  res.send(readAll)
})



// app.get('/query', async (req, res) =>{
//   res.sendFile(__dirname + '/pages/query.html')
// })

// app.get('/create', async (req, res) => {
//   res.sendFile(__dirname + '/pages/create.html')
// })

// app.get('/read', async (req, res) => {
//   res.sendFile(__dirname + '/pages/read.html')
// })

// app.get('/update', async (req, res) => {
//   res.sendFile(__dirname + '/pages/update.html')
// })

// app.get('/delete', async (req, res) => {
//   res.sendFile(__dirname + '/pages/delete.html')
// })







app.post('/query', async (req, res) =>{
  // insert into notes (title, contents) values ('title3', '3');
  // select * from notes where title='title1';
  // update notes set title='title5' where id='124';
  // delete from notes where id between 121 and 124;

  const sql = req.body.sql
  console.log(sql)
  res.send (await query(sql))
})


app.post('/create', async (req, res) => {
  const {title, contents} = req.body
  res.send(await create (title, contents))
})

app.post('/read', async (req, res) => {
  const title = req.body.title
  let readD = await read(title)
  console.log(readD)
  res.send(readD)
})

app.post('/update', async (req, res) => {
  const {newTitle, oldTitle} = req.body
  res.send(await update(newTitle, oldTitle))
})

app.post('/delete', async (req, res) => {
  const {startId, endId} = req.body
  res.send (await deleteX(startId, endId))
})

// app.post('/', async (req, res) => {
//   let readAll = await read_all ()
//   console.log(readAll)
//   res.send (readAll)
// })




const port = process.env.PORT || 3000 
app.listen(port, () => console.log('Server is running on port ' + port))
