<template>
    <div>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method="POST" onsubmit="return false;">
            <div class="mb-2">
                <bklo-c-form-element
                    :label="emailLabel"
                    :placeholder="emailEmpty"
                    :attribute="emailLabel"
                    v-model="email"
                    :validator="$v.email"
                    @input="$v.email.$touch()"
                />
            </div>
            <div class="mb-2">
                <bklo-c-form-element
                    type="password"
                    :label="passwordLabel"
                    :placeholder="passwordEmpty"
                    :attribute="passwordLabel"
                    v-model="password"
                    :validator="$v.password"
                    @input="$v.password.$touch()"
                />
            </div>
            <div class="mb-2">
                <bklo-c-form-element
                    type="password"
                    :label="confirmPasswordLabel"
                    :placeholder="confirmPasswordEmpty"
                    :attribute="confirmPasswordLabel"
                    v-model="confirmPassword"
                    :validator="$v.confirmPassword"
                    @input="$v.confirmPassword.$touch()"
                />
            </div>

            <button
                :class="[
                    'bg-blue-600 w-full hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline',
                    { 'opacity-50 cursor-not-allowed': invalidForm },
                    ...submitClass,
                ]"
                :disabled="invalidForm"
                @click="changePassword"
            >
                {{ changeText }}
            </button>
        </form>
        <slot v-if="!hideFooter" name="footer">
            <bklo-c-copyright-footer />
        </slot>
    </div>
</template>

<script>
import axios from 'axios';
import { required, email, sameAs } from 'vuelidate/lib/validators';
import BkloCCopyrightFooter from '../copyright-footer';
import BkloCFormElement from '../form/element';

export default {
    name: 'bklo-c-auth-password-change',
    components: { BkloCFormElement, BkloCCopyrightFooter },
    props: {
        emailLabel: { type: String, default: 'E-mail' },
        emailField: { type: String, default: 'email' },
        emailEmpty: { type: String, default: 'Your email address' },
        passwordLabel: { type: String, default: 'New password' },
        passwordField: { type: String, default: '****' },
        passwordEmpty: { type: String, default: 'Your new password' },
        confirmPasswordLabel: { type: String, default: 'Confirm password' },
        confirmPasswordField: { type: String, default: '****' },
        confirmPasswordEmpty: { type: String, default: 'Confirm your password' },
        changeText: { type: String, default: 'Change your password' },
        changeUrl: { type: String, default: '/password/change' },
        submit: { type: Function, default: null },
        submitClass: { type: [String, Object], default: null },
        hideFooter: { type: Boolean, default: false },
        validations: {
            type: Object,
            default: () => ({
                email: { required, email },
                password: { required, sameAs: sameAs('confirmPassword') },
                confirmPassword: { required, sameAs: sameAs('password') },
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
        password: null,
        confirmPassword: null,
    }),
    methods: {
        changePassword() {
            if (this.invalidForm) {
                this.$emit('onFails');
                return;
            }

            let ret;

            let data = {};
            data[this.emailField] = this.email;
            data[this.passwordField] = this.password;
            data[this.confirmPasswordField] = this.confirmPassword;

            this.$emit('onSubmit', data);

            if (typeof this.submit === 'function') {
                ret = this.submit(data);
            } else {
                ret = axios.post(this.changeUrl, data);
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

<style scoped></style>
