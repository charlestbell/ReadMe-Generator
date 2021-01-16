const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// const writeFileAsync = util.promisify(fs.writeFile);

const markdown = () =>
  `![GitHub](https://img.shields.io/github/license/charlestbell/ReadMe-Generator?color=%23cdd755&style=flat-square)
# Title <!-- omit in toc -->
--- 
### Table of Contents

- [Description](#description)
  - [Technologies Used](#technologies-used)
- [Installation](#installation)
- [How to use it](#how-to-use-it)
- [Credits](#credits)
- [How to contribute](#how-to-contribute)
- [Tests](#tests)
- [License](#license)

## Description

This is what the program does

___Technologies Used___
- Thing One
- Thing Two

___Motivation___


## Installation

This is how to install the program

## How to use it

Thiss how to make the program do the cool shit in the description.

### Credits
Developer: C.T. Bell
### How to contribute

### Tests


### License
Link to license
}
})

// function to initialize program
function init() {
writeToFile();
}

// function call to initialize program
init();
`;
// array of questions for user
// const questions = [
//   {
//     type: "input",
//     message: "What is your name?",
//     name: "name",
//   },
//   {
//     type: "input",
//     message: "What languages do you know?",
//     name: "languages",
//   },
//   {
//     type: "input",
//     message: "What is your preferred method of communication?",
//     name: "contactType",
//   },
// ];

// inquirer
//   .prompt(questions)
//   .then((response) =>
//     fs.appendFile(
//       "userInfo.txt",
//       `Name ${response.name}\nLanguage ${response.languages}\nPreferred Contact ${response.contactType}`,
//       (err) => (err ? console.error(err) : console.log("Commit logged!"))
//     )
//   );

// function to write README file
function writeToFile() {
  fs.writeFile("README.md", markdown(), () => {
    console.log("Readme file created.");
  });
}
writeToFile();

// promptUser()
//   .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
//   .then(() => console.log('Successfully wrote to index.html'))
//   .catch((err) => console.error(err));
