<template>
  <div class="site-frame" >
    <div class="site-frame-commonComponents">
      <headBar/>
      <div class="site-frame-main" :class="{'isCollapse': isCollapse}">
        <div class="site-sidebar">
          <leftMenu />
        </div>
        <main class="site-frame-content" v-loading="isLoading">
          <keep-alive :include="keepAlivePage">
            <router-view class="main-content" />
          </keep-alive>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import leftMenu from 'components/component/leftMenu'
import headBar from 'components/component/headBar'
import { mapState, mapActions } from 'vuex'
import {
  tracker
} from 'lib/analytics'
export default {
  name: 'layout',
  data () {
    return {
      keepAlivePage: ['propertyPage', 'classificationPage']
    }
  },
  computed: {
    ...mapState({
      leftMenuIsShow: state => state.globelData.leftMenuIsShow,
      topBarIsShow: state => state.globelData.topBarIsShow,
      isCollapse: state => state.config.isCollapse,
      isLoading: state => state.config.isLoading
    }),
    useCommonHeader () {
      return this.$route.meta.unCommon
    }
  },
  components: {
    leftMenu,
    headBar
  },
  methods: {
    ...mapActions([
      'updateCollapse',
      'updateIsLoading',
      'updateClientWidth'
    ]),
    checkClientWidth () {
      let width = document.documentElement.clientWidth
      let isCollapse = width < 992
      this.updateCollapse(isCollapse)
      this.updateClientWidth(width)
    }
  },
  created () {
    if (tracker.getToken()) {
    }
    this.checkClientWidth()
    window.onresize = () => {
      this.checkClientWidth()
    }
  }
}
</script>
