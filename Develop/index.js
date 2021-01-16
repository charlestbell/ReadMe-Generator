const inquirer = require("inquirer");

const fs = require("fs");
// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "What languages do you know?",
    name: "languages",
  },
  {
    type: "input",
    message: "What is your preferred method of communication?",
    name: "contactType",
  },
];

inquirer
  .prompt(questions)
  .then((response) =>
    fs.appendFile(
      "userInfo.txt",
      `Name ${response.name}\nLanguage ${response.languages}\nPreferred Contact ${response.contactType}`,
      (err) => (err ? console.error(err) : console.log("Commit logged!"))
    )
  );

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  writeToFile();
}

// function call to initialize program
init();
