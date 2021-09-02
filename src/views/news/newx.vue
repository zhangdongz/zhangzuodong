<template>
    <div class="zixiang">
        <div class="zix_img">
            <img :src="list.thumb_img" alt="">
        </div>
        <h1 class="zixiang_h">{{list.title}}</h1>
        <div class="zixiang_ti">
            <p>{{list.click_rate}}次预览</p>
            <p>07-05</p>
        </div>
        <div class="zixiang_title">
             <h2 class="zixiang_h4">{{list.title}}</h2>
        </div>
       <p v-html="list.content" class="zixiang_html">
       </p>
    </div>
</template>
<script>
import { addAbortSignal } from 'stream';
export default {
    data(){
        return{
            list:[],
            id:0
        }
    },
    methods:{
       async getatt(){
            let res = await this.$http.post('http://120.53.31.103:84/api/app/information/detail',{
                information_id: this.id
            })
            console.log(res)
            this.list = res.data.data
        }
    },
    created(){
        this.id=this.$route.query.id
        console.log(this.id);
        this.getatt()
    }
}
</script>
<style>
.zixiang{
    width: 100%;
    height: 100%;
}
.zix_img{
    width: 100%;
    height: 300px;
    border-bottom: 1px solid #ddd;
}
.zix_img img{
    width: 100%;
    height: 100%
}
.zixiang_h{
    margin-top: 5px;
    margin-left: 10px
}
.zixiang_ti{
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 20px;
    font-size: 10px;
}
.zixiang_title{
    width: 100%;
    text-align: center;
    margin-top: 50px;
}
.zixiang_h4{
    width: 90px;
    margin: auto;
    color: #ddd;
    font-size: 14px;
    height: 40px;
    border-bottom: 1px solid #ddd;
}
.zixiang_html{
    font-size: 18px;
    margin-top: 25px;
    margin-left: 10px;
}
</style>
