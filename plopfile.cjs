// plopfile.js
module.exports = function(plop) {
    plop.setGenerator('component', {
        description: 'Cria um novo componente React',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Digite o nome do componente (CamelCase):',
        }],
        actions: [{
            type: 'add',
            path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.jsx',
            templateFile: 'plop/templates/component.jsx.hbs',
        }, {
            type: 'add',
            path: 'src/components/{{pascalCase name}}/index.jsx',
            templateFile: 'plop/templates/index.jsx.hbs',
        }],
    });
};
