<template>
    <div>
        <slot name="above" />

        <ul v-if="items && items.length > 0" class="list-reset text-grey-dark pt-5 pb-5 leading-loose">
            <li v-for="(item, index) in items" :key="'sidebar-menu-item-'+ index" class="text-sm">
                <a @click="handleClick(item, index)" class="font-bold text-white uppercase border-b border-grey-darker pt-3 pb-3 pl-5 pr-5 flex hover:text-grey hover:border-white cursor-pointer">
                    <i v-if="item.icon" :class="['text-xl md:text-xs mr-2 mt-2', ...item.icon]"></i>
                    <span class="sm:hidden md:block ">{{item.text}}</span>
                </a>

                <ul v-if="hasChildren(item)" :class="['list-reset text-sm text-grey-light bg-grey-dark border-b border-grey-dark pt-2 pb-2 pl-5 pr-5', {'hidden': selectedItem != index}]">
                    <li v-for="(child, child_index) in item.children" :key="'sidebar-menu-item-'+ index +'+'+ child_index">
                        <a @click="handleClick(item, index)">
                            <i v-if="child.icon" :class="['text-xs mr-2', ...child.icon]"></i> {{child.text}}
                        </a>
                    </li>
                </ul>
            </li>
        </ul>

        <slot name="below" />
    </div>
</template>

<script>
    export default {
        name: 'bklo-c-menu-sidebar',
        props: {
            items: Array
        },
        data: () => ({
            selectedItem: 0,
        }),
        methods: {
            hasChildren: (item) => item.children && item.children.length > 0,
            handleClick(item, index = null) {
                if (item.action) {
                    item.action();
                } else if (index) {
                    this.selectedItem = index;
                }
            }
        }
    };
</script>

<style scoped>

</style>
