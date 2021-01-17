exports.questionsList = [
  {
    type: "input",
    message: "What is the project's title?",
    name: "title",
  },
  {
    type: "input",
    message: "Describe your project in a few sentences.",
    name: "description",
  },
  {
    type: "input",
    message: "What is a key technology in this project? (1 of 3)",
    name: "tech1",
  },
  {
    type: "input",
    message: "What is a key technology in this project? (2 of 3)",
    name: "tech2",
  },
  {
    type: "input",
    message: "What is a key technology in this project? (3 of 3)",
    name: "tech3",
  },
  {
    type: "input",
    message: "How do you install this project?",
    name: "installation",
  },
  {
    type: "list",
    message: "What open source license do you want to use?",
    name: "license",
    choices: ["MIT", "BSD", "Apache2"],
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message:
      "What is the name of the program's repository (use dashes between words)",
    name: "repoName",
  },
  {
    type: "input",
    message: "What is the name of the repository this",
    name: "installation",
  },
  {
    type: "input",
    message: "Give instructions on how to use this program.",
    name: "usage",
  },
  {
    type: "input",
    message: "Credits. Who worked on this project?",
    name: "credits",
  },
  {
    type: "input",
    message: "How do you run tests on this program to ensure it's working?",
    name: "tests",
  },
];
