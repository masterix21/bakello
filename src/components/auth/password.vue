<template>
    <div>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method="POST" onsubmit="return false;">
            <div class="mb-2">
                <bklo-c-form-element
                    v-model="email"
                    :label="emailLabel"
                    :placeholder="emailEmpty"
                    :validator="$v.email"
                    @input="$v.email.$touch()"
                />
            </div>
            <div class="flex items-center justify-between">
                <button
                    :class="[
                        'bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline',
                        { 'opacity-50 cursor-not-allowed': invalidForm },
                        ...submitClass,
                    ]"
                    :disabled="invalidForm"
                    @click="resetPassword()"
                >
                    {{ resetText }}
                </button>
                <router-link
                    :class="[
                        'inline-block align-baseline font-bold text-sm text-grey-darker hover:text-blue-darker no-underline',
                        ...loginClass,
                    ]"
                    :to="this.loginUrl"
                >
                    {{ loginText }}
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
import { required, email } from 'vuelidate/lib/validators';
import BkloCCopyrightFooter from '../copyright-footer';
import BkloCFormElement from '../form/element';

export default {
    name: 'bklo-c-auth-password',
    components: { BkloCFormElement, BkloCCopyrightFooter },
    props: {
        emailLabel: { type: String, default: 'E-mail' },
        emailField: { type: String, default: 'email' },
        emailEmpty: { type: String, default: 'Your email address' },
        resetText: { type: String, default: 'Reset password' },
        resetUrl: { type: String, default: '/password/reset' },
        loginText: { type: String, default: 'Sign In' },
        loginUrl: { type: String, default: '/login' },
        submitClass: { type: [String, Object], default: null },
        loginClass: { type: [String, Object], default: null },
        submit: { type: Function, default: null },
        hideFooter: { type: Boolean, default: false },
        validations: {
            type: Object,
            default: () => ({
                email: { required, email },
            }),
        },
    },
    validations() {
        return this.validations;
    },
    computed: {
        invalidForm() {
            return this.$v.$invalid || this.$v.$error;
        },
    },
    data: () => ({
        email: null,
    }),
    methods: {
        resetPassword() {
            if (this.invalidForm) {
                this.$emit('onFails');
                return;
            }

            let ret;

            let data = {};
            data[this.emailField] = this.email;

            this.$emit('onSubmit', data);

            if (typeof this.submit === 'function') {
                ret = this.submit(data);
            } else {
                ret = axios.post(this.resetUrl, data);
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
