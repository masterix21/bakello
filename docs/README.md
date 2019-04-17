# Introduction

Bakello is another panel built with Vue.js and Tailwind.css.

If you like our work, please offer us a beer :-)


# Installation

`npm install bakello` 

Bakello uses [Vuelidate](https://vuelidate.netlify.com/) component with [Vuelidate-error-extractor](https://dobromir-hristov.github.io/vuelidate-error-extractor/) to validate models.

Add it to Vue:
```javascript
import Vue from 'vue';
import Vuelidate from 'vuelidate';
import VuelidateErrorExtractor from 'vuelidate-error-extractor';

Vue.use(Vuelidate);
Vue.use(VuelidateErrorExtractor);
```
