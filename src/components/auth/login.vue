<template>
    <div>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <bklo-components-form-element :label="usernameLabel" v-model="username" :placeholder="usernameEmpty" :validator="$v.username" @input="$v.username.$touch()" />
            </div>
            <div class="mb-6">
                <bklo-components-form-element type="password" :label="passwordLabel" v-model="password" :placeholder="passwordEmpty" :validator="$v.password" @input="$v.password.$touch()" />
            </div>
            <div class="flex items-center justify-between">
                <button
                    class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    @click="login()"
                >
                    {{ loginText }}
                </button>
                <router-link
                    class="inline-block align-baseline font-bold text-sm text-grey-darker hover:text-blue-darker no-underline"
                    :to="resetUrl"
                >
                    {{ resetText }}
                </router-link>
            </div>
        </form>
        <slot v-if="hideFooter" name="footer">
            <bklo-copyright-footer />
        </slot>
    </div>
</template>

<script>
import axios from 'axios';
import BkloCopyrightFooter from '../CopyrightFooter';
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';
import BkloComponentsFormElement from '../form/Element';

export default {
    name: 'bklo-login',
    components: { BkloComponentsFormElement, BkloCopyrightFooter },
    mixins: [ validationMixin ],
    props: {
        usernameLabel: { type: String, default: 'Username' },
        usernameField: { type: String, default: 'username' },
        usernameEmpty: { type: String, default: 'Username' },
        passwordLabel: { type: String, default: 'Password' },
        passwordField: { type: String, default: 'password' },
        passwordEmpty: { type: String, default: '********' },
        emptyFieldText: { type: String, default: 'Field required.' },
        loginText: { type: String, default: 'Sign In' },
        loginUrl: { type: String, default: null },
        resetText: { type: String, default: 'Forgot Password?' },
        resetUrl: { type: String, default: null },
        submit: { type: Function, default: null },
        hideFooter: { type: Boolean, default: false },
        validations: { type: Object, default: () => ({
            username: { required },
            password: { required },
        })}
    },
    data: () => ({
        username: null,
        password: null,
    }),
    validations() {
        return this.validations;
    },
    methods: {
        login() {
            let ret;

            let data = {};
            data[this.usernameField] = this.username;
            data[this.passwordField] = this.password;

            this.$emit('onSubmit', data);

            if (typeof this.submit === 'function') {
                ret = this.submit(data);
            } else {
                ret = axios.post('/login', data);
            }

            ret.then(response => {
                let data = response;

                if (data.hasOwnProperty('data')) {
                    data = data.data;
                }

                this.$emit('onLogged', data);
            }).catch(error => {
                this.$emit('onFails', error);
            });
        },
    },
};
</script>
