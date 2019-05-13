<template>
    <div class="container flex flex-col h-screen">
        <div class="flex w-screen h-16">
            <div class="w-16 sm:w-16 md:w-48 bg-black items-center justify-center text-gray-400 shadow border-b-4 border-gray-700">
                <div class="text-center text-xs p-2 sm:p-5 sm:text-sm md:text-base">
                    <slot name="header-logo">Logo</slot>
                </div>

                <a @click="sidebarOpened = !sidebarOpened;" class="block sm:hidden text-center">
                    <i class="fas fa-bars"></i>
                </a>
            </div>
            <div class="flex-wrap flex-1">
                <div class="h-16 bg-white flex items-center shadow">
                    <input
                            type="text"
                            :placeholder="searchEmpty"
                            class="flex-1 h-full px-4 border-b-4 focus:outline-none focus:bg-white focus:border-purple-600 text-sm sm:text-lg focus:text-purple-600"
                    />

                    <slot name="header-menu"></slot>
                </div>
            </div>
        </div>

        <div class="flex w-screen bg-gray-500 flex-grow">
            <div :class="['sm:block sm:w-16 md:w-48', ...sidebarClasses, {'hidden': !sidebarOpened, 'absolute mb-0 shadow-lg': sidebarOpened}]">
                <slot name="left-menu"></slot>
            </div>
            <div class="flex-1 bg-gray-200 w-screen p-8">
                <slot name="content">
                    <i class="text-orange-600">WARNING:</i>&nbsp;
                    <i class="text-gray-600">add a component to client content :-)</i>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'bklo-l-client',
    components: { },
    props: {
        searchEmpty: { type: String, default: 'Search...' },
        search: { type: Function, default: null },
        sidebarClasses: {
            type: Array,
            default: () => (['bg-gray-900']),
        }
    },
    data: () => ({
        sidebarOpened: false,
    }),
    computed: {

    },
    methods: {

    }
};
</script>

<style scoped></style>
