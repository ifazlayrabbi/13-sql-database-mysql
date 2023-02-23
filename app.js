import express from 'express'
const app = express()

import dotenv from 'dotenv'
dotenv.config()

app.set('view engine', 'ejs')

import { dirname } from 'path'
import { fileURLToPath } from 'url'
const __dirname = dirname(fileURLToPath(import.meta.url))

import {create_data, read_data, update_data, delete_data, read_all_data} from './database.js'







app.get('/', async (req, res) => {
  const readAllData = await read_all_data()
  res.send(readAllData)
})

app.get('/get/:title_name', async (req, res) => {
  const titleName = req.params.title_name
  const readData = await read_data(titleName)
  res.send(readData)
})

app.get('/create', (req, res) => {
  res.sendFile(__dirname + '/create.html')
  // res.sendFile('D:/Work/ACodeX/A Web/projects/p04 - Web Course/back-end/08 SQL Database/create.html')
  // res.render('create')
})



app.post('/create', (req, res) => {
  const title = req.body.title
  const contents = req.body.contents

})









app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log('Server is running on port '+port))
