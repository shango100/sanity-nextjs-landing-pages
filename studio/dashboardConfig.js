export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '618391a81ae7da9286a1c588',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-g8thkr7h',
                  apiId: 'f7537345-b2ae-4fce-b7e0-2f37f7105705'
                },
                {
                  buildHookId: '618391a857bba7a7f00914fe',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-xfbj9wmk',
                  apiId: '3836f7b3-3db6-4602-903c-cfa4e8c1ee73'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shango100/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-xfbj9wmk.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
