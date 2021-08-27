<template>
  <div class="big">
    <div class="dl_big">
      <img src="@/assets/切图/sh.png" alt />
    </div>
    <div class="dl_kong"></div>
    <div class="dl_big2">
      <div class="dl_input">
        <span class="dl_input_sp">
          <input type="text" placeholder="请输入手机号" v-model="mobile" />
        </span>
        <span class="dl_input_sp2" @click="hq" v-show="!spp">获取验证码</span>
        <span class="dl_input_sp3" @click="hq" v-show="spp">{{shu}}s</span>
      </div>
      <p>
        <input class="input" type="text" placeholder="请输入短信验证码" v-model="yzm" />
      </p>
      <div class="dl_zc">
        <span>*未注册的手机号将自动注册</span>
        <span>使用密码登录</span>
      </div>
      <div class="dl_dibu">
        <button @click="login">登录</button>
        <p>
          <img class="dl_dibu_img" src="@/assets/切图/dg.png" alt /> 我同意
          <span class="dl_dibu_ys">用户注册协议</span>和
          <span class="dl_dibu_ys">隐私保护协议</span>
        </p>
      </div>
    </div>
    <div class="dl_tk" v-show="flag">手机号格式不对</div>
    <div class="dl_tkk" v-show="flag2">请输入验证码</div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      mobile: "",
      flag: false,
      flag2: false,
      num: 3,
      code: 200,
      yzm: "",
      shu:60,
      spp:false
    };
  },
  methods: {
    async hq() {
      this.spp=true
      var tir=setInterval(()=>{
        this.shu--
        if(this.shu==0){
          this.shu=60
          clearInterval(tir)
          this.spp=false
        }
      },1000)
      if (this.mobile == "") {
        this.flag = true;
        var tiem = setInterval(() => {
          this.num--;
          console.log(tiem);
          if (this.num == 0) {
            this.num = 3;
            this.flag = false;
            clearInterval(tiem);
          }
        }, 1000);
      } else {
        var res = await this.$http.post(
          "http://120.53.31.103:84/api/app/smsCode",
          {
            mobile: this.mobile,
            sms_type: "login",
          }
        );
        console.log(res);
      }
    },
    login() {
      if (this.yzm == "") {
        this.flag2 = true;
        var tiem = setInterval(() => {
          this.num--;
          if (this.num == 0) {
            this.num = 3;
            this.flag2 = false;
            clearInterval(tiem);
          }
        }, 1000);
      } else {
        if ((this.code = 200)) {
          this.$router.push("/pass");
        }
      }
    },
  },
};
</script>
<style>
.big {
  width: 100%;
  height: 1200px;
  position: relative;
}
.dl_big {
  width: 100%;
  height: 700px;
}
.dl_big img {
  width: 100%;
  height: 700px;
}
.dl_kong {
  width: 100%;
  height: 30px;
  background: whitesmoke;
}
.dl_big2 {
  width: 90%;
  margin: auto;
  height: 700px;
  line-height: 150px;
}
.dl_input {
  width: 100%;
  height: 100px;
  display: flex;
  font-size: 30px;
  border-bottom: 1px solid gainsboro;
}
.dl_input_sp {
  width: 70%;
  line-height: 100px;
}
.dl_input_sp input {
  width: 100%;
  height: 50px;
  border: none;
}
.dl_input_sp2 {
  width: 30%;
  color: red;
  text-align: center;
  font-size: 20px;
  line-height: 100px;
}
.dl_input_sp3{
  width: 30%;
  color: red;
  text-align: center;
  font-size: 20px;
  line-height: 100px;
}
.input {
  width: 100%;
  height: 100px;
  border: none;
  font-size: 30px;
  border-bottom: 1px solid gainsboro;
}
.dl_zc {
  width: 100%;
  height: 100px;
  font-size: 30px;
  display: flex;
  justify-content: space-between;
  color: gray;
}
.dl_dibu {
  width: 100%;
  height: 200px;
  line-height: 100px;
  margin-top: 100px;
}
.dl_dibu button {
  width: 100%;
  border: none;
  background: linear-gradient(
    to right,
    rgb(245, 90, 141),
    rgba(219, 11, 11, 0.836)
  );
  box-shadow: 0px 3px 8px rgb(224, 9, 9);
  color: white;
  font-size: 35px;
}
.dl_dibu p {
  font-size: 26px;
}
.dl_dibu_ys {
  color: rgb(255, 28, 28);
}
.dl_dibu_img {
  width: 30px;
}
.dl_tk {
  width: 500px;
  height: 100px;
  background: black;
  color: white;
  text-align: center;
  line-height: 100px;
  font-size: 40px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
}
.dl_tkk {
  width: 500px;
  height: 100px;
  background: black;
  color: white;
  text-align: center;
  line-height: 100px;
  font-size: 40px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
}
</style>