<template>
  <div class="mainframe-banner" v-if="commonSwiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item,index) in commonSwiper" :key="index">
        <a v-bind:href="item.linkUrl"><img v-bind:src="item.imgUrl"></a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  data () {
    return {
      swiperOption: {
        loop: true,
        paginationClickable: true,
        autoplay: {
          disableOnInteraction: false,
          delay: 3000
        },
        speed: 1000,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  props: ["commonSwiper"],
  methods: {
  }
}
</script>
