<template>
    <div :class="['w-full shadow-md bg-white rounded-lg', ...cls]">
        <slot>Empty card</slot>
    </div>
</template>

<script>
    export default {
        name: "bklo-c-card",
        props: {
            cls: { type: [ String, Array ], default: () => ([]) }
        }
    }
</script>

<style scoped>

</style>
