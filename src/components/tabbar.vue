<template>
    <div id="tabbar">
           <router-link class="link"
           v-for="(item,index) in tabbar_list" :key="index"
           :to="item.url">
           <img  class="tu" :src="active==index?item.nav_img_checked:item.nav_img" alt="" @click="add(index)">
           <span class="zi">{{item.name}}</span>
           </router-link>
    </div>
</template>
<script>
import { tabbar } from "@/http/api";
export default {
    data(){
        return{
            tabbar_list:[],
            active:0
        }
    },
    async created(){
        let{data:{data:{index},},}=await tabbar();
        // console.log(index);
        let list=["/index","/course","/news","/book","/person"];
        index.forEach((element,key) => {
            element.url=list[key]
        });
        // console.log(index);
        this.tabbar_list=index
},
methods:{
    add(index){
            this.active=index
    }
}
}
</script>

<style>
#tabbar{
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100vw;
    height: 50px;
    /* background: red; */
    display: flex;
}
.link{
    flex: 1;
    border: 1px solid gray;
    text-align: center;
}
.tu{
    width: 70%;
    height: 70%;
}
.zi{
    display: block;
}
.router-link-active{
    color:red;
}
</style>
