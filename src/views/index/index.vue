<template>
    <div class="da">
        <!-- 头部 -->
        <div class="top">
            <img class="tu" src="/img/2.png" alt="">
            <div class="sou">
                <span class="sss">搜索</span><van-icon class="xxx" name="search" />
            </div>
            <van-icon class="xx" name="envelop-o" />
        </div>
        <!-- 轮播 -->
           <van-swipe :autoplay="3000" >
            <van-swipe-item v-for="(item,i) in imgs" :key="i">
                 <img class="img" :src="item" alt="">
             </van-swipe-item>
           </van-swipe>

           <div class="dw">
               <p><van-icon class="ppp" name="send-gift-o" /></p>
               <span>大威天龙</span>
           </div>
          
          <div class="zs">
              <div class="zs1">
                 <p><span class="sp1"></span>资深讲师</p> 
              </div>

              <div class="zs2">
                  更多 >
              </div>
          </div>

          <div class="zzz">
              <div class="zzz1">
                  <img  src="/img/5.png" alt="">
              </div>
              <div class="zzz2">
                  <h3>谢龙</h3>
                  <p>全栈开发项目经理</p>
              </div>
          </div>

           <div class="zzz">
              <div class="zzz1">
                  <img class="zzzz" src="/img/6.png" alt="">
              </div>
              <div class="zzz2">
                  <h3>翟现奎</h3>
                  <p>技术经理</p>
              </div>
          </div>

           <div class="zzz">
              <div class="zzz1">
                  <img class="zzzz" src="/img/7.png" alt="">
              </div>
              <div class="zzz2">
                  <h3>葫芦</h3>
                  <p>66666</p>
              </div>
          </div>

           <div class="zzz">
              <div class="zzz1">
                  <img class="zzzz" src="/img/8.png" alt="">
              </div>
              <div class="zzz2">
                  <h3>马兴龙</h3>
                  <p>前端技术开发混合技术</p>
              </div>
          </div>

            <div class="zs">
              <div class="zs1">
                 <p><span class="sp1"></span>推荐课程</p> 
              </div>
              <div class="zs2">
                  更多 >
              </div>
          </div>

        <!-- 推荐课程 -->
        <van-swipe-cell>
           <van-card  v-for="(item,i) in tjkc" :key="i"
             :num="item.sales_num"
             :price="item.sales_base"
             :title="item.title"
             :thumb="item.cover_img"
            />
        </van-swipe-cell>
          
           <div class="zs">
              <div class="zs1">
                 <p><span class="sp1"></span>名师</p> 
              </div>
              <div class="zs2">
                  更多 >
              </div>
          </div>

          <!-- 名师 -->
          <div class="zzz" v-for="(item,i) in ms" :key="i">
              <div class="zzz1">
                  <img class="zzzz" :src="item.teacher_avatar" alt="">
              </div>
              <div class="zzz2">
                  <h3>{{item.teacher_name}}</h3>
                  <p>{{item.teacher_id}}</p>
              </div>
          </div>
    </div>
</template>
<script>
import { appIndex } from "@/http/api";
export default {
    data(){
        return{
           imgs:['/img/3.jpg','/img/4.jpg'] ,
           tjkc:[],
           ms:[]
        }
    },
    methods:{
        async getdata(){
        let {data:res} = await appIndex()
        // console.log(res);
        this.tjkc=res.data[1].list
        this.ms=res.data[2].list
        // console.log(this.ms);
        // console.log(this.tjkc);
        }
    },
    mounted(){
        this.getdata()
    }
}
</script>

<style>
.da{
    width: 100%;
    height: 2000px;
}
.top{
    height:50px;
    /* background: red; */
    display: flex;
    justify-content: space-around;
}
.tu{
    width: 30px;
    height: 30px;
    margin-top: 10px;
}
.sou{
    width: 58%;
    height: 30px;
    /* background: pink; */
    margin-top: 10px;
    font-size: 15px;
    border-radius: 30px;
    border: 1px solid gray;
}
.sss{
    margin-left: 17px;
    margin-right: 135px;
}
.xx{
    margin-top: 10px;
    font-size: 30px;
}
.xxx{
    padding-top: 4px;
    font-size: 20px;
}
.van-swipe{
    width: 100%;
    height: 290px;
}
.img{
    width: 100%;
    height: 100%;
}
.dw{
    height: 70px;
    /* background: red; */
    margin-left: 30px;
    padding-top: 10px;
}
.ppp{
    margin-left: 10px;
    font-size: 30px;
}
.zs{
    width: 95%;
    margin: auto;
    /* background: red; */
    height: 40px;
    display: flex;
    justify-content: space-between;
}
.zs1{
    width: 30%;
    /* background: pink; */
    line-height: 40px;
    font-size: 18px;
}
.zs2{
    width: 30%;
    line-height: 40px;
    /* background: blue; */
    text-align: right;
    font-size: 18px;
    color: #ccc;
}
.sp1{
    margin-right: 10px;
    display: inline-block;
    width: 5px;
    height: 30px;
    background: orange;
}
.sp2{
    font-size: 18px;
}
.zzz{
    width: 85%;
    height: 80px;
    margin: auto;
    background: whitesmoke;
    display: flex;
    justify-content: space-around;
    margin: 30px;
}
.zzz1{
    width:20%;
    height:60px;
    margin-top: 7px;
    /* background: pink;  */
}
.zzz2{
     width:60%;
    height:60px;
    margin-top: 7px;
    padding-top: 10px;
    /* background: pink;  */
}
.zzzz{
    width: 58px;
    height: 58px;
    border-radius: 50%;
}

</style>
