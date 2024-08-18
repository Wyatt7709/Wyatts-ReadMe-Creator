import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import generateMarkdown from './utils/generateMarkdown.js';

// Array of questions for user input
const questions = [
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
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
   
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
    default: 'npm install',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What are the usage instructions?',
    default: 'npm start',
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
    default: 'npm test',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license is your project under?',
    choices: ['MIT', 'Apache 2.0', 'GPL v3', 'BSD 3-Clause', 'None'],
  }
];

// Function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize the app
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      const markdown = generateMarkdown(answers);
      writeToFile('README.md', markdown);
      console.log('README.md has been generated successfully!');
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
}

// Function call to initialize the app
init();
