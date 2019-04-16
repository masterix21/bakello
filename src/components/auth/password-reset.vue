<template>
    <div>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method="POST" action="../client.html">
            <div class="mb-6">
                <label class="block text-grey-darker text-sm font-bold">
                    E-mail
                    <input
                            class="shadow appearance-none border border-red rounded w-full mt-2 py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                            type="email" placeholder="j.doe@acme.com">
                </label>
                <p class="text-red text-xs italic mt-2">Please choose a password.</p>
            </div>
            <div class="mb-6">
                <label class="block text-grey-darker text-sm font-bold">
                    New password
                    <input
                            class="shadow appearance-none border border-red rounded w-full mt-2 py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                            type="password" placeholder="******">
                </label>
                <p class="text-red text-xs italic mt-2">Please choose a password.</p>
            </div>
            <div class="mb-6">
                <label class="block text-grey-darker text-sm font-bold">
                    Confirm new password
                    <input
                            class="shadow appearance-none border border-red rounded w-full mt-2 py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                            type="password" placeholder="******">
                </label>
                <p class="text-red text-xs italic mt-2">Please choose a password.</p>
            </div>

            <button
                    class="bg-blue w-full hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit">
                Change password
            </button>
        </form>
        <slot name="footer">
          <bklo-copyright-footer />
        </slot>
    </div>
</template>

<script>
import BkloCopyrightFooter from '../CopyrightFooter'

export default {
  name: 'bklo-password-reset',
  components: { BkloCopyrightFooter }
}
</script>

<style scoped>

</style>
