<template>
    <div class="container flex flex-col h-screen">
        <div class="flex w-screen h-16">
            <div class="w-16 sm:w-16 md:w-48 bg-black items-center justify-center text-grey shadow border-b-4 border-grey-darker">
                <slot name="header-logo">
                    <div class="text-center text-xs p-2 sm:p-5 sm:text-sm md:text-base">Logo</div>

                    <a @click="sidebarOpened = !sidebarOpened;" class="block sm:hidden text-center text-2xl">
                        <i class="fas fa-bars"></i>
                    </a>
                </slot>
            </div>
            <div class="flex-wrap flex-1 bg-grey-light">
                <div class="h-16 bg-white flex items-center shadow">
                    <input
                            type="text"
                            placeholder="Ricerca..."
                            class="flex-1 h-full px-4 border-b-4 focus:outline-none focus:bg-white focus:border-purple text-sm sm:text-lg focus:text-purple"
                    />

                    <slot name="header-menu"></slot>
                </div>
            </div>
        </div>

        <div class="flex w-screen bg-grey flex-grow">
            <div :class="['sm:block sm:w-16 md:w-48', ...sidebarClasses, {'hidden': !sidebarOpened, 'absolute mb-0 shadow-lg': sidebarOpened}]">
                <slot name="menu-left"></slot>
            </div>
            <div class="flex-1 bg-grey-lighter w-screen p-8">
                <slot name="content"><i class="text-orange-light">
                    WARNING:</i>&nbsp;<i class="text-grey">add a component to client content :-)</i>
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
        sidebarClasses: {
            type: Array,
            default: () => (['bg-grey-darkest']),
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
