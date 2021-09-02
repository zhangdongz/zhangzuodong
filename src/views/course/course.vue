<template>
    <div class="couda">
            <div class="cou-zz" v-for="item in list" :key="item.id" @click="go(item.id)">
              <div class="cou-zz1">
                  <img class="cou-zzz" :src="item.avatar" alt="">
              </div>
              <div class="cou-zz2">
                  <h3>{{item.real_name}}</h3>
                  <p>{{item.introduction}}</p>
              </div>
          </div>
    </div>
</template>
<script>
import { teacher } from "@/http/api";
export default {
    data(){
        return{
            list:[]
        }
    },
    methods:{
        // async getdata(){
        //     let {data:res}=await teacher()
        //     // console.log(res);
        //     this.list=res.data.list
        //     // console.log(this.list);
        // },
        go(id){
            // console.log(id);
            this.$router.push({
                path:'/xiang1',
                query:{
                    id:id
                }
            })
        }
    },
   async mounted(){
        // this.getdata()
         let {data:res}=await teacher()
            // console.log(res);
            this.list=res.data.list
        //     // console.log(this.list);
    }
}
</script>
<style>
.couda{
    width: 100%;
    height: 100%;
}
.cou-zz{
    width: 85%;
    height: 80px;
    margin: auto;
    background: whitesmoke;
    display: flex;
    justify-content: space-around;
    margin: 30px;
}
.cou-zz1{
    width:20%;
    height:60px;
    margin-top: 7px;
    /* background: pink;  */
}
.cou-zz2{
     width:60%;
    height:60px;
    margin-top: 7px;
    padding-top: 10px;
    /* background: pink;  */
}
.cou-zzz{
    width: 58px;
    height: 58px;
    border-radius: 50%;
}
</style>
