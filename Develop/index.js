// TODO: Include packages needed for this application

//connect inquirer npm 
var inquirer = require('inquirer');

// connect generateMarkdown.js
var generateMarkdown = require('./utils/generateMarkdown');

// connect built in node file system
var fs = require('fs');

// connect path that is built into node
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
function promptUser(){
  return inquirer.prompt([
      {
        type: "input",
        name: "projectTitle",
        message: "What is the name of your project?",
      },
      {
        type: "input",
        name: "description",
        message: "Provide a summarized description of your project: ",
      },
      {
        type: "input",
        name: "installation",
        message: "Is there an installation process? Is so, please describe it: ",
      },
      {
        type: "input",
        name: "usage",
        message: "What usage is this project designed for?",
      },
      {
        type: "list",
        name: "license",
        message: "Choose the license used for your project: ",
        choices: [
          "Apache",
          "Academic",
          "GNU",
          "ISC",
          "MIT",
          "Mozilla",
          "Open"
        ]
      },
      {
        type: "input",
        name: "contributors",
        message: "Who contributed to this project?",
      },
      {
        type: "input",
        name: "tests",
        message: "Are there any tests to include?",
      },
      {
        type: "input",
        name: "questions",
        message: "If I have an issue, what should I do?",
      },
      {
        type: "input",
        name: "username",
        message: "Please provide your GitHub username: ",
      },
      {
        type:"input",
        name: "email",
        message: "Please provide your email: "
    }

  ]);
}

// Function using util.promisify
  async function init() {
    try{
      //Chain that asks questions and generates the responses
      const answers = await promptUser();
      const generateContent = generateMarkdown(answers);
      //Create name README.md to the dist directory
      await writeFileAsync("./dist/README.md", generateContent);
      console.log("✨README.md has been successfully created!✨")
    } catch(err) {
      console.log(err);
    }
  }

  init();