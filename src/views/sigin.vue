<template>
    <div class="sida">
        <div class="sitop">
            <div class="sitop1">
                <div><img class="sitop1tu" src="/img/5.jpg" alt=""></div>
                <div>
                <p style="color:white">{{$store.state.name}}</p>
                <p style="color:white">积分:4</p>
                </div>
            </div>
            <div class="sitop2">签到规则</div>
        </div>
    <van-calendar
         title="签到"  :formatter="formatter"
        :poppable="false"
        :show-confirm="false"
        :style="{ height: '330px' }"/>

        <div class="si-hk">
            <div>
            <span class="si-xx"></span>
            <span>好课推荐</span>
            </div>
            <div style="color:#ccc">更多&emsp;></div>
        </div>

        <van-card
           num="去兑换"
           price="1积分"
           title="论渣男的自我修养"
           thumb="/img/1.jpeg"
        />

         <div class="si-ts">
            <div>
            <span class="si-xx"></span>
            <span>热门图书</span>
            </div>
            <div style="color:#ccc">更多&emsp;></div>
        </div>

         <van-card
           num="去兑换"
           price="1积分"
           title="VUE开发后台管理系统"
           thumb="/img/1.jpeg"
        />   
    </div>
</template>
<script>
import {rili} from "@/http/api";
export default {
  data(){
      return{

      }
  },
  async mounted(){
      const tady=new Date();
      const year=tady.getFullYear();
      const month_new=tady.getMonth()+1;
      const date_new=tady.getDate();

  let res=await  rili({date:`${year}-${month_new}-${date_new}`})
//   let res=await  rili(`2021-9-1`)
    console.log(res);
    // console.log(this.date);
  },
  methods: {
      formatter(day) {
      const month = day.date.getMonth() + 1;
      const date = day.date.getDate();
      
       const tady=new Date();
      const year=tady.getFullYear();
      const month_new=tady.getMonth()+1;
      const date_new=tady.getDate();
      
      if(month==month_new&&date_new==date){
          day.bottomInfo="+1";
          day.text='√'
      }
      return day;
    },
  },
};
</script>
<style>
.sign{
    width: 100%;
    height: 100%;
}
.sitop{
    height: 240px;
    background: red;
    display: flex;
    justify-content: space-around;
    position: relative;
}
.sitop1{
    height: 120px;
    width: 150px;
    /* background: pink; */
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.sitop2{
    width: 75px;
    height: 30px;
    border-radius: 30px;
    color: white;
    border: 2px solid white;
    margin-top: 30px;
    font-size: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.sitop1tu{
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
.van-calendar{
    width: 90%;
    margin: auto;
    position: absolute;
    top: 100px;
    left: 20px;
}
.si-hk{
    margin-top: 200px;
    height: 30px;
    /* background: red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
}
.si-ts{
    height: 30px;
    /* background: red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
}
.si-xx{
    display: inline-block;
    height: 15px;
    width: 4px;
    background: red;
    margin-left: 10px;
    margin-right: 5px;
}
.van-calendar__selected-day{
    border-radius: 50%;
}
</style>
