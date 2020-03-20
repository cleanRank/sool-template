<template>
  <div class="site-frame-city">
    <div class="site-frame-zone">
      <h5>所在地区<span @click="close">关闭</span></h5>
      <div class="zone-choose">
        <div class="city-list">
          <span v-for="(item, index) in chooseNav" :key="index" :class="{'active':index==currentIndex}" @click="changeArea(item, index, 0)">{{item.districtName}}</span>
        </div>
      </div>
      <div class="zone-item">
        <ul>
          <li v-for="(list, i) in zoneList" :key="i" @click="changeArea(list, i, 1)">{{list.districtName}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: 1,
      chooseNav: [{
        districtName: '请选择',
        districtId: 0
      }],
      parentId: 0,
      currentIndex: 0,
      zoneList: []
    }
  },
  methods: {
    close () {
      this.parentId = 0
      this.$emit('showFlag', 0)
    },
    init () {
      this.chooseNav = [{
        districtName: '请选择',
        districtId: ''
      }]
      this.zoneList = []
      this.parentId = 0
    },
    changeArea (item, index, key) { // navheader选择
      if (item.districtId === '') {
        return false
      } else {
        if (key) {
          this.chooseNav.splice(this.chooseNav.length-1, 0, item)
          this.parentId = item.districtId
        } else {
          if (index == 0) {
            this.parentId = 0
          } else {
            this.parentId = this.chooseNav[index - 1].districtId
          }
          this.chooseNav.splice(index, this.chooseNav.length - index - 1)
        }
        this.getCity()
      }
    },
    getCity () {
      this.showLoad(true)
      this.$http.getRegion({ parentId: this.parentId }).then(res => {
        this.showLoad(false)
        this.zoneList = res.result
        if (res.result && res.result.length == 0) {
          this.chooseNav.splice(this.chooseNav.length-1, 1)
          this.$emit('getChildCity', this.chooseNav)
          this.close()
        }
      }).catch(e => {
      })
    }
  },
  mounted () {
  }
}
</script>
