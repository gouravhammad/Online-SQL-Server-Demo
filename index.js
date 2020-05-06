const mysql = require('mysql')

const connection = mysql.createConnection({
    host:'remotemysql.com',
    user:'Your_username',
    password:'Your_password',
    database:'Your_Database_name'
})

connection.query('SELECT NOW()',function(error,result){
    if(error) throw error
    console.log(result)
})