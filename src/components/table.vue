<template>
    <bklo-c-card>
        <table class="table-auto w-full">
            <slot name="thead">
                <thead>
                    <tr>
                        <th v-for="(col, index) in _cols" :key="index" :class="['p-3 border-b-2 border-gray-400 text-gray-600 text-left', ...col.class, columnVisibility(col)]">
                            {{col.text || ''}}
                        </th>
                        <th v-if="actions && actions.length > 0" :class="['p-3 border-b-2 border-gray-400 text-gray-600 text-left w-16 sm:w-32']"></th>
                    </tr>
                </thead>
            </slot>
            <slot v-if="rows.length > 0" name="tbody">
                <tbody>
                    <tr v-for="(item, index) in rows" :key="index" :class="[{'bg-gray-100': striped && index % 2}]">
                        <td v-for="(col, index) in _cols" :key="index" :class="['p-3 text-gray-600', columnVisibility(col), ...col.class]">
                            <slot :name="'row-col-'+ col.key" :item="item">{{ renderColumnValue(col, item) }}</slot>
                        </td>
                        <td v-if="actions && actions.length > 0" class="text-center px-2">
                            <button v-for="(action, _index) in actions" v-if="action.action" @click="action.action(item)" :class="['py-2 px-3 border rounded shadow block sm:inline w-full md:w-auto text-xs', ...action.class, {'mt-1 md:mt-0 md:ml-1': _index > 0}]">
                                <i v-if="action.icon" :class="[ action.icon ]"></i>
                                <span v-if="action.text" :class="[ action.textClass ]">{{action.text}}</span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </slot>
            <tbody v-else>
                <tr>
                    <td :colspan="_cols.length" class="p-4 text-center text-gray-600">
                        {{ emptyDataText }}
                    </td>
                </tr>
            </tbody>
            <slot name="tfoot"></slot>
        </table>
    </bklo-c-card>
</template>

<script>
    import _ from 'lodash';
    import BkloCCard from "./card";

    export default {
        name: 'bklo-c-table',
        components: {BkloCCard},
        props: {
            cols: { type: [ Array, String ], default: () => ([]) },
            rows: { type: Array, default: () => ([]) },
            actions: { type: Array, default: () => ([]) },
            emptyDataText: { type: String, default: 'No rows' },
            striped: { type: Boolean, default: true }
        },
        computed: {
            _cols() {
                if (typeof this.cols === 'string') {
                    return _.split(this.cols, ';');
                }

                return this.cols;
            }
        },
        methods: {
            renderColumnValue(col, item) {
                if (col && typeof col.value === 'function') {
                    return col.value(item);
                }

                return _.get(item, _.get(col, 'key'));
            },
            columnVisibility(col) {
                if (!col || !col.visibility) {
                    return 'visible';
                }

                let cls = [ ];

                cls.push(_.indexOf(col.visibility, 'xs') == -1 ? 'hidden' : 'table-cell');
                cls.push(_.indexOf(col.visibility, 'sm') == -1 ? 'sm:hidden' : 'sm:table-cell');
                cls.push(_.indexOf(col.visibility, 'md') == -1 ? 'md:hidden' : 'md:table-cell');
                cls.push(_.indexOf(col.visibility, 'lg') == -1 ? 'lg:hidden' : 'lg:table-cell');
                cls.push(_.indexOf(col.visibility, 'xl') == -1 ? 'xl:hidden' : 'xl:table-cell');

                return cls.join(' ');
            }
        },
    };
</script>

<style scoped>

</style>
