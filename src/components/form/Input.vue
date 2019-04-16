<template>
  <label class="block text-grey-darker text-sm font-bold">
    {{label}}
    <input :class="classes()"
           :type="type" :placeholder="placeholder" v-model="innerValue">
  </label>
</template>

<script>
export default {
  name: 'bklo-components-input',
  props: {
    label: String,
    type: { type: String, default: 'text' },
    placeholder: String,
    value: String,
    class: String,
    validations: { type: [ String, Array ] }
  },
  data: () => ({
    innerValue: null
  }),
  watch: {
    value (newValue) {
      if (newValue !== this.innerValue) {
        this.innerValue = newValue
      }
    }
  },
  methods: {
    classes () {
      let classes = 'shadow appearance-none border rounded w-full mt-2 py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline'

      return classes
    }
  },
  mounted () {
    this.innerValue = this.value
  }
}
</script>

<style scoped>

</style>
