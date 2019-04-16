<template>
    <BkloLayoutsPanelCenter>
      <bklo-login :login-url="'/dev/client'" :submit="login" :reset-url="'/password'" @onSubmit="$router.push('/client')"></bklo-login>
    </BkloLayoutsPanelCenter>
</template>

<script>
import BkloLayoutsPanelCenter from '../../src/layouts/panel-center';
import BkloLogin from '../../src/components/auth/login';

export default {
  name: 'Login',
  components: {
    BkloLogin,
    BkloLayoutsPanelCenter
  },
  methods: {
    login () {
      return new Promise(resolve => {
        resolve()
      })
    }
  }
}
</script>

<style scoped>

</style>
