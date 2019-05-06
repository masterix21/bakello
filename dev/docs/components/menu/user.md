# Menu - Header user menu

> Menu shown in the right side of header, with the thumbnail 

## Examples
```vue
<bklo-c-menu-user displayName="John Doe" 
    :items="[{ 
        icon: 'far fa-user', 
        text: 'Profile', 
        action: () => alert('Edit profile clicked!') 
    }]" 
    :logout="() => $route.to('/')" 
    />
```

## Props
| Name | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| avatar | string | https://lorempixel.com/36/36/people | no | URL to avatar image. If empty, shown a random image from Lorempixel.com |
| displayName | string | null | no | User first name and/or last name (or anything else) |
| items | array | null | no | Other menu items |
| itemClass | string, array | null | Class for other menu items |
| logoutText | string | Logout | no | Input type field (eg. text, number, etc) |
| logoutClass | string, array | null | Class for logout link |
| logout | Function | null | yes | Function called when an user clicks on Logout link |

## Events
| Name | Params | Description |
|------|--------|-------------|
| opened | null | Fired when the user open the menu. |
| closed | null | Fired when the user close the menu. |

## Slots
| Name | Description |
|------|-------------|
| menu | Menu shown before logout link |
