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


async function create_data (title, contents){
  await pool.query(`
  insert into notes (title, contents) values 
  ( ? , ?)
  `, [title, contents])
}
await create_data('title3', 'describes, how to play dice')



