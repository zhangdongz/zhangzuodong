<template>
    <div class="xiang">
        <div class="x-top">
            <img class="x-tu" :src="list.avatar" alt="">
            <div class="x-zi">{{list.real_name}}</div>
        </div>
        <van-tabs>
             <van-tab title="讲师介绍">
                 <p class="van-tab-p">老师简介</p>
                 {{list.introduction}}
             </van-tab>
             <van-tab title="主讲课程">
                 <van-card v-for="item in kc" :key="item.id" 
                      @click="ooo(item.id)"
                     :price="item.sales_num"
                     :title="item.title"
                     :thumb="item.cover_img"/>
             </van-tab>
        </van-tabs>
    </div>
</template>
<script>
import {zjkc} from "@/http/api"
export default {
    data() {
        return {
            id:0,
            list:{},
            kc:[]
        }
    },
    methods:{
       async getarr(){
          let {data:res}=await  this.$http.get(
              'http://120.53.31.103:84/api/app/teacher/'+this.id)
        //   console.log(res)
          this.list=res.data.teacher
        //   console.log(this.list);
        },
        async getzjkc(){
            let {data:res}=await  this.$http.post(
                "http://120.53.31.103:84/api/app/teacher/mainCourse?teacher_id="+this.id)
            // console.log(res);
            this.kc=res.data.list
            console.log(this.kc);
        },
        ooo(id){
            // console.log(id);
            this.$router.push({
                path:'/xiang2',
                query:{
                    _id:id
                }
            })
        }
    },
    created(){
        this.id=this.$route.query.id
        this.getarr()
        this.getzjkc()
        // console.log(this.id);
    }
}
</script>
<style>
.xiang{
    width: 100%;
    height: 100vh;
}
.x-top{
    height:150px;
}
.x-tu{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    float: left;
    margin-top: 20px;
}
.x-zi{
    float: left;
    font-size: 20px;
    margin-top: 25px;
}
.van-tab{
    font-size: 20px;
}
.van-tab-p{
    color: #ccc;
    font-size: 15px;
}
</style>
