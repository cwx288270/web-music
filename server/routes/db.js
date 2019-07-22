var mysql = require('mysql')
var db_config = {
    host:'localhost',
    user:'root',
    port:'3306',
    password:'805912',
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
