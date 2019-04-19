<template>
    <div :class="['h-full relative', {'border-grey-light border-b-4': !opened, 'border-grey-dark border-l-4 border-b-4 bg-grey': opened}]">
        <a class="h-full flex items-center justify-center cursor-pointer px-8" @click="opened = !opened;">
            <img :src="avatar" :class="['border-2 rounded-full align-middle sm:mr-2', {'border-grey-light': opened}]" />
            <p :class="['text-sm text-grey-dark hidden sm:block', {'text-grey-lighter': opened}]">{{displayName}}</p>
            <i :class="['text-xs ml-2 mt-1 text-grey-dark hidden sm:block', {'fas fa-times text-grey-lighter': opened}, {'fas fa-angle-down': !opened}]"></i>
        </a>
        <div v-if="opened" class="absolute border border-t-0 border-l-4 border-b-4 border-r-4 border-grey-dark pin-x px-4 pt-4 pb-4 bg-grey -ml-1 mr-2 shadow">
            <slot name="menu"></slot>
            <ul class="list-reset">
                <li><a :class="[ 'cursor-pointer', ...logoutClass ]" @click="logout()">{{logoutText}}</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'bklo-c-menu-user',
        props: {
            avatar: { type: String, default: 'https://lorempixel.com/36/36/people' },
            displayName: { type: String, default: null },
            logoutText: { type: String, default: 'Logout' },
            logoutClass: { type: [ String, Array ], default: null },
            logout: { type: Function, default: null }
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
        methods: {

        }
    };
</script>

<style scoped>

</style>
