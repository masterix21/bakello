<template>
    <BkloLayoutsPanelCenter>
      <BkloPassword :login-url="'/'"></BkloPassword>
    </BkloLayoutsPanelCenter>
</template>

<script>
import BkloLayoutsPanelCenter from '../../src/layouts/panel-center'
import BkloPassword from '../../src/components/auth/password'

export default {
  name: 'Password',
  components: {
    BkloPassword,
    BkloLayoutsPanelCenter
  },
  methods: {
    login () {
      return new Promise((resolve, reject) => {
        resolve()
      })
    }
  }
}
</script>

<style scoped>

</style>
