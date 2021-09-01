<template>
    <div class="index_da">
        <!-- 头部 -->
        <div class="index_top">
            <img class="index_tu" src="/img/2.png" alt="">
            <div class="index_sou">
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

          <div class="zzz"  v-for="item in js" :key="item.teacher_id" @click="tiao(item.teacher_id)">
              <div class="zzz1">
                  <img class="zzzz"  :src="item.teacher_avatar" alt="">
              </div>
              <div class="zzz2">
                  <h3>{{item.teacher_name}}</h3>
                  <p>{{item.introduction}}</p>
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
           ms:[],
           js:[]
        }
    },
    methods:{
        async getdata(){
        let {data:res} = await appIndex()
        // console.log(res);
        this.tjkc=res.data[1].list
        this.ms=res.data[2].list
        this.js=res.data[0].list
        // console.log(this.js);
        // console.log(this.ms);
        // console.log(this.tjkc);
        },
        tiao(teacher_id){
            // console.log(teacher_id);
            this.$router.push({
                path:'/xiang1',
                query:{
                    id:teacher_id
                }
            })
        }
    },
    mounted(){
        this.getdata()
    }
}
</script>

<style>
.index_da{
    width: 100%;
    height: 2000px;
}
.index_top{
    height:50px;
    /* background: red; */
    display: flex;
    justify-content: space-around;
}
.index_tu{
    width: 30px;
    height: 30px;
    margin-top: 10px;
}
.index_sou{
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
    background: #ccc;
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
    color: #999;
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
