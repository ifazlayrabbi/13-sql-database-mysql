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



export async function create_data (title, contents){
  await pool.query(`
  insert into notes (title, contents) values 
  ( ? , ?)`, [title, contents])
}
// await create_data('title5', 'describes, how to play nice')



export async function read_data(title){
  const result = await pool.query(`
  select * from notes
  where title = ?`, [title])
  return result[0][0]
}
// await read_data('title5')



export async function update_data (){
  await pool.query(`
    update notes set title = 'title7' where title = 'title5'
  `)
}
// await update_data()



export async function delete_data (){
  await pool.query(`
  delete from notes where id between 31 and 35
  `)
}
// await delete_data()



export async function read_all_data(){
  const result = await pool.query(`
  select * from notes
  `)
  return result[0]
}
// await read_all_data()