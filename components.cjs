const { execSync } = require('child_process');

const componentNames = ['Header', 'Timer', 'Button', 'Input'];

componentNames.forEach(name => {
    try {
        execSync(`npx plop component ${name}`, { stdio: 'inherit' });
        console.log(`Componente ${name} criado com sucesso.`);
    } catch (error) {
        console.error(`Erro ao criar o componente ${name}:`, error);
    }
});
