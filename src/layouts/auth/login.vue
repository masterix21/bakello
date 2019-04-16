<template>
    <div class="h-screen align-middle bg-grey">
        <div class="absolute pin flex items-center justify-center">
            <div class="w-full max-w-xs">
                <bklo-login />
            </div>
        </div>
    </div>
</template>

<script>
import BkloLogin from '../../components/auth/login';

export default {
    name: 'bklo-pages-login',
    components: { BkloLogin },
    props: {
        loginUrl: { type: String, value: '' },
        resetUrl: String,
        submit: Promise,
    },
    data: () => ({
        username: null,
        password: null,
    }),
};
</script>
