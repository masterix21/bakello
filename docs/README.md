# Introduction

Bakello is another panel built with [Vue.js](https://vuejs.org) and [Tailwind.css](https://tailwindcss.com).

If you like our work, please offer us a beer :-)


# Installation

```bash
$ npm install bakello
``` 

Bakello uses:
- [Vuelidate](https://vuelidate.netlify.com/) component with [Vuelidate-error-extractor](https://dobromir-hristov.github.io/vuelidate-error-extractor/) to validate models
- [Axios](https://github.com/axios/axios) as HTTP client
- [Lodash](https://lodash.com/) for a better and stable code
- [FontAwesome](https://fontawesome.com/) to be beautiful and "iconized" :-P

Add it to Vue:
```javascript
import Vue from 'vue';
import Vuelidate from 'vuelidate';
import VuelidateErrorExtractor from 'vuelidate-error-extractor';

Vue.use(Vuelidate);
Vue.use(VuelidateErrorExtractor);
```
