<template>
  <div class="error_404">
    <div class="content">
      <table></table>
      <div class="content-box">
        <div>
          <p>抱歉，你访问的页面不存在</p>
          <p>您要找的页面没有找到，请返回 <a @click="$router.push({ path: '/login' })">首页</a>继续浏览</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "error_404"
}
</script>

<style lang="scss">
  .error_404{
    padding: 20px;
    .content{
      background: #fff;
      height:540px;
      .content-box{
        width:600px;
        margin: 100px auto;
        overflow: hidden;
       img{
         width:224px;
         height:224px;
         float: left;
       }
       >div{
         float: left;
         p:nth-child(1){
           font-size:24px;
           color:#333;
           line-height: 33px;
           margin-top: 65px;
         }
         p:nth-child(2){
           font-size:12px;
           color:#666;
           line-height: 20px;
           margin-top: 16px;
           a{
             color:#1686CC;
             cursor: pointer;
           }
         }
       }
     }
    }
  }
</style>
