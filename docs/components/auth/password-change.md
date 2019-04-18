# Auth - Password change component

> This is the component that implements the password change UI and logic. 

## Examples
@TODO

## Props
| Name | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| emailLabel | string | E-mail | no | Email field label. |
| emailField | string | email | no | Email field name for submit data object. |
| emailEmpty | string | Your email address | no | Email field placeholder. |
| passwordLabel | string | E-mail | no | Password field label. |
| passwordField | string | email | no | Password field name for submit data object. |
| passwordEmpty | string | Your email address | no | Password field placeholder. |
| confirmPasswordLabel | string | E-mail | no | Confirm password field label. |
| confirmPasswordField | string | email | no | Confirm password field name for submit data object. |
| confirmPasswordEmpty | string | Your email address | no | Confirm password field placeholder. |
| changeText | string | Change your password | no | Reset password button text. |
| changeUrl | string | /password/reset | no | Reset password POST url: it will use standard Laravel login route by default. |
| submit | Promise | null | no | Override component password change submit function. |
| hideFooter | bool | false | no | Hide the component footer. |
| validations | object | { email: { required, email }, password: { required, sameAs: sameAs('confirmPassword') }, confirmPassword: { required, sameAs: sameAs('password') } } | no | Validate model using Vuelidate |

## Events
| Name | Params | Description |
|------|--------|-------------|
| onSubmit | data | Called when the submit button is clicked and there are no validation errors. |
| onInvalid | errors | Fired when the reset process can't start for data validation errors. |
| onFails | errors | Fired when the reset process fails. |
| onPasswordChanged | data | Fired when the password change succeded. |

## Slots
| Name | Description |
|------|-------------|
| footer | Component below the login panel. Default value present a copyright. |

