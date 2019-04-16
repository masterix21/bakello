<template>
    <div class="h-screen align-middle bg-grey">
        <div class="absolute pin flex items-center justify-center">
            <div class="w-full max-w-xs">
                <bklo-password />
            </div>
        </div>
    </div>
</template>

<script>
import BkloPassword from '../../components/auth/password';

export default {
    name: 'bklo-pages-password',
    components: {
        BkloPassword,
    },
};
</script>

<style scoped></style>
