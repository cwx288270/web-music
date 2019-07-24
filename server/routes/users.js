var express = require('express');
var router = express.Router();

var db = require('./db')

const DBHelper = require('./DBHelper');
const sql = require('./sqlMap');
/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('hellow world,my first node');
  res.status(200).send({ error: 'something blew up' });
});


// 查询用户
router.post('/selectUser', (req, res) => {
  let sqlStr = sql.user.select;
  let params = req.body.username;
  let conn = new DBHelper().getConn();
  conn.query(sqlStr, [params], (err, result) => {
      if (err) {
          res.json(err);
      } else {
          res.json(result)
      }
  });
  conn.end();
});


// 查询用户
router.post('/login', (req, res) => {
  let name = req.body.username
  let password = req.body.password
  let conn = new DBHelper().getConn();
  // let sql1 = `select * from user where name=${name} and password=${password}`
  let sqlstr = sql.user.login
  conn.query(sqlstr,[name,password] ,(err, result) => {
      if (err) {
          res.json(err);
      } else {
          res.send({
            code:'ok',  
            data:result
          })
      }
  });
  conn.end();
});

module.exports = router;
