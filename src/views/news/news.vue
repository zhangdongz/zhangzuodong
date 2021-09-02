<template>
    <div class="news">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-tabs @change="add">
           <van-tab v-for="(it,i) in data" :title="it.name" :key="i" >
               <van-card v-for="(item,i) in nr" :key="i"
                  num="2"
                  @click="go(item.id)"
                  :price="item.click_rate"
                  :desc="item.description"
                  :title="item.title"
                  :thumb="item.thumb_img"/>
        </van-tab>
        </van-tabs>
      </van-pull-refresh>

    </div>
</template>
<script>
import {news,index} from "@/http/api"
export default {
    data(){
        return{
            data:[],
            nr:[],
            cid:0,
            isLoading: false,
        }
    },
    methods: {
        // 咨询上面标签栏
        async getdata(){
            let {data:res}=await news()
            console.log(res);
            this.data=res.data
       },
    //    咨询内容
       async getnr(){
           let {data:res}=await index({
               page: 1, limit: 10, classify_id:this.cid
           })
           console.log(res);
        this.nr=res.data.list
       },
       add(e){
        //    console.log(e)
           if(e==0){
               this.cid = 0
               this.getnr()
           }
           if(e==1){
               this.cid = 9
               this.getnr()
           }
            if(e==3){
               this.cid = 33
               this.getnr()
           }
            if(e==4){
               this.cid = 10
               this.getnr()
           }
       },
       go(id){
        //    console.log(id);
           this.$router.push({
               path:'/newx',
               query:{
                  id:id
              } 
           })
       },
    // go(id){
    //        this.$router.push({
    //            name:'newx',
    //            params:{
    //               id:id
    //           } 
    //        })
    //    },
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
      }, 1000);
    }
    },
    mounted(){
        // 咨询上面标签栏
        this.getdata()
        // 咨询内容
        this.getnr()
    }
}
</script>

<style>

</style>
