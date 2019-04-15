<template>
    <div>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method="POST" action="../client.html">
            <div class="mb-4">
                <label class="block text-grey-darker text-sm font-bold">
                    Username
                    <input class="shadow appearance-none border rounded w-full mt-2 py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                            type="text" placeholder="Username" v-model="username">
                </label>
            </div>
            <div class="mb-6">
                <label class="block text-grey-darker text-sm font-bold">
                    Password
                    <input
                            class="shadow appearance-none border border-red rounded w-full mt-2 py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            type="password" placeholder="******************" v-model="password">
                </label>
                <p class="text-red text-xs italic">Please choose a password.</p>
            </div>
            <div class="flex items-center justify-between">
                <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Sign In
                </button>
                <a class="inline-block align-baseline font-bold text-sm text-grey-darker hover:text-blue-darker no-underline"
                   href="password.html">
                    Forgot Password?
                </a>
            </div>
        </form>
        <slot name="footer">
            <p class="text-center text-grey-darker text-xs">©2019 Luca Longo. All rights reserved.</p>
        </slot>
    </div>
</template>

<script>
    export default {
        name: "bklo-login",
        props: {
            loginUrl: { type: String, value: '' },
            resetUrl: String,
            submit: Promise
        },
        data: () => ({
            username: null,
            password: null,
        }),
    }
</script>
