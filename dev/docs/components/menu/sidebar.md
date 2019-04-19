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

## Events
| Name | Params | Description |
|------|--------|-------------|
| opened | null | Fired when the user open the menu. |
| closed | null | Fired when the user close the menu. |

## Slots
| Name | Description |
|------|-------------|
| above | Add components above menu |
| below | Add components below menu |
