<template>
    <bklo-layouts-client :sidebarClasses="['bg-gradient-b-grey-darkest-to-darker']">
        <bklo-c-menu-user slot="header-menu" display-name="Ciro" />
    </bklo-layouts-client>
</template>

<script>
  import BkloLayoutsClient from '../../src/layouts/client'
  import BkloCMenuUser from '../../src/components/menu/user'
  export default {
    name: 'Client',
    components: {BkloCMenuUser, BkloLayoutsClient}
  }
</script>

<style scoped>

</style>
