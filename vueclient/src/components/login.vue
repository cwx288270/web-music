<template>
  <div class="backlogin" style="background: url('../assets/logo.png') no-repeat center center;">
        <div class="login_box">
            <div class="title">登录</div>
            <div class="login_input">
                <el-input type="text"  placeholder="手机号/用户名" v-model="username"></el-input>
            </div>
            <div class="login_input">
                <el-input  placeholder="口令" type="password" v-model="password"  @keyup.13="login"></el-input>
            </div>
            <div class="login_other">
                <a href="javascript:;">找回密码</a>
                <input type="checkbox" id="remenberme" />
                <label for="remenberme">记住我</label>
            </div>
            <el-button :disabled="disablebtn" class="login" @click="login">{{loginText}}</el-button>
        </div>
        
  </div>
</template>

<script>
import qs from 'qs';
export default {
    data(){
        return{
            username:'admin',
            password:"admin",
            loginText:"登录",    
            disablebtn:false,      
        }
    },
    methods: {
        login(){
            this.disablebtn = true
            this.loginText = "登录中..."
            this.$http.post('/api/users/login',qs.stringify({
                username:this.username,
                password:this.password
            },{
                  withCredentials : true
                }
            )).then(data=>{ 
                this.disablebtn = false
                this.loginText = '登录'
                console.log(data)
               this.$router.push('/home')
            },err=>{
                this.disablebtn = false
                this.loginText = '登录'
            })
        }
    },
}
</script>
<style scoped>
.login_input{
    margin-bottom: 20px;
}
    .header{
        height: 60px;
        box-shadow: 0 1px 5px rgba(13,62,73,0.2) ;
    }
    .header img{
        width: 170px;
        margin-top: 12px;
        margin-left: 15px;
        float: left;
    }
    .header span{
        float: left;
        color: #566a80;
        margin: 21px 0 0 20px;
    }
    .login_box{
        width: 320px;
        margin: 50px auto;
    }
    .login_box .myinput{
        width: 100%;
        border: 1px solid #cad3de;
        height: 40px;
        line-height: 40px;
        margin: 5px 0 10px;
        border-radius: 3px;
        padding: 0 10px;
        outline: none;
        box-sizing: border-box;
    }
    .login_box .myinput:focus{
        border: 1px solid #4289dc;
    }
    .login_other{
        overflow: hidden;
    }
    
    .login_other a{
        float: right;
        color: #727f8f;
    }
    .login_other a:hover{
        color: #273444;
    }
    .login_other input, .login_other label{
        float: left;
        color: #727f8f;
    }
    .login_other input{
        margin: 4px 5px 0 0;
    }
    .login{
        box-sizing: border-box;
        border: none 0;
        /* height: 44px;
        line-height: 44px; */
        width: 100%;
        background:#4187db;
        font-size: 16px;
        border-radius: 3px;
        margin-right: 40px;
        transition: all 0.5s ease;
        cursor: pointer;
        outline: none;
        color: #fff;
        margin-top: 15px;
    }
    .login:hover{
        background: #2668b5;
    }
    .login[disabled]{
        opacity: 0.8;
    }
    .login[disabled]:hover{
        background:#4187db;
    }
    .title{
        color: #273444;
        font-size: 1.5em;
        text-align: center;
        margin: 0 0 20px 0;
    }
    
    @media only screen and (max-width: 768px) {
        .login_box{
            width: 280px;
            margin: 50px auto;
        }
    }
</style>
