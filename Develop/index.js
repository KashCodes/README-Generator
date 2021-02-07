// TODO: Include packages needed for this application

//connect inquirer npm 
var inquirer = require('inquirer');

// connect generateMarkdown.js
var generateMarkdown = require('./utils/generateMarkdown');

// connect built in node file system
var fs = require('fs');

// connect path that is built into node
var path = require('path');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'How would you describe your project in a few words?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license are you using?',
    choices: ['MIT', 'BSD 3', 'GPL 3.0', 'Apache 2.0', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub Username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your e-mail address?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install dependancies?',
    default: 'npm i'
  },
  {
    type: 'input',
    name: 'test',
    message: 'How do you run tests?',
    default: 'npm test'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What are the instructions on how to use this app?',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'How to contribute?',
  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(fileName), data)
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then(answers => {
    console.log('Making README now.');
    writeToFile('README.md', generateMarkdown({...answers}));
  })
}

// Function call to initialize app
init();
