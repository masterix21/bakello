# Login component

> This is the component that implements the login UI and logic. 

## Examples
*@TODO*

## Props
| Name | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| usernameLabel | string | Username | no | Username field label |
| usernameField | string | username | no | Username field name for submit data object |
| usernameEmpty | string | Username | no | Username field placeholder |
| passwordLabel | string | Password | no | Password field label |
| passwordField | string | password | no | Password field name for submit data object |
| passwordEmpty | string | ******** | no | Password field placeholder |
| emptyFieldText | string | Field required. | no | Validation message shown when** a field is empty |
| loginText | string | Sign In | no | Login button text |
| loginUrl | string | null | no | Login POST url. If null, it will use standard Laravel login route |
| resetText | string | Forgot Password? | no | Lost password link text |
| resetUrl | string | null | no | Password lost url. If null, it will use standard Laravel password reset route |
| submit | Promise | null | no | Override component login submit function. |


## Events
| Name | Params | Description |
|------|--------|-------------|
| onSubmit | data | Called when the submit button is clicked and there are no validation errors |
| onInvalid | errors | Fired when the login process can't start for login validation errors. |
| onFails | errors | Fired when the login process fails. | 
| onLogged | data | Fired when the login process succeded |

## Slots
| Name | Description |
|------|-------------|
| footer | Component below the login panel. Default value present a copyright. |

