<template>
    <div class="xiang2">
        <img class="xx-tu" :src="info.cover_img" alt="">
        <h3>&emsp;{{info.title}}</h3>
        <div class="xx-zi">
            <p>剩余名额{{info.store_num}}</p>
            <p>报名截止时间:2021.07.15 00:00</p>
            <p>开课时间:2021/07/05 00:00—2021/07/06 00:00</p>
            <p>开课地点:{{info.city_name}}{{info.district_name}}{{info.address}}</p>
            <p><s>22.00</s><span style="color:orange">100.00</span></p>
        </div>
        <div class="xx-kong"></div>
        <div class="xx-qq">
            <div class="xx-qq1">
                <span class="xx-qq11">优惠:</span>
                <b class="xx-qq12">领取优惠券最多可减80</b>
            </div>
            <div class="xx-qq2">领取&ensp;></div>
        </div>
        <div class="xx-qq" @click="show=true">
            <div class="xx-qq1">
                <span class="xx-qq11">服务:</span>
                <b class="xx-qq12">课程售后</b>
            </div>
            <div class="xx-qq2">详情&ensp;></div>
        </div>
        <van-action-sheet v-model="show" title="课程服务">
            <div class="xx-content">
                <span v-for="(item,i) in info.service" :key="i">
                     {{item.name}}
                     {{item.description}}
                </span>
            </div>
        </van-action-sheet>
        <div class="xx-kong"></div>
        <div class="xx-dui">教学团队</div>
        <div class="xx-teacher">
            <div class="xx-tou" v-for="item in teachers" :key="item.teacher_id" @click="go(item.teacher_id)"  >
                <img class="xx-img" :src="item.teacher_avatar" alt="">
                <p>{{item.teacher_name}}</p>
            </div>
        </div>
        <div class="xx-kong"></div>
        <!--  -->
        <div>
        <van-tabs v-model="active" scrollspy sticky>
           <van-tab v-for="(item,index) in kecheng" :title="item" :key="index">
            <div v-show="index==0" class="xx-one">
                <h3>课程介绍</h3>
                <div v-html="info.course_details"></div>
            </div>
             <div v-show="index==1" class="xx-two">
                    <p>{{ooo.title}}</p>
                    <p>{{ooo1.periods_title}}</p>
                    <span v-for="(item,index) in ooo1.teachers" :key="index">{{item.teacher_name}}</span>
            </div>
             <div v-show="index==2" class="xx-three">
               <h3>课程评论</h3>
               <img class="xx-three1" src="/img/3.png" alt="">
            </div>
           </van-tab>
        </van-tabs>
        </div>
        <van-button class="xx-bm" color="linear-gradient(to right, #ff6034, #ee0a24)">立即报名</van-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            id:0,
            info:{},
            teachers:[],
            kecheng:["课程介绍","课程大纲","课程评价"],
            active:'',
            ooo:{},
            ooo1:[],
            show:false
        }
    },
    created(){
         this.id=this.$route.query._id
         console.log(this.id);
         this.getlist()
         this.getdata()
    },
    methods: {
        async getlist(){
            let {data:res }= await  this.$http.get('http://120.53.31.103:84/api/app/courseInfo/basis_id='+this.id);
            // console.log(res); 
            this.info=res.data.info
            this.teachers=res.data.teachers
        },
        async getdata(){
            let {data:res}=await this.$http.post('http://120.53.31.103:84/api/app/courseChapter?id='+this.id)
            // console.log(res);
            this.ooo=res.data[0]
            this.ooo1=res.data[0].child[0]
            // console.log(this.ooo1);
            // console.log(this.ooo1);
        },
        go(teacher_id){
            // console.log(teacher_id);
            this.$router.push({
                path:'/xiang1',
                query:{
                    id:teacher_id
                }
            })
        }
    },
}
</script>
<style>
.xiang2{
    width: 100%;
    height: 1140px;
}
.xx-tu{
    width: 230px;
    height:230px;
}
.xx-zi{
    height: 120px;
    margin-left: 20px;
    font-size: 16px;
    color: #ccc;
    /* background: red; */
}
.xx-zi p{
    margin-top: 5px;
}
.xx-kong{
    height: 20px;
    background: #999;
}
.xx-qq{
    height: 35px;
    /* background: pink; */
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: auto;
}
.xx-qq1{
    display: flex;
    align-items: center;
}
.xx-qq11{
    width: 17px;
    display: inline-block;
    /* background: red; */
    margin-right: 20px;
}
.xx-qq12{
    font-size: 10px;
}
.xx-qq2{
    color: #ccc;
    margin-top: 10px;
}
.xx-dui{
    margin-left: 10px;
    font-size: 18px;
}
.xx-teacher{
    height: 160px;
    /* background: red; */
     display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.xx-tou{
   width: 70px;
   text-align: center;
}
.xx-img{
    width: 60px;
    height: 60px;
    border-radius: 50%; 
}
.xx-one{
    height: 70px;
    margin-top: 5px;
    border-bottom: 15px solid #ccc;
    /* background: pink; */
}
.xx-two{
    height: 70px;
    margin-top: 5px;
    border-bottom: 15px solid #ccc;
    /* background: pink; */
}
.xx-three1{
    width: 150px;
    height: 150px;
    margin-left: 120px;
}
.xx-content{
    height: 300px;
}
.xx-bm{
    width: 300px;
    margin: auto;
    border-radius:30px;
    margin-left: 45px;
}
</style>
