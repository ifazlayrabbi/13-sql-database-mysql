
import express from 'express'
const app = express()

import dotenv from 'dotenv'
dotenv.config()

import bodyParser from 'body-parser'
app.use(bodyParser.urlencoded({extended:true}))

import {dirname} from 'path'
import {fileURLToPath} from 'url'
const __dirname = dirname(fileURLToPath(import.meta.url))

import {create_data, read_data, update_data, delete_data, read_all_data} from './database.js'





app.get('/', (req, res) => {
  res.send('<h1>SQL Database</h1>')
})










const port = process.env.PORT || 3000 
app.listen(port, () => console.log('Server is running on port ' + port))
