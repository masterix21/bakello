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
| actions | array | []  | no | Row actions, like edit or delete |
| empty-data-text | String | no | No rows | Empty string shown when rows array is empty |
| striped | boolean | true | no | Table with striped rows |

### Column object
| Name | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| key | string | null | yes | Object key to map the value in the table cell |
| text | string | null | yes | Column title text |
| visibility | Array | null | no | Screen visibility. Allowed values: [ xs, sm, md, lg, xl ] |
| class | string, Array | null | no | Column style classes
| value | function(item) | null | no | Render function used by data cell |

### Action object
| Name | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| class | string, array | null | no | Action classes applied to tbody column |
| icon | string, array | null | no | Icon classes applied to <i /> tag |
| text | string | null | no | Button text | 
| textClass | string, array | null | no | Text classes applied to <span /> tag |
| action | function | null | no | Action function called on click |

## Slots
| Name | Description |
|------|-------------|
| thead | Table thead block |
| tbody | Table tbody block |
| row-col-{$key} | Dynamic slot created row by row with prop "item" | 
| tfoot | Table tfoot block |
