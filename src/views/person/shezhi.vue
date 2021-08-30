<template>
    <div>
       <van-swipe-cell>
           <van-cell @click="$router.push('/pass')" :border="false" title="设置密码" value=">" />
       </van-swipe-cell>
      <van-swipe-cell>
           <van-cell  @click="$router.push('/zhuxiao')" :border="false" title="注销账户" value=">" />
       </van-swipe-cell>
       <van-button class="sz-tc" color="linear-gradient(to right, #ff6034, #ee0a24)">退出登录</van-button>
    </div>    
</template>
<script>
export default {
    
}
</script>
<style>
.sz-tc{
    margin-left: 150px;
}
</style>
