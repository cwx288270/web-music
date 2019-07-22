var express = require('express');
var router = express.Router();

var db = require('./db')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/user/login',function(req,res,netx){
     let name = req.body.username
     let password = req.body.password
     let sql = 'select * from user'
     if(name){
       sql += "where name='"+name+"'"
     }
     if(password){
       sql += "and password='"+password+"'"
     }
     db.query(sql,function(err,rows){
       if(err){
          req.send('查询失败:',err)
       }else{
         res.send('result',{
            data:rows,
            message:'ok'
         })
       }
     })
})


module.exports = router;
