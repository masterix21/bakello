# Form - Element component

> Form element like input (default) and others.

## Examples
*@TODO*

## Props
| Name | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| label | string | null | yes | Field label |
| attribute | string | null | no | Attribute name used with validator |
| type | string | text | no | Input type field (eg. text, number, etc) |
| placeholder | string | null | no | Field text when empty |
| value (or v-model) | string | null | yes | Field value |
| labelClass | string, array | null | no | Label class |
| inputClass | string, array | null | no | Input field class |
| validator | object | null | no | Vuelidate validator object |


## Slots
| Name | Description |
|------|-------------|
| default | Component that will replace default "input" |
