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
                title: 'Components',
                collapsable: false,
                children: [
                    ['/components/auth/login', 'Auth - Login'],
                    ['/components/auth/password', 'Auth - Password reset'],
                    ['/components/auth/password-change', 'Auth - Password change'],
                    ['/components/form/element', 'Form - Element'],
                    ['/components/menu/user', 'Menu - Header User'],
                    ['/components/menu/sidebar', 'Menu - Sidebar']
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
