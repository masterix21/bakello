<template>
    <BkloLayoutsPanelCenter>
      <BkloPasswordChange :login-url="'/'"></BkloPasswordChange>
    </BkloLayoutsPanelCenter>
</template>

<script>
    import BkloLayoutsPanelCenter from '../../src/layouts/panel-center';
    import BkloPasswordChange from '../../src/components/auth/password-change';

    export default {
        name: 'PasswordChange',
        components: {
            BkloPasswordChange,
            BkloLayoutsPanelCenter,
        },
        methods: {
            login () {
                return new Promise((resolve, reject) => {
                    resolve();
                });
            },
        },
    }
</script>
