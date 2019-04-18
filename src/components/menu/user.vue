<template>
    <div :class="['h-full relative', {'border-grey-light border-b-4': !opened, 'border-purple border-l-4 border-b-4 bg-purple-lightest': opened}]">
        <a class="h-full flex items-center justify-center cursor-pointer px-8" @click="opened = !opened;">
            <img src="https://lorempixel.com/36/36/people" :class="['border-2 rounded-full align-middle sm:mr-2', {'border-purple': opened}]" />
            <p :class="['text-sm text-grey-dark hidden sm:block', {'text-purple': opened}]">{{displayName}}</p>
            <i :class="['text-xs ml-2 mt-1 text-grey-dark hidden sm:block', {'fas fa-times text-purple': opened}, {'fas fa-angle-down': !opened}]"></i>
        </a>
        <div v-if="opened" class="absolute border border-t-0 border-l-4 border-b-4 border-r-4 border-purple pin-x px-4 pt-4 pb-4 bg-purple-lightest -ml-1 mr-2 shadow">
            <ul class="list-reset">
                <router-link tag="li" to="/" class="cursor-pointer">Logout</router-link>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'bklo-c-menu-user',
        props: {
            displayName: { type: String, default: 'John Doe' }
        },
        watch: {
            opened(newValue) {
                if (newValue) {
                    this.$emit('opened');
                } else {
                    this.$emit('closed');
                }
            }
        },
        data: () => ({
            opened: true
        }),
    };
</script>

<style scoped>

</style>
