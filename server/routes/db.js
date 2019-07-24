var mysql = require('mysql')
var db_config = {
    host:'localhost',
    port:3306,
    user:'root',
    password:'password',
    database:'webmusic'
}

// var connection = mysql.createConnection(db_config)
var pool = mysql.createPool(db_config);
//利用connection.connect()的回调函数添加重连功能:
// function handleDisconnect(){
//     connection.connect(function (err) {
//         // callback(err,result);
//         // if(err){
//         //     console.log(err);
//         //     console.log("try to connect");
//         //     setTimeout(handleDisconnect,2000);  //经过1秒后尝试重新连接
//         //     return;
//         // }
//         console.log("Success");
//     });
// }
// handleDisconnect();
// var sql = 'SELECT * FROM user';
// var str = " ";
// connection.query(sql, function (err,result) {
//     if(err){
//         console.log('[SELECT ERROR]:',err.message);
//     }
//     str = JSON.stringify(result);
//     //数据库查询的数据保存在result中，但浏览器并不能直接读取result中的结果，因此需要用JSON进行解析
//     //console.log(result);   //数据库查询结果返回到result中
//     console.log(str);
// });
// connection.end();  
function query(sql,callback){
    pool.getConnection(function(err,connection){
        connection.query(sql, function (err,rows) {
            callback(err,rows);
            connection.release();
        });
    });
}

exports.query = query;
