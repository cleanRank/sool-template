<template>
   <transition name="loading">
     <div class="loading" v-show="$store.state.loading.isShowLoadFlag">
        <!-- <div class="loadProcess"></div> -->
        <div class="loading-box">
          <span class="loading-icon"></span>
            <p class="circle-list">
              <span class="circle cirlce1"></span>
              <span class="circle cirlce2"></span>
              <span class="circle cirlce3"></span>
              <span class="circle cirlce4"></span>
              <span class="circle cirlce5"></span>
              <span class="circle cirlce6"></span>
              <span class="circle cirlce7"></span>
              <span class="circle cirlce8"></span>
            </p>
        </div>
     </div>
   </transition>
</template>
<script type="text/javascript">
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      loadInfo: "getLoadInfo"
    })
  }
}
</script>
<style media="screen" scoped>
  .loading{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
    transition: all .2s cubic-bezier(0.18, 0.65, 1, 1);
    -webkit-transition: all .2s cubic-bezier(0.18, 0.65, 1, 1);
  }
  /* .loadProcess{
    width: 3.335rem;
    height: 3.335rem;
    background: url('../../assets/icon/icon/loading.png') no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 15px;
    transform: translate3d(-50%, -50%, 0);
    -webkit-transform: translate3d(-50%, -50%, 0);
  }
  .loading-enter-active, .loading-leave-active {

   }
   .loading-enter, .loading-leave-active {
    opacity: 0;
  } */
  .loading .loading-box {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 3.335rem;
    height:3.7rem;
    border-radius: 10px;
    background-color: rgb(0,0,0);
    transform: translate3d(-50%, -50%, 0);
    -webkit-transform: translate3d(-50%, -50%, 0);
    opacity: 0.6;
    display: flex;
    align-items: center;
    justify-content: center;
}
.loading .loading-box .loading-icon {
    /* display: block; */
    /* width: 3.335rem; */
    /* height: 3.335rem; */
    /* background: url('../../assets/icon/icon/loading.png') no-repeat; */
    background-size: 100% 100%;
    /* margin: .96rem auto 0 */
}
.loading .loading-box .circle-list {
  position: relative;
  text-align: center;
  width: 2rem;
  height: 2rem;
}
.loading .loading-box .circle-list span {
  position: absolute;
    display: inline-block;
    width: .25rem;
    height: .25rem;
    background-color: #828282;
    border-radius: 50%;
}
.cirlce1 {
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -webkit-animation: 1s animate-cirlce ease-in-out 0s infinite;
  animation: 1s animate-cirlce ease-in-out 0s infinite
}
.cirlce2 {
  left: 20%;
  top:20%;
  transform: translate3d(-50%, -50%, 0);
  -webkit-transform: translate3d(-50%, -50%, 0);
    -webkit-animation: 1s animate-cirlce ease-in-out 0.12s infinite;
    animation: 1s animate-cirlce ease-in-out 0.12s infinite;
}
.cirlce3 {
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
    -webkit-animation: 1s animate-cirlce ease-in-out 0.24s infinite;
    animation: 1s animate-cirlce ease-in-out 0.24s infinite;
}
.cirlce4 {
  right: 20%;
  top: 20%;
  transform: translate3d(50%, -50%, 0);
  -webkit-transform: translate3d(50%, -50%, 0);
    -webkit-animation: 1s animate-cirlce ease-in-out 0.36s infinite;
    animation: 1s animate-cirlce ease-in-out 0.36s infinite;
}
.cirlce5 {
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
    -webkit-animation: 1s animate-cirlce ease-in-out 0.48s infinite;
    animation: 1s animate-cirlce ease-in-out 0.48s infinite;
}
.cirlce6 {
  right: 20%;
  bottom: 20%;
  transform: translate3d(50%, 50%, 0);
  -webkit-transform: translate3d(50%, 50%, 0);
    -webkit-animation: 1s animate-cirlce ease-in-out 0.6s infinite;
    animation: 1s animate-cirlce ease-in-out 0.6s infinite;
}
.cirlce7 {
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
    -webkit-animation: 1s animate-cirlce ease-in-out 0.72s infinite;
    animation: 1s animate-cirlce ease-in-out 0.72s infinite;
}
.cirlce8 {
  left: 20%;
  bottom: 20%;
  transform: translate3d(-50%, 50%, 0);
  -webkit-transform: translate3d(-50%, 50%, 0);
    -webkit-animation: 1s animate-cirlce ease-in-out 0.84s infinite;
    animation: 1s animate-cirlce ease-in-out 0.84s infinite;
}
@-webkit-keyframes animate-cirlce {
    0% {
        background-color: #fff
    }
    to {
        background: #333333;
    }
}
</style>
