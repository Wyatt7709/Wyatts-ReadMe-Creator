import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';             
import Choices from 'inquirer/lib/objects/choices.js';

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
        default: 'npm install'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions:',  
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is your project under?',
        choices: ['MIT', 'Apache 2.0', 'GPL v3', 'BSD 3-Clause', 'None'],
        default: 'MIT'
    },

    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('README file generated successfully!');
        }
    });
}

// Function to generate README content based on user input
function generateReadme(answers) {
    return `
# ${answers.title}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## License
This project is licensed under the ${answers.license} license.

## Questions
If you have any questions, you can reach me at [${answers.email}](mailto:${answers.email}).
You can also find more of my work at [${answers.github}](https://github.com/${answers.github}).
`;
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const readmeContent = generateReadme(answers);
            writeToFile('README.md', readmeContent);
        })
        .catch((error) => {
            console.error('Error during prompt:', error);
        });
}

// Function call to initialize app
init();

