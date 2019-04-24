<template>
    <div :class="['h-full relative w-32 -ml-10 sm:w-auto', {'border-grey-light border-b-4': !opened, 'border-grey-dark border-l-4 border-b-4 bg-grey': opened}]">
        <a class="h-full flex items-center justify-center cursor-pointer px-6" @click="opened = !opened;">
            <img :src="avatar" :class="['border-2 rounded-full align-middle -mr-10 sm:mr-2', {'border-grey-light -ml-10 sm:-ml-1': opened}]" />
            <p :class="['text-sm text-grey-dark hidden sm:block', {'text-grey-lighter': opened}]">{{displayName}}</p>
            <i :class="['text-xs ml-2 mt-1 text-grey-dark hidden sm:block', {'fas fa-times text-grey-lighter': opened}, {'fas fa-angle-down': !opened}]"></i>
        </a>
        <div v-if="opened" class="absolute border border-t-0 border-l-4 border-b-4 border-r-4 border-grey-dark pin-x px-4 pt-4 pb-4 bg-grey -ml-1 mr-2 shadow">
            <slot name="menu"></slot>
            <ul class="list-reset text-xs sm:text-sm">
                <li class="text-white border border-grey-dark border-t-0 border-r-0 border-l-0 border-b pb-2 hover:text-grey-dark hover:border-grey-light"><a :class="[ 'cursor-pointer', ...logoutClass ]" @click="logout()">{{logoutText}}</a></li>
                <li class="text-white border border-grey-dark border-t-0 border-r-0 border-l-0 border-b pt-2 pb-2 hover:text-grey-dark hover:border-grey-light"><a :class="[ 'cursor-pointer', ...logoutClass ]">Lorem ipsum</a></li>
                <li class="text-white border border-grey-dark border-t-0 border-r-0 border-l-0 border-b pt-2 pb-2 hover:text-grey-dark hover:border-grey-light"><a :class="[ 'cursor-pointer', ...logoutClass ]">Lorem ipsum</a></li>
                <li class="text-white pt-2"><a :class="[ 'cursor-pointer', ...logoutClass ]">Lorem ipsum</a></li>
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
            opened: false
        }),
        methods: {

        }
    };
</script>

<style scoped>

</style>
