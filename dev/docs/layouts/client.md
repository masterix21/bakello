# Client layout

> Client layout with header, sidebar and content.

## Examples
```vue
<bklo-l-client>
    <bklo-c-menu-user slot="user-menu" />
    <bklo-c-menu-sidebar slot="left-menu" />
    
    <div>Content :-)</div>
</bklo-l-client>
```

## Props
| Name | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| searchEmpty | string | Search... | no | Search text field placeholder |
| search | Function | null | no | Search function that will be executed on each search |
| sidebarClasses | string, array | Username | no | Username field label. |

## Slots
| Name | Description |
|------|-------------|
| user-menu | Menu shown in the right part of header |
| left-menu | Menu shown in the left part of client | 
| default | Content shown in the center part of client  |

