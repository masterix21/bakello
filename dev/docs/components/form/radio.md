# Form - Radio input

> Form element like input (default) and others.

## Examples
```vue
<bklo-c-form-element label="Gender">
    <bklo-c-form-radio :values="[{value:'M',text:'Male'}, {value:'F',text:'Female'}]" v-model="form.gender" />
</bklo-c-form-element>
```

## Props
| Name | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| checked-color | string | text-grey-darkest | no | Checked radio color |
| unchecked-color | string | text-grey | no | Unchecked radio color |
| values | Array | null | yes | Field label |

### Values
| Name | Type | Required | Description |
|------|------|----------|-------------|
| value | any | yes | Radio value |
| text | string | yes | Radio text | 
