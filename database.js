import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()
const env = process.env



const pool = mysql.createPool({
  host: env.HOST,
  user: env.USER,
  password: env.PASSWORD,
  database: env.DATABASE
}).promise()

const result = await pool.query('select * from notes')
console.log(result[0])


