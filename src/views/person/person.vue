<template>
    <div class="my-da">
        <!-- 头 -->
        <div class="my-top">
            <div class="my-top1">
            <div><van-icon  class="my-tu" name="user-circle-o" /></div>
            <div class="my-zi" @click="zc">登录/注册</div>
           </div>
        </div>
        <!-- 我的 -->
        <div class="my-my">
            <div class="my-my1">
                <p>0</p>
                <span>我的学习</span>
            </div>
            <div  class="my-my1">
                 <p>0</p>
                <span>本周课时</span>
            </div>
            <div  class="my-my1">
                 <p>0</p>
                <span>我的积分</span>
            </div>
        </div>
        <!-- 空白 -->
        <div class="my-kong"></div>

        <div class="my-zzz">
            <div class="my-zzz1"><van-icon name="records" />我的作业</div>
            <div class="my-zzz2"></div>
        </div>
        <div class="my-zzz">
            <div class="my-zzz1"><van-icon name="thumb-circle-o" />我的社区</div>
            <div class="my-zzz2"></div>
        </div>

        <div class="my-kong"></div>
         <div class="my-zzz">
            <div class="my-zzz1"><van-icon name="orders-o" />课程订单</div>
            <div class="my-zzz2"></div>
        </div>
        <div class="my-zzz">
            <div class="my-zzz1"><van-icon name="hot-sale-o" />图书订单</div>
            <div class="my-zzz2"></div>
        </div>

        <div class="my-kong"></div>
        
         <div class="my-zzz">
            <div class="my-zzz1"><van-icon name="coupon-o" />优惠券</div>
            <div class="my-zzz2"></div>
        </div>
        <div class="my-zzz">
            <div class="my-zzz1"><van-icon name="comment-o" />学习卡</div>
            <div class="my-zzz2"></div>
        </div> <div class="my-zzz">
            <div class="my-zzz1"><van-icon name="comment-o" />分销中心</div>
            <div class="my-zzz2"></div>
        </div>

        <div class="my-kong"></div>

              <div class="my-zzz">
            <div class="my-zzz1"><van-icon name="chat-o" />消息中心</div>
            <div class="my-zzz2"></div>
        </div>
        <div class="my-zzz">
            <div class="my-zzz1"><van-icon name="location-o" />地址管理</div>
            <div class="my-zzz2"></div>
        </div> 
        <div class="my-zzz">
            <div class="my-zzz1"><van-icon name="friends-o" />关于我们</div>
            <div class="my-zzz2"></div>
        </div>
              <div class="my-zzz">
            <div class="my-zzz1"><van-icon name="records" />意见反馈</div>
            <div class="my-zzz2"></div>
        </div>
        <div class="my-zzz">
            <div class="my-zzz1"><van-icon name="setting-o" />设置</div>
            <div class="my-zzz2"></div>
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
.my-da{
    width: 100%;
    height: 1010px;
}
.my-top{
    height: 200px;
    background: url('/img/9.png');
    background-size: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.my-top1{
    width: 100px;
    height: 100px;
    /* background: pink; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.my-tu{
    font-size: 60px;
    margin-left: 20px;
    color: white;
}
.my-zi{
    font-size: 20px;
    margin-left: 7px;
    color: white;
}
.my-my{
    height: 75px;
    /* background: pink; */
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin-top: 10px;
}
.my-my1{
    font-size: 20px;
}
.my-kong{
    height: 20px;
    background: #ccc;
}
.my-zzz{
    height: 50px;
    /* background: pink; */
    display: flex;
    width: 90%;
    margin: auto;
    justify-content: space-between;
}
.my-zzz1{
    margin-top: 15px;
    font-size: 15px;
}
.my-zzz2{
    width: 10px;
    height: 10px;
    border-top: 3px solid #ccc;
    border-right: 3px solid #ccc;
    /* background: red; */
    transform: rotate(45deg);
    margin-top: 15px;
}
</style>
