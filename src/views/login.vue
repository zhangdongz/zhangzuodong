<template>
    <div class="login">
        <img class="tu" src="/img/1.png" alt="">
        <div class="dll">
             <div class="dl">
        <van-field v-model="phone" placeholder="请输入手机号"/>
        <van-field type="password" placeholder="请输入密码"/>
            </div>
            <div class="anniu">
                <van-button class="yz" plain type="primary">获取验证码</van-button>
            </div>
        </div>

        <div class="xx">
            <span>*未注册的手机号将自动注册</span><span>使用密码登录</span>
        </div>
        <br/>
        <br/>
        <van-button class="jiao" color="linear-gradient(to right, #ff6034, #ee0a24)" @click="login">登录</van-button>
    </div>
</template>
<script>
export default {
data(){
    return{
        phone:''
    }
},
methods:{
        login(){
             const regMobile = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/; 
             if(!regMobile.test(this.phone)){
              return  Toast.fail('失败文案');
            //    return  alert ('手机')
             }
        },

}
}
</script>
<style>
.login{
    width: 375px;
    height: 100%;
}
.tu{
    width: 100%;
    height: 375px;
}
.dll{
 height: 120px;
 display: flex;
 justify-content: space-evenly;
 /* background: red; */
}
.dl{
    width: 60%;
    height: 180px;
     margin-left:30px;
    margin-top: 30px;
}
.anniu{
    margin-right:30px;
    margin-top: 30px; 
}
.yz{
    width: 102px;
    border-style: none;
}
.xx{
    display: flex;
    justify-content: space-evenly;
    color: #ccc;
}
.jiao{
    margin-left: 50px;
    width: 280px;
}
</style>
