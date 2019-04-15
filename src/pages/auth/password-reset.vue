<template>
    <div class="h-screen align-middle bg-grey">
        <div class="absolute pin flex items-center justify-center">
            <div class="w-full max-w-xs">
                <bklo-password-reset />
            </div>
        </div>
    </div>
</template>

<script>
    import BkloPasswordReset from "../../components/auth/password-reset";

    export default {
        name: "bklo-pages-password-reset",
        components: {
            BkloPasswordReset,
        },
    }
</script>

<style scoped>

</style>