
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
    insert into notes (title, contents) 
    values (?, ?);
  `, [title, contents])
  console.log(await read_data(title))
  return await read_data(title)
}
// await create_data ('title6', '6')



export async function read_data (title){
  const readData = await pool.query(`
    select * from notes 
    where title = ?;
  `, [title])
  return readData[0][0]
}
// console.log(await read_data('title6'))



export async function update_data (newData, oldData){
  await pool.query(`
    update notes set title = ? 
    where title = ?;
  `, [newData, oldData])
  console.log(await read_data(newData))
  return await read_data(newData)
}
// await update_data ('title7', 'title6')



export async function delete_data (start, end){
  await pool.query(`
    delete from notes 
    where id between ? and ?;
  `, [start, end])
  console.log(await read_all_data())
  return await read_all_data()
}
// await delete_data(2, 108)



export async function read_all_data (){
  const readAllData = await pool.query(`
    select * from notes;
  `)
  return readAllData[0]
}
// console.log(await read_all_data())

