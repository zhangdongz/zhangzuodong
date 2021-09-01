<template>
    <div>


    </div>
</template>
<script>
import { service } from "@/http/service";
export default {
    data() {
        return {
            arr:[]
            
        }
    },
    methods:{
       async getarr(){
           let res = await service.get('/teacher/'+this.$route.params.id)
           console.log(res)
        }
    },
    created(){
        this.getarr()
    }
}
</script>
<style>

</style>
