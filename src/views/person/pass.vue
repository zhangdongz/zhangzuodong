<template>
    <div>
        <div class="passdll" >
      <div class="passdl">
        <van-field v-model="phone" placeholder="请输入手机号"/>
        <van-field v-model="yzm" placeholder="请输入验证码"/>
        <van-field v-model="password" placeholder="请输入密码"/>
      </div>
      <div class="passanniu">
        <van-button v-show="!spp" class="passyz" plain type="primary" @click="yz">获取验证码</van-button>
        <span v-show="spp"  @click="yz">{{shu}}s</span>
      </div>
    </div>
    <van-button class="passqd" type="info" @click="queding">确定</van-button>
    </div>
</template>
<script>
import { smsCode,password} from "@/http/api";
export default {
    data(){
        return{
              phone: "",
              yzm: "",
              password:"",
              spp: false,
              shu: 60,
        }
    },
    methods:{
        async yz() {
      const regMobile = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
      if (!regMobile.test(this.phone) || this.pnone == "") {
        return this.$toast("手机号不符规则");
      } else {
        this.spp = true;
        var time = setInterval(() => {
          this.shu--;
          if (this.shu == 0) {
            this.shu = 60;
            clearInterval(time);
            this.spp = false;
          }
        },1000);
        let res = await smsCode({ mobile: this.phone, sms_type: "login" });
        console.log(res);
      }
    },
    async queding(){
      if(this.phone==''||this.password==''||this.yzm==''){
          return this.$toast("请填写完整");
      }else{
         var obj = {
          mobile: `${this.phone}`,
          password: `${this.password}`,
          sms_code:`${this.yzm}`,
        };
        let res = await password(obj);
        console.log(res);
      }
    }
    }
}
</script>
<style>
.passdll {
  height: 160px;
  display: flex;
  justify-content: space-evenly;
  /* background: red; */
}
.passdl{
  width: 60%;
  height: 180px;
  margin-left: 30px;
  margin-top: 30px;
}
.passanniu{
  margin-right: 30px;
  margin-top: 30px;
}
.passyz{
  width: 102px;
  border-style: none;
}
.passqd{
    margin-left: 150px;
}
</style>
