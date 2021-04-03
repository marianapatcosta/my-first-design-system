export var plop = function (plop) {
    plop.setGenerator('component', {
        description: 'Create a component',
        // User input prompts provided as arguments to the template
        prompts: [
            {
                // Raw text input
                type: 'input',
                // Variable name for this input
                name: 'name',
                // Prompt to display on command line
                message: 'What is your component name?',
            },
        ],
        actions: [
            {
                // Add a new file
                type: 'add',
                // Path for the new file
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
                // Handlebars template used to generate content of new file
                templateFile: 'plop-templates/Component/Component.tsx.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
                templateFile: 'plop-templates/Component/Component.test.tsx.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.style.ts',
                templateFile: 'plop-templates/Component/Component.style.ts.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
                templateFile: 'plop-templates/Component/Component.stories.tsx.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.mdx',
                templateFile: 'plop-templates/Component/Component.stories.mdx.hbs',
            },
            {
                // Adds an index.js file if it does not already exist
                type: 'add',
                path: 'src/components/index.ts',
                templateFile: 'plop-templates/index.ts.hbs',
                // If index.js already exists in this location, skip this action
                skipIfExists: true,
            },
            {
                type: 'append',
                path: 'src/components/index.ts',
                template: "export * from './{{pascalCase name}}/{{pascalCase name}}';",
            },
        ],
    });
};
