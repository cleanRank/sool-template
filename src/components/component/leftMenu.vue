<template>
  <nav class="site-sidebar-bar">
    <div class="sidebar-top">
      <ul class="sidebar-menu">
        <li class="side-menu-list sidebar-item collapse"  @click="changeCollapse">
          <i class="iconfont iconshenhui9 menu-i collapse-icon"></i>
        </li>
        <template v-for="(list, index) in sideBarTopMenu">
          <li :index="index" :key="index" class="side-menu-list sidebar-item bg-hover" :title="list.meta.title" :class="{'active': activeIndex.includes(list.path)}" @click="selectMenu(list)">
            <div class="svg">
              <svg-icon :icon-class="list.meta.icon" class="svg-menu-class" />
            </div>
            <span class="sidebar-item-menuName">{{list.meta.title}}</span>
          </li>
        </template>
        <li class="side-menu-list sidebar-item split-level hove-none">
          <em class="split-line mr5"></em>
          <span class="sidebar-item-menuName">项目级应用</span>
          <em class="split-line ml5 collapse-line"></em>
        </li>
      </ul>
    </div>
    <div class="sidebar-bar-main" v-show="projectInfo">
      <vue-scroll>
        <draggable v-model="sideBarMenu" class="sidebar-bar-favorites sidebar-menu" tag="ul">
          <transition-group  type="transition" name="list-complete">
            <template v-for="(item, index) in sideBarMenu">
              <li :index="index" :key="item.name" class="sidebar-item side-menu-list bg-hover" :title="item.meta.title" :class="{'active': activeIndex.includes(item.path)}" @click="selectMenu(item)">
                <div class="svg">
                  <item-icon iconClass="svg-menu-class" :icon="item.meta.icon"></item-icon>
                </div>
                <span class="sidebar-item-menuName menu-list-name">{{item.meta.title}}</span>
              </li>
            </template>
          </transition-group>
        </draggable>
      </vue-scroll>
    </div>
  </nav>
</template>

<script>
import draggable from 'vuedraggable'
import sideBarTopMenu from 'router/sideBarTop'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: "leftMenu",
  data () {
    return {
      sideBarTopMenu
    }
  },
  props: {
  },
  components: {
    draggable
  },
  created () {
    // debugger
  },
  mounted () {
  },
  methods: {
    ...mapActions([
      'updateCollapse',
      'updateSideBar'
    ]),
    selectMenu (item) {
      // if (this.activeIndex == item.meta.idx) {
      //   return false
      // }
      // this.activeIndex = item.meta.idx
      this.$router.push({ path: item.path })
    },
    // 展开闭合菜单栏
    changeCollapse () {
      this.updateCollapse(!this.$store.state.config.isCollapse)
    }
  },
  computed: {
    ...mapGetters({
      isCollapse: "getConfigInfo",
      projectInfo: 'projectInfo'
    }),
    sideBarMenu: {
      get () {
        return this.$store.state.config.sideBar.filter(v => v.meta.isCollect)
      },
      set (val) {
        this.updateSideBar(val)
      }
    },
    activeIndex () {
      return this.$route.path
    },
    activePath () {
      return this.$route.query.activePath || this.$route.meta.activePath || this.$route.name
    }
  }
}
</script>

<style lang="scss">
  // .list-complete-move {
  //   transition: transform 0.5s;
  // }
</style>
