import express from 'express'
const app = express()

import dotenv from 'dotenv'
dotenv.config()

import {create_data, read_data, update_data, delete_data, read_all_data} from './database.js'







// app.get('/', async (req, res) => {
//   const readAllData = await read_all_data()
//   res.send(readAllData)
// })

app.get('/', async (req, res) => {
  const readData = await read_data('title6')
  res.send(readData)
})


app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})







const port = process.env.PORT || 3000
app.listen(port, () => console.log('Server is running on port '+port))
