<template>
    <div>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method="POST" onsubmit="return false;">
            <div class="mb-2">
                <bklo-c-form-element
                    v-model="username"
                    :label="usernameLabel"
                    :placeholder="usernameEmpty"
                    :validator="$v.username"
                    @input="$v.username.$touch()"
                />
            </div>
            <div class="mb-2">
                <bklo-c-form-element
                    type="password"
                    :label="passwordLabel"
                    v-model="password"
                    :placeholder="passwordEmpty"
                    :validator="$v.password"
                    @input="$v.password.$touch()"
                />
            </div>
            <div class="flex items-center justify-between">
                <button
                    :class="[
                        'bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline',
                        { 'opacity-50 cursor-not-allowed': invalidForm },
                        ...submitClass,
                    ]"
                    :disabled="invalidForm"
                    @click="login()"
                >
                    {{ loginText }}
                </button>
                <router-link
                    :class="[
                        'inline-block align-baseline font-bold text-sm text-gray-600 hover:text-blue-600 no-underline',
                        ...resetClass,
                    ]"
                    :to="resetUrl"
                >
                    {{ resetText }}
                </router-link>
            </div>
        </form>
        <slot v-if="!hideFooter" name="footer">
            <bklo-c-copyright-footer />
        </slot>
    </div>
</template>

<script>
import axios from 'axios';
import BkloCCopyrightFooter from '../copyright-footer';
import { required } from 'vuelidate/lib/validators';
import BkloCFormElement from '../form/element';

export default {
    name: 'bklo-c-auth-login',
    components: { BkloCFormElement, BkloCCopyrightFooter },
    props: {
        usernameLabel: { type: String, default: 'Username' },
        usernameField: { type: String, default: 'username' },
        usernameEmpty: { type: String, default: 'Username' },
        passwordLabel: { type: String, default: 'Password' },
        passwordField: { type: String, default: 'password' },
        passwordEmpty: { type: String, default: '********' },
        emptyFieldText: { type: String, default: 'Field required.' },
        loginText: { type: String, default: 'Sign In' },
        loginUrl: { type: String, default: '/login' },
        resetText: { type: String, default: 'Forgot Password?' },
        resetUrl: { type: String, default: null },
        submitClass: { type: [String, Object], default: null },
        resetClass: { type: [String, Object], default: null },
        submit: { type: Function, default: null },
        hideFooter: { type: Boolean, default: false },
        validations: {
            type: Object,
            default: () => ({
                username: { required },
                password: { required },
            }),
        },
    },
    computed: {
        invalidForm() {
            return this.$v.$invalid || this.$v.$error;
        },
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
            if (this.invalidForm) {
                this.$emit('onFails');
                return;
            }

            let ret;

            let data = {};
            data[this.usernameField] = this.username;
            data[this.passwordField] = this.password;

            this.$emit('onSubmit', data);

            if (typeof this.submit === 'function') {
                ret = this.submit(data);
            } else {
                ret = axios.post(this.loginUrl, data);
            }

            ret.then(response => {
                let data = response;

                if (data.hasOwnProperty('data')) {
                    data = data.data;
                }

                this.$emit('onSuccess', data);
            }).catch(error => {
                this.$emit('onFails', error);
            });
        },
    },
};
</script>
