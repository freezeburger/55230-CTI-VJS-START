module.exports = function (plop) {
  plop.setHelper('pascalCase', text => text.charAt(0).toUpperCase() + text.slice(1))

  const componentTypes = [
    {
      type: 'ui',
      path: 'src/components/ui',
      suffix: '',
      templates: [
        {
          path: '{{pascalCase name}}.vue',
          template: 'ui.hbs'
        }
      ]
    },
    {
      type: 'layout',
      path: 'src/components/layouts',
      suffix: 'Layout',
      templates: [
        {
          path: '{{pascalCase name}}.vue',
          template: 'layout.hbs'
        }
      ]
    },
    {
      type: 'view',
      path: 'src/views',
      suffix: 'View',
      templates: [
        {
          path: '{{pascalCase name}}.vue',
          template: 'view.hbs'
        }
      ]
    }
  ]

  componentTypes.forEach(({ type, path, suffix, templates }) => {
    plop.setGenerator(type, {
      description: `Create a ${type} component`,
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: `Component name (without suffix '${suffix}')`
        }
      ],
      actions: [
        ...templates.map(t => ({
          type: 'add',
          path: `${path}/${t.path}`,
          templateFile: `templates/${t.template}`
        })),
        {
          type: 'append',
          path: `${path}/index.ts`,
          pattern: /(\/\/ PLOP_INSERT_MARKER)/g,
          template: `export { default as {{pascalCase name}}${suffix} } from './{{pascalCase name}}${suffix}.vue'`
        }
      ]
    })
  })

  // Container component with extra files
  plop.setGenerator('container', {
    description: 'Create a container component with hook and index file',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Container component name'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/containers/{{pascalCase name}}/index.ts',
        templateFile: 'templates/container-index.hbs'
      },
      {
        type: 'add',
        path: 'src/components/containers/{{pascalCase name}}/{{pascalCase name}}.vue',
        templateFile: 'templates/container.hbs'
      },
      {
        type: 'add',
        path: 'src/components/containers/{{pascalCase name}}/use-logic.hook.ts',
        templateFile: 'templates/container-hook.hbs'
      }
    ]
  })
}
