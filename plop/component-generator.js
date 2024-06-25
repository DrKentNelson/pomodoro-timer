// plop/component-generator.js
module.exports = function (plop) {
    plop.setGenerator('component', {
        description: 'Cria um novo componente React com estrutura básica',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Qual é o nome do componente? (CamelCase)',
            validate: function (value) {
                if ((/([A-Z][a-z]+)+/).test(value)) { return true; }
                return 'O nome do componente deve estar em CamelCase!';
            },
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
