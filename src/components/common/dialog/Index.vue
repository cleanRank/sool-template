<template id="">
  <div class="pop_box" id="successWrap">
    <div class="opa"></div>
    <div class="tip-cont">
        <div class="">
          <p class="p_txt" v-show="dialog.loadAlert.title && dialog.loadAlert.title!=''">{{dialog.loadAlert.title}}</p>
          <span class="state">{{dialog.loadAlert.msg}}</span>
        </div>
        <div class="btn-cont flex">
          <a class="btn_comsty btn_cancle cell_1 js_pop_cancel" href="javascript:;" v-show="dialog.loadAlert.lBtnText && dialog.loadAlert.lBtnText != ''" @click="cancel">{{dialog.loadAlert.lBtnText}}</a>
          <a href="javascript:;" class="btn_comsty btn_get cell_1 js_pop_ok" @click="confirm">{{dialog.loadAlert.rBtnText}}</a>
        </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'dialogs',
  computed: {
    ...mapGetters({
      dialog: "getDialogInfo"
    })
  },
  methods: {
    ...mapActions([
      "updateToast",
      "showOneBtnDialog"
    ]),
    // 点击左侧按钮，取消，否等
    cancel () {
      let { cancleBack } = this.dialog.loadAlert
      // 隐藏当前弹框
      this.showOneBtnDialog()
      cancleBack && cancleBack()
    },
    // 点击确定
    confirm () {
      let { confCallBack } = this.dialog.loadAlert
      // 隐藏当前弹框
      this.showOneBtnDialog()
      confCallBack && confCallBack()
    }
  }
}
</script>
<style media="screen" scoped>
  #successWrap{
    z-index: 9999;
  }
</style>
