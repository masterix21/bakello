<template>
    <table class="table-auto w-full shadow-md bg-white rounded-lg rounded-lg border-0">
        <slot name="thead">
            <thead>
                <tr>
                    <th v-for="(col, index) in _cols" :key="index" :class="['p-3 border-b-2 border-grey-light text-grey-darkest text-left', ...col.class]">
                        {{col.text || col}}
                    </th>
                </tr>
            </thead>
        </slot>
        <slot v-if="rows.length > 0" name="tbody">
            <tbody>
                <tr v-for="(item, index) in rows" :key="index" :class="[{'bg-grey-lighter': striped && index % 2}]">
                    <td v-for="(col, index) in _cols" :key="index" class="p-3 text-grey-darker">
                        <slot :name="'row-col-'+ col.key" :item="item">{{ renderColumnValue(col, item) }}</slot>
                    </td>
                </tr>
            </tbody>
        </slot>
        <tbody v-else>
            <tr>
                <td :colspan="_cols.length" class="p-4 text-center text-grey-dark">
                    {{ emptyDataText }}
                </td>
            </tr>
        </tbody>
        <slot name="tfoot"></slot>
    </table>
</template>

<script>
    import _ from 'lodash';

    export default {
        name: 'bklo-c-table',
        props: {
            cols: { type: [ Array, String ], default: () => ([]) },
            rows: { type: Array, default: () => ([]) },
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
            }
        },
    };
</script>

<style scoped>

</style>
