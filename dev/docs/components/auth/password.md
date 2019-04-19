# Auth - Password component

> This is the component that implements the password reset UI and logic. 

## Examples
```vue
<bklo-c-auth-password @onSuccess="alert('Please check your mailbox!')" />
```

## Props
| Name | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| emailLabel | string | E-mail | no | Email field label. |
| emailField | string | email | no | Email field name for submit data object. |
| emailEmpty | string | Your email address | no | Email field placeholder. |
| resetText | string | Reset password | no | Reset password button text. |
| resetUrl | string | /password/reset | no | Reset password POST url: it will use standard Laravel login route by default. |
| loginText | string | Sign In | no | Login button text. |
| loginUrl | string | /login | no | Login POST url: it will use standard Laravel login route by default. |
| submitClass | string, object | null | no | Submit button class |
| loginClass | string, object | null | no | Login link class |
| submit | Promise | null | no | Override component password reset submit function. |
| hideFooter | bool | false | no | Hide the component footer. |
| validations | object | { email: { required, email } } | no | Validate model using Vuelidate |


## Events
| Name | Params | Description |
|------|--------|-------------|
| onSubmit | data | Called when the submit button is clicked and there are no validation errors. |
| onInvalid | errors | Fired when the reset process can't start for login validation errors. |
| onFails | errors | Fired when the reset process fails. |
| onSuccess | data | Fired when the reset process succeded. |

## Slots
| Name | Description |
|------|-------------|
| footer | Component below the login panel. Default value present a copyright. |

