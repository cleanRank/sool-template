<template>
  <div id="app">
    <router-view />
    <Dialog v-show="dialog.loadAlert.msg != ''"></Dialog>
    <Loading></Loading>
  </div>
</template>

<script>
import Dialog from 'components/common/dialog/Index'
import Loading from 'components/common/Loading'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    Dialog,
    Loading
  },
  computed: {
    ...mapGetters({
      dialog: "getDialogInfo"
    })
  }
}
</script>
<style lang="scss">
 @import 'assets/scss/aggregate';
 #app{
   height: 100%;
   width: 100%;
 }
</style>
