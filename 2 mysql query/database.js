
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



export async function query (sql) {
  const query = await pool.query ('' + sql)
  console.log(query[0])
  return query[0]
}
let sql = `select * from notes;`
// await query (sql)



export async function create (title, contents){
  await pool.query(`
    insert into notes (title, contents) 
    values (?, ?);
  `, [title, contents])
  console.log(await read (title))
  return await read (title)
}
// await create ('title6', '6')



export async function read (title){
  const readData = await pool.query(`
    select * from notes 
    where title = ?;
  `, [title])
  return readData[0][0]
}
// console.log(await read ('title6'))



export async function update (newData, oldData){
  // alter table notes change column title newTitle varchar(50) not null
  await pool.query(`
    update notes set title = ? 
    where title = ?;
  `, [newData, oldData])
  console.log(await read (newData))
  return await read (newData)
}
// await update ('title7', 'title6')



export async function deleteX (start, end){
  await pool.query(`
    delete from notes 
    where id between ? and ?;
  `, [start, end])
  console.log(await read_all())
  return await read_all()
}
// await deleteX (3, 114)



export async function read_all (){
  const readAllData = await pool.query(`
    select * from notes;
  `)
  return readAllData[0]
}
// console.log(await read_all())

