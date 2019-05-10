module.exports = {
    title: 'Bakello',
    description: 'Just another backend built with Vue.js and Tailwind.css',
    themeConfig: {
        lastUpdated: 'Last Updated',
        repo: 'masterix21/bakello',
        repoLabel: 'Github',
        docsRepo: 'masterix21/bakello',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: 'Help us to improve this page!',
        nav: [
            { text: 'Home', link: '/' },
        ],
        sidebar: [
            '/',
            {
                title: 'Auth',
                collapsable: false,
                children: [
                    ['/components/auth/login', 'Login'],
                    ['/components/auth/password', 'Password reset'],
                    ['/components/auth/password-change', 'Password change'],
                ]
            },
            {
                title: 'Form',
                collapsable: false,
                children: [
                    ['/components/form/element', 'Element'],
                    ['/components/form/radio', 'Radio'],
                ]
            },
            {
                title: 'Menu',
                collapsable: false,
                children: [
                    ['/components/menu/user', 'Header User'],
                    ['/components/menu/sidebar', 'Sidebar'],
                ]
            },
            {
                title: 'Other',
                collapsable: false,
                children: [
                    ['/components/card', 'Card'],
                    ['/components/table', 'Table']
                ]
            },
            {
                title: 'Pages',
                collapsable: false,
                children: [
                    '/',
                ],
            },
        ],
    },
};
