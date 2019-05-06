# Menu - Sidebar

> Menu shown in the left side of client 

## Examples
```js
// ...
data: () => ({
    items: [{
        text: 'Registries',
        icon: 'fas fa-address-card',
        children: [{
            text: 'Customers',
            icon: 'fas fa-users',
            action: '/'
        }, {
            text: 'Products',
            icon: 'fas fa-tags',
            action: '/'
        }]
    }, {
        text: 'Sales',
        icon: 'fas fa-store',
        children: [{
            text: 'Quotes',
            icon: 'fas fa-fire',
            action: '/'
        }, {
            text: 'Orders',
            icon: 'fas fa-piggy-bank',
            action: '/'
        }]
    }] 
})
// ...
```

```vue
<bklo-c-menu-sidebar :items="items" />
```

## Props
| Name | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| items | array | null | no | URL to avatar image. If empty, shown a random image from Lorempixel.com |

## Slots
| Name | Description |
|------|-------------|
| above | Add components above menu |
| below | Add components below menu |
