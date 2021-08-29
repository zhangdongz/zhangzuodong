<template>
    <div class="da">
        <!-- 头 -->
        <div class="top">
            <div class="top1">
            <div><van-icon  class="tu" name="user-circle-o" /></div>
            <div class="zi" @click="zc">登录/注册</div>
           </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        async zc(){
            this.$router.push('/login')
        }
    }
}
</script>

<style>
.da{
    width: 100%;
    height: 100%;
}
.top{
    height: 200px;
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
}
.top1{
    width: 100px;
    height: 100px;
    /* background: pink; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.tu{
    font-size: 60px;
    margin-left: 20px;
    color: white;
}
.zi{
    font-size: 20px;
    margin-left: 7px;
    color: white;
}
</style>
