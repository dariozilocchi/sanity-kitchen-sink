export default {
  widgets: [
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
                  buildHookId: '60f97c1c0ce08ef73d172a18',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-vtt4wva8',
                  apiId: '64f8d9ba-e827-48ae-be79-933cc7607354'
                },
                {
                  buildHookId: '60f97c1cc67ff7109b6d97fa',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-6f2oftr6',
                  apiId: '8c7f8ddc-1765-4d35-9d3f-b7b4b4662f8d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dariozilocchi/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-6f2oftr6.netlify.app', category: 'apps'}
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
