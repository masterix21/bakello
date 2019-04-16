<template>
    <div>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-grey-darker text-sm font-bold">
                    {{usernameLabel}}
                  <input :class="['shadow appearance-none border rounded w-full mt-2 py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline', {'border-red': false}]"
                            type="text" :placeholder="usernameEmpty" v-model="username">
                </label>
            </div>
            <div class="mb-6">
                <label class="block text-grey-darker text-sm font-bold">
                    {{passwordLabel}}
                    <input :class="['shadow appearance-none border rounded w-full mt-2 py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline', {'border-red': false}]"
                           type="password" :placeholder="passwordEmpty" v-model="password">
                </label>
                <p class="text-red text-xs italic">{{emptyFieldText}}</p>
            </div>
            <div class="flex items-center justify-between">
                <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" @click="login()">
                    {{loginText}}
                </button>
                <router-link class="inline-block align-baseline font-bold text-sm text-grey-darker hover:text-blue-darker no-underline" :to="resetUrl">
                    {{resetText}}
                </router-link>
            </div>
        </form>
        <slot name="footer">
            <bklo-copyright-footer />
        </slot>
    </div>
</template>

<script>
import BkloCopyrightFooter from '../CopyrightFooter';
import _ from 'lodash';

export default {
  name: 'bklo-login',
  components: {BkloCopyrightFooter},
  props: {
    usernameLabel: { type: String, default: 'Username' },
    usernameEmpty: { type: String, default: 'Username' },
    passwordLabel: { type: String, default: 'Password' },
    passwordEmpty: { type: String, default: '********' },
    emptyFieldText: { type: String, default: 'Field required.' },
    loginText: { type: String, default: 'Sign In' },
    loginUrl: { type: String, default: null },
    resetText: { type: String, default: 'Forgot Password?' },
    resetUrl: { type: String, default: null },
    submit: { type: Function, default: null }
  },
  data: () => ({
    username: null,
    password: null,
  }),
  methods: {
    login () {
      let ret

      if (typeof this.submit === 'function') {
        ret = this.submit()
      } else {
        // @TODO: call axios :-)
      }

      ret.then(success => {
        this.$router.push('Client')
      })
    }
  }
}
</script>
