<template>
  <div class="h-screen align-middle bg-grey">
    <div class="absolute pin flex items-center justify-center">
      <div class="w-full max-w-xs">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'bklo-layouts-panel-center'
  }
</script>
