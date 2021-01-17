const inquirer = require("inquirer");
const fs = require("fs");
const template = require("./template_readme");
const questions = require("./questions");

// array of questions for user

inquirer.prompt(questions.questionsList).then((response) => {
  const licenseLinks = {
    MIT: "someplace.net",
    BSD: "someplace.net",
    Apache2: "someplace.net",
  };
  response.licenseLink = licenseLinks[response.license];
  writeToFile(response);
});

// function to write README file
function writeToFile(response) {
  fs.writeFile("README.md", template.markdown(response), () => {
    console.log("Readme file created.");
  });
}
