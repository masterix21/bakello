# Table

> Table component to view data 

## Examples

```js
// ...
data: () => ({
    cols: [{
        key: 'id',
        text: 'ID customer',
    }, {
        key: 'display-name',
        text: 'Display name',
        value: (item) => `${item.first_name} ${item.last_name}` 
    }, {
        key: 'actions',
        text: ''
    }],
    records: [{
        id: 1,
        first_name: 'John',
        last_name: 'Doe',
        email: 'john@doe.org'
    }, {
        id: 2,
        first_name: 'Paul',
        last_name: 'Jackson',
        email: 'paul@jackson.org'
    }]
})
// ...
```

```vue
<bklo-c-table :cols="cols", :rows="records">
    <template v-slot:row-col-actions="{ item }">
        <router-link :to="`/customers/${item.id}`">EDIT</router-link>
        <button @click="destroy(item.id)">EDIT</button>
    </template>
</bklo-c-table>
```

## Props
| Name | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| cols | array,string | [] | yes | Table columns. Can be a string with column separated by ";" |
| rows | array | [] | yes | Table rows |
| empty-data-text | String | no | No rows | Empty string shown when rows array is empty |
| striped | boolean | true | no | Table with striped rows |


## Slots
| Name | Description |
|------|-------------|
| thead | Table thead block |
| tbody | Table tbody block |
| row-col-{$key} | Dynamic slot created row by row with prop "item" | 
| tfoot | Table tfoot block |
