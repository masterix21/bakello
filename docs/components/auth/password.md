# Auth - Password component

> This is the component that implements the password reset UI and logic. 

## Examples
@TODO

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

## Events
| Name | Params | Description |
|------|--------|-------------|
| onSubmit | data | Called when the submit button is clicked and there are no validation errors. |
| onInvalid | errors | Fired when the reset process can't start for login validation errors. |
| onFails | errors | Fired when the reset process fails. |
| onResetted | data | Fired when the reset process succeded. |

## Slots
| Name | Description |
|------|-------------|
| footer | Component below the login panel. Default value present a copyright. |

