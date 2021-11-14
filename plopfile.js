/* eslint-disable */

module.exports = function (plop) {
  const COMPONENT_TYPES = ['base', 'module'];
  plop.setGenerator('component', {
    prompts: async (inquirer) => {
      const { type } = await inquirer.prompt({
        type: 'list',
        choices: COMPONENT_TYPES,
        name: 'type',
        message: 'Select Component type...',
      });

      const { name } = await inquirer.prompt({
        type: 'input',
        name: 'name',
        message: `Enter ${type} component name...`,
      });

      return Promise.resolve({
        type,
        name,
      });
    },
    actions: (data) => {
      console.log(data);

      const TEMPLATE_PATH = './templates/component';
      const COMPONENT_PATH = './src/components/{{type}}/{{name}}';
      const STORYBOOK_PATH = './storybook/stories/{{type}}';
      const actions = [
        {
          type: 'add',
          path: `${COMPONENT_PATH}/index.tsx`,
          templateFile: `${TEMPLATE_PATH}/index.tsx.hbs`,
        },
        {
          type: 'add',
          path: `${COMPONENT_PATH}/props.ts`,
          templateFile: `${TEMPLATE_PATH}/props.ts.hbs`,
        },
        {
          type: 'add',
          path: `${COMPONENT_PATH}/style.ts`,
          templateFile: `${TEMPLATE_PATH}/style.ts.hbs`,
        },
        {
          type: 'add',
          path: `${COMPONENT_PATH}/view.tsx`,
          templateFile: `${TEMPLATE_PATH}/view.tsx.hbs`,
        },
        {
          type: 'add',
          path: `${STORYBOOK_PATH}/{{pascalCase name}}.js`,
          templateFile: `${TEMPLATE_PATH}/story.js.hbs`,
        },
        {
          type: 'append',
          path: `${STORYBOOK_PATH}/index.js`,
          pattern: '/* PLOP_INJECT_IMPORT */',
          template: `require('./{{pascalCase name}}');`,
        },
      ];

      return actions;
    },
  });

  plop.setGenerator('svg', {
    prompts: async (inquirer) => {
      const { name } = await inquirer.prompt({
        type: 'input',
        name: 'name',
        message: `Enter SVG name...`,
      });

      return Promise.resolve({
        name,
      });
    },
    actions: (data) => {
      console.log(data);

      const TEMPLATE_PATH = './templates/svg';
      const COMPONENT_PATH = './src/components/base/SVG';
      const STORYBOOK_PATH = './storybook/stories/base';
      const actions = [
        {
          type: 'add',
          path: `${COMPONENT_PATH}/{{pascalCase name}}.tsx`,
          templateFile: `${TEMPLATE_PATH}/component.tsx.hbs`,
        },
        {
          type: 'append',
          path: `${COMPONENT_PATH}/index.tsx`,
          pattern: '/* PLOP_INJECT_IMPORT */',
          template:
            "export { default as {{pascalCase name}} } from './{{pascalCase name}}';",
        },
        {
          type: 'append',
          path: `${STORYBOOK_PATH}/SVG.js`,
          pattern: '/* PLOP_INJECT_IMPORT */',
          template: '  {{pascalCase name}},',
        },
        {
          type: 'append',
          path: `${STORYBOOK_PATH}/SVG.js`,
          pattern: '{/* PLOP_INJECT_INSTANCE*/}',
          template: `    <SVGWrapper label="{{pascalCase name}}">
      <{{pascalCase name}} fill="#000" />
    </SVGWrapper>`,
        },
      ];

      return actions;
    },
  });
};
