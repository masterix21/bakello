<template>
    <bklo-l-client :sidebarClasses="['bg-gradient-b-grey-darkest-to-darker']">
        <bklo-c-menu-user slot="header-menu" display-name="Ciro"/>
        <bklo-c-menu-sidebar slot="menu-left" :items="sidebarMenuItems">

        </bklo-c-menu-sidebar>
    </bklo-l-client>
</template>

<script>
    import BkloLClient from '../../src/layouts/client';
    import BkloCMenuUser from '../../src/components/menu/user';
    import BkloCMenuSidebar from '../../src/components/menu/sidebar';

    export default {
        name: 'Client',
        components: { BkloCMenuSidebar, BkloCMenuUser, BkloLClient },
        computed: {
            sidebarMenuItems() {
                return [{
                    text: 'Registries',
                    icon: 'fas fa-address-card',
                    children: [{
                        text: 'Customers',
                        icon: 'fas fa-users',
                        url: '/'
                    }, {
                        text: 'Products',
                        icon: 'fas fa-tags',
                        url: '/'
                    }]
                }, {
                    text: 'Sales',
                    icon: 'fas fa-store',
                    children: [{
                        text: 'Quotes',
                        icon: 'fas fa-fire',
                        url: '/'
                    }, {
                        text: 'Orders',
                        icon: 'fas fa-piggy-bank',
                        url: '/'
                    }]
                }, {
                    text: 'Accounting',
                    icon: 'fas fa-cash-register',
                    children: [{
                        text: 'Invoices',
                        icon: 'fas fa-euro-sign',
                        url: '/'
                    }, {
                        text: 'Credit notes',
                        icon: 'fab fa-creative-commons-nc-eu',
                        url: '/'
                    }]
                }, {
                    text: 'Warehouse',
                    icon: 'fas fa-box-open',
                    children: [{
                        text: 'Transport documents',
                        icon: 'fas fa-people-carry',
                        url: '/'
                    }, {
                        text: 'Stocks',
                        icon: 'fas fa-warehouse',
                        url: '/'
                    }]
                }];
            }
        }
    };
</script>

<style scoped>

</style>
