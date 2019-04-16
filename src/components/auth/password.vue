<template>
    <div>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method="POST" action="../password-reset.html">
            <div class="mb-6">
                <label class="block text-grey-darker text-sm font-bold">
                    E-mail
                    <input
                            class="shadow appearance-none border border-red rounded w-full mt-2 py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            type="email" placeholder="j.doe@acme.com">
                </label>
                <p class="text-red text-xs italic">Please choose a password.</p>
            </div>
            <div class="flex items-center justify-between">
                <button
                        class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                    Reset password
                </button>
                <router-link class="inline-block align-baseline font-bold text-sm text-grey-darker hover:text-blue-darker no-underline" :to="this.loginUrl">
                    Login
                </router-link>
            </div>
        </form>
        <slot name="footer">
          <bklo-copyright-footer />
        </slot>
    </div>
</template>

<script>
import BkloCopyrightFooter from '../CopyrightFooter'
export default {
  name: 'bklo-password',
  components: { BkloCopyrightFooter },
  props: {
    loginUrl: { type: String, value: '' },
    resetUrl: String,
    submit: Function
  }
}
</script>

<style scoped>

</style>
