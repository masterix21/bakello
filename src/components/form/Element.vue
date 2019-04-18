<template>
    <label :class="['block text-grey-darker text-sm font-bold', { 'text-red-dark': hasErrors }, ...labelClass]">
        {{ label }}

        <slot>
            <input
                :class="[
                    'shadow appearance-none border rounded w-full mt-2 py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline',
                    { 'border-red': hasErrors },
                    ...inputClass,
                ]"
                :type="type"
                :placeholder="placeholder"
                v-model="innerValue"
            />
        </slot>

        <div class="errors" v-if="hasErrors">
            <p class="text-red text-xs" v-for="(error, index) in activeErrorMessages" :key="'error-' + index">
                <i>{{ error }}</i>
            </p>
        </div>
    </label>
</template>

<script>
import { singleErrorExtractorMixin } from 'vuelidate-error-extractor';

export default {
    name: 'bklo-c-form-element',
    mixins: [singleErrorExtractorMixin],
    props: {
        label: String,
        attribute: String,
        type: { type: String, default: 'text' },
        placeholder: String,
        value: String,
        labelClass: { type: [String, Array], default: null },
        inputClass: { type: [String, Array], default: null },
        validator: Object,
    },
    data: () => ({
        innerValue: null,
    }),
    watch: {
        value(newValue) {
            if (newValue !== this.innerValue) {
                this.innerValue = newValue;
            }
        },
        innerValue(newValue) {
            if (newValue !== this.value) {
                this.$emit('input', newValue);
            }
        },
    },
    methods: {},
    mounted() {
        this.innerValue = this.value;
    },
};
</script>
