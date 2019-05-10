<template>
    <div class="mt-4">
        <a v-for="(val, index) in values" @click="$emit('input', val.value)" :class="['cursor-pointer text-base', radioColor(val.value), {'ml-3': index != 0}]">
            <i v-if="value == val.value" class="far fa-check-circle"></i>
            <i v-else class="far fa-circle"></i>
            {{val.text}}
        </a>
    </div>
</template>

<script>
    export default {
        name: "bklo-c-form-radio",
        props: {
            checkedColor: { type: String, default: 'text-grey-darkest' },
            uncheckedColor: { type: String, default: 'text-grey' },
            values: {
                type: Array,
                default: () => ([ ])
            },
            value: null,
        },
        methods: {
            radioColor(val) {
                return this.value == val ? this.checkedColor : this.uncheckedColor;
            }
        }
    }
</script>
