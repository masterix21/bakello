# Auth - Login component

> This is the component that implements the login UI and logic. 

## Examples
```vue
<bklo-c-auth-login @onSuccess="alert('Welcome!')" />
```

## Props
| Name | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| usernameLabel | string | Username | no | Username field label. |
| usernameField | string | username | no | Username field name for submit data object. |
| usernameEmpty | string | Username | no | Username field placeholder. |
| passwordLabel | string | Password | no | Password field label. |
| passwordField | string | password | no | Password field name for submit data object. |
| passwordEmpty | string | ******** | no | Password field placeholder. |
| emptyFieldText | string | Field required. | no | Validation message shown when** a field is empty. |
| loginText | string | Sign In | no | Login button text. |
| loginUrl | string | /login | no | Login POST url: it will use standard Laravel login route by default. |
| resetText | string | Forgot Password? | no | Lost password link text. |
| resetUrl | string | null | no | Password lost url. If null, it will use standard Laravel password reset route. |
| submitClass | string, object | null | no | Submit button class |
| resetClass | string, object | null | no | Reset password link class |
| submit | Promise | null | no | Override component login submit function. |
| hideFooter | bool | false | no | Hide the component footer. |
| validations | object | { username: { required }, password: { required } } | no | Validate model using Vuelidate |

## Events
| Name | Params | Description |
|------|--------|-------------|
| onSubmit | data | Called when the submit button is clicked and there are no validation errors. |
| onInvalid | errors | Fired when the login process can't start for login validation errors. |
| onFails | errors | Fired when the login process fails. |
| onSuccess | data | Fired when the login process succeded. |

## Slots
| Name | Description |
|------|-------------|
| footer | Component below the login panel. Default value present a copyright. |

