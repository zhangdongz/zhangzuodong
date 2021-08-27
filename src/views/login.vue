<template>
    <div class="login">
        <img class="tu" src="/img/1.png" alt="">
        <div class="dll">
             <div class="dl">
        <van-field v-model="phone" placeholder="请输入手机号"/>
        <van-field v-model="yzm" placeholder="请输入验证码"/>
            </div>
            <div class="anniu">
                <van-button v-show="!spp" class="yz" plain type="primary" @click="yz">获取验证码</van-button>
                <span v-show="spp" @click="yz">{{shu}}s</span>
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
        phone:'',
        yzm:'',
        spp:false,
        shu:60,
    }
},
methods:{
       async yz(){
             const regMobile = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/; 
             if(!regMobile.test(this.phone)||this.pnone==''){
              return  this.$toast('手机号不符规则')
             }else{
                  this.spp=true
            var tir=setInterval(()=>{
            this.shu--
            if(this.shu==0){
          this.shu=60
          clearInterval(tir)
          this.spp=false
        }
      },1000)
                let res=await this.$http.post("http://120.53.31.103:84/api/app/smsCode",
                 {
                    mobile:this.phone,
                    sms_type: "login",
                })
                console.log(res);
             }
        },
        login(){
            if(this.yzm==""){
              return  this.$toast('请输入验证码')
            }else{
                if((this.code=200)){
                    this.$toast('登录成功')
                    this.$router.push("/pass");
                }
            }
        }

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
