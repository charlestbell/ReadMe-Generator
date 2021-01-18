const inquirer = require("inquirer");
const fs = require("fs");
const template = require("./template_readme");
const questions = require("./questions");

// array of questions for user

inquirer.prompt(questions.questionsList).then((response) => {
  const licenseLinks = {
    MIT: "https://opensource.org/licenses/MIT",
    BSD3clause: "https://opensource.org/licenses/BSD-3-Clause",
    Apache2: "http://www.apache.org/licenses/LICENSE-2.0",
    GPLv3: "https://www.gnu.org/licenses/gpl-3.0.html",
    GPLv2: "https://www.gnu.org/licenses/old-licenses/gpl-2.0.html",
  };
  response.licenseLink = licenseLinks[response.license];
  writeToFile(response);
});

// function to write README file
function writeToFile(response) {
  fs.writeFile("../Final Output/README.md", template.markdown(response), () => {
    console.log("Readme file created.");
  });
}
