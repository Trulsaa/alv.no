export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5f31a3dcd1005040f91adee7',
                  title: 'Sanity Studio',
                  name: 'alv-no-studio',
                  apiId: '5caa2628-398a-4ae3-95ad-7fef999c6df3'
                },
                {
                  buildHookId: '5f31a3dcea11bf2b01ad00f2',
                  title: 'Blog Website',
                  name: 'alv-no',
                  apiId: 'f1ed727b-5a86-49b6-8f88-63d6a609240f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Trulsaa/alv.no',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://alv-no.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
