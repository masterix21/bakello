<template>
    <div :class="['h-full relative w-32 -ml-10 sm:w-auto', {'border-gray-300 border-b-4': !opened, 'border-gray-700 border-l-4 border-b-4 bg-gray-600': opened}]">
        <a class="h-full flex items-center justify-center cursor-pointer px-6" @click="opened = !opened;">
            <img :src="avatar" :class="['border-2 rounded-full align-middle -mr-10 sm:mr-2', {'border-grey-light -ml-10 sm:-ml-1': opened}]" />
            <p :class="['text-sm text-gray-900 hidden sm:block', {'text-gray-800': opened}]">{{displayName}}</p>
            <i :class="['text-xs ml-2 mt-1 text-gray-800 hidden sm:block', {'fas fa-times text-gray-800': opened}, {'fas fa-angle-down': !opened}]"></i>
        </a>
        <div v-if="opened" class="absolute border border-t-0 border-l-4 border-b-4 border-r-4 border-gray-700 pin-x bg-gray-600 -ml-1 mr-2 shadow">
            <slot name="menu"></slot>
            <ul class="list-reset text-xs sm:text-sm">
                <li v-for="(item, index) in items" :key="index" class="text-white border border-gray-800 border-t-1 border-b-0 border-l-0 border-r-0 py-3 px-4 hover:text-grey-dark hover:border-grey-light">
                    <a @click="item.action" :class="[ 'cursor-pointer', ...itemClass ]">
                        <i v-if="item.icon" :class="['mr-2', ...item.icon]"></i> {{item.text}}
                    </a>
                </li>
                <li class="text-white border border-gray-700 border-t-1 border-b-0 border-l-0 border-r-0 py-3 px-4 hover:text-gray-800 hover:border-gray-200">
                    <a :class="[ 'cursor-pointer', ...logoutClass ]" @click="logout()">
                        <i class="mr-2 fas fa-door-open"></i> {{logoutText}}
                    </a>
                </li>
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
            items: Array,
            itemClass: { type: [ String, Array ], default: null },
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
