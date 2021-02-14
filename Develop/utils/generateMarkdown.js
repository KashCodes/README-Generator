
// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  <h1 align="center">${answers.projectTitle} </h1>
  
  <p align="center">
    ![badge](https://img.shields.io/badge/license-${answers.license}-success)
  </p>  
  <p align="center">
    <img src="https://img.shields.io/github/repo-size/${answers.username}/${answers.repoName}?style=plastic" />
    <img src="https://img.shields.io/github/languages/count/${answers.username}/${answers.repoName}?style=plastic" />
    <img src="https://img.shields.io/github/languages/top/${answers.username}/${answers.repoName}?style=plastic" />
    <img src="https://img.shields.io/github/last-commit/${answers.username}/${answers.repoName}?style=plastic" />
  </p>
  
  ## Description
  ❓ ${answers.description}

  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  🚨 ${answers.installation}

  ## Usage
  🚀 ${answers.usage}

  ## License
  ![badge](https://img.shields.io/badge/license-${answers.license}-success)
  <br />
  This application is covered by the ${answers.license} license.

  ## Contributors
  👥 ${answers.contributors}

  ## Tests
  ✏️ ${answers.tests}

  ## Questions
  🔧 ${answers.questions}<br />
    <br />
    :octocat: Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
    <br />
    📜 Feel free to email me with any questions: ${answers.email}<br /><br />

  `;
}



module.exports = generateMarkdown;
