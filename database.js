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
  ( ? , ?)`, [title, contents])
}
await create_data('title35', 'describes, how to play bad')



async function read_data(id){
  const result = await pool.query(`
  select * from notes
  where id = ?`, [id])
  console.log(result[0][0])
}
await read_data(35)
