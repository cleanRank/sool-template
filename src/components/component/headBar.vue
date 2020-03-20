<template>
  <div class="headBar">
    <el-row class="headerBar-content">
      <el-col :span="8" class="head-name">
        <span>GEES</span>
        <span v-show="clientWidth>856">{{name}}</span>
      </el-col>
      <el-col :span="16" class="head-features">
        <div class="head-fun" v-show="clientWidth>856">
          <!-- <godon-dropdown dropclass='long-dropdown'>
            <span class="dropdown-head">当前工作群组</span>
            <div class="godon-dropdown-menu" slot="menu">
              <ul>
                <li>全员群组</li>
                <li>施工单位</li>
                <li>设计单位</li>
                <li>施工单位</li>
                <li>监理单位</li>
              </ul>
            </div>
          </godon-dropdown>
          <godon-dropdown>
            <span class="dropdown-head">消息</span>
            <div class="godon-dropdown-menu" slot="menu">
              <ul>
                <li><span>平台公告</span><span>(0)</span></li>
                <li><span>企业公告</span><span>(0)</span></li>
                <li><span>项目公告</span><span>(0)</span></li>
                <li><span>提醒</span><span>(0)</span></li>
                <li><span>动态</span><span>(999)</span></li>
              </ul>
            </div>
          </godon-dropdown>
          <godon-dropdown>
            <span class="dropdown-head">费用</span>
            <div class="godon-dropdown-menu" slot="menu">
              <ul>
                <li>我的订单</li>
                <li>充值</li>
                <li>交易查询</li>
                <li>消费明细</li>
                <li>发票管理</li>
              </ul>
            </div>
          </godon-dropdown> -->
          <godon-dropdown>
            <span class="dropdown-head">主题</span>
            <div class="godon-dropdown-menu" slot="menu">
              <ul>
                <li :class="{'active': color=='problack'}" @click="changeTheme('problack')">专业黑</li>
                <li :class="{'active': color=='ivory'}" @click="changeTheme('ivory')">科技白</li>
              </ul>
            </div>
          </godon-dropdown>
          <!-- <godon-dropdown dropclass='long-dropdown'>
            <span class="dropdown-head">支持与服务</span>
            <div class="godon-dropdown-menu" slot="menu">
              <ul>
                <li>帮助与文档</li>
                <li>施工单位</li>
                <li>设计单位</li>
                <li>施工单位</li>
                <li>监理单位</li>
              </ul>
            </div>
          </godon-dropdown> -->
        </div>
        <godon-dropdown>
          <img src="../../assets/icon/default_handsome.jpg" class="avatar" alt="avatar">
          <div class="godon-dropdown-menu userinfo" slot="menu">
            <div class="userinfo-avatar">
              <img src="../../assets/icon/default_handsome.jpg" class="userinfo-img" alt="avatar">
              <div class="userinfo-account">
                <span class="account">{{nick}}</span>
                <span class="tel">手机：{{tel}}</span>
                <span class="mail">邮箱：geesuse@glodon.com</span>
              </div>
            </div>
            <div class="userinfo-container">
              <div class="container-item">
                <div class="mod-item-l">
                  <span class="name">真实姓名：{{organization.realName}}</span>
                </div>
                <div class="mod-item-r">
                  <span class="item-tip"><i class="el-icon-bell"></i>未认证</span>
                </div>
              </div>
              <div class="container-item flex-end">
                <button class="godon-btn btn-head-default">个人认证</button>
                <button class="godon-btn btn-head-default">修改信息</button>
              </div>
              <div class="container-item">
                <div class="mod-item-l">
                  <span class="name">账号：广联达科技股份有限…</span>
                </div>
                <div class="mod-item-r">
                  <span class="item-tip"><i class="el-icon-bell"></i>未认证</span>
                </div>
              </div>
              <div class="container-item flex-end">
                <button class="godon-btn btn-head-default">企业认证</button>
                <button class="godon-btn btn-head-default">修改信息</button>
              </div>
              <button class="godon-btn btn-head-cancel mt18" @click="logout">退出登录</button>
            </div>
          </div>
        </godon-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import godonDropdown from 'components/component/dropdown'
import { tracker } from "lib/analytics"
import {
  mapActions,
  mapGetters
} from 'vuex'
export default {
  name: "headBar",
  computed: {
    ...mapGetters({
      isCollapse: "getConfigInfo",
      clientWidth: "getClientWidth",
      org: "getConfigOriginazation",
      projectInfo: "projectInfo"
    }),
    name () {
      return (this.$route.path == '/projects' || this.$route.path.includes('institutionInfo') || this.$route.path.includes('applications')) ? this.org.organizationName : this.projectInfo.name
    }
  },
  data () {
    return {
      color: 'problack',
      hiddenInfo: false,
      hiddenName: false,
      hiddenMoreInfo: false,
      phone: null,
      tel: '',
      nick: '',
      organization: '',
      onShow: true
    }
  },
  components: {
    godonDropdown
  },
  mounted () {
  },
  created () {
    this.organization = localStorage.getItem('organization') ? JSON.parse(localStorage.getItem('organization')) : ''
    this.tel = localStorage.getItem('tel')
    this.nick = localStorage.getItem('nick')
  },
  methods: {
    ...mapActions([
      'updateCollapse',
      'updateProjectInfo'
    ]),
    changeTheme (theme) {
      if (theme == this.color) {
        return false
      }
      this.color = theme
      window.document.documentElement.setAttribute('data-theme', `theme_${theme}`)
    },
    logout () {
      this.$http.logout().then((res) => {
        tracker.deleteToken()
        localStorage.removeItem('organization')
        localStorage.removeItem('tel')
        localStorage.removeItem('nick')
        localStorage.removeItem('projectInfo')
        this.updateProjectInfo('')
        this.$router.push({ path: '/login' })
      }).catch(e => {})
    }
  }
}

</script>

<style lang="scss">
</style>
