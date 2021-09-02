<template>
    <div class="book">
         <van-tabs>
           <van-tab v-for="(it,i) in list" :title="it.name" :key="i" >
               <van-tab v-for="(item,i) in child" :title="item.name" :key="i" >
            
               </van-tab>
           </van-tab>
        </van-tabs>
    </div>
</template>
<script>
import {book} from "@/http/api"
export default {
   data() {
       return {
           list:[],
           child:{}
       }
   },
   methods: {
       
   },
  async created(){
   let res=await book()
   console.log(res);
   this.list=res.data.data
   this.child=res.data.data.child
   console.log(this.list);
   }
}
</script>

<style>
.book{
    width: 100%;
    height: 100%;
}

</style>
