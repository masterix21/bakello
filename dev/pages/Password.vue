<template>
    <BkloLayoutsPanelCenter>
        <BkloPassword :reset-url="'/password-change'" :submit="submit" @onSubmit="$router.push('/password-change')"></BkloPassword>
    </BkloLayoutsPanelCenter>
</template>

<script>
    import BkloLayoutsPanelCenter from '../../src/layouts/panel-center';
    import BkloPassword from '../../src/components/auth/password';

    export default {
        name: 'Password',
        components: {
            BkloPassword,
            BkloLayoutsPanelCenter,
        },
        methods: {
            submit () {
                return new Promise((resolve, reject) => {
                    resolve();
                });
            },
        },
    };
</script>

<style scoped>

</style>
