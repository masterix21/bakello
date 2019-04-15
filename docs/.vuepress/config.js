module.exports = {
  title: 'Backello',
  description: 'Just another backend built with Vue.js and Tailwind.css',
  themeConfig: {
    lastUpdated: 'Last Updated',
    repo: 'masterix21/backello',
    repoLabel: 'Github',
    docsRepo: 'masterix21/backello/docs',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      '/',
      {
        title: 'Components',
        //collapsable: false,
        children: [
          ['/components/login', 'Login'],
          ['/components/password', 'Password reset'],
          ['/components/password-change', 'Password change']
        ]
      },
      {
        title: 'Pages',
        //collapsable: true,
        children: [
          '/'
        ]
      },
    ]
  }
};
