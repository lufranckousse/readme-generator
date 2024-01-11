// TODO: Include packages needed for this application
// Inquirer (node package manager) import
const inquirer = require("inquirer");

// File system module (node package manager) import
const fs = require("fs");

const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
  // User name input
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  // User README title input
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  // User README description input
  {
    type: "input",
    message: "Add the description of your project:",
    name: "description",
  },
  // User README installation instructions input
  {
    type: "input",
    message: "Add the installation instructions of your project:",
    name: "installation",
  },
  // User README usage information input
  {
    type: "input",
    message: "Add the usage information of your project:",
    name: "usage",
  },
  // User README contribution guidelines input
  {
    type: "input",
    message: "Add the contribution guidelines of your project:",
    name: "contribution",
  },
  // User README test instructions input
  {
    type: "input",
    message: "Add the test instructions of your project:",
    name: "test",
  },
  // User README licensing options
  {
    type: "list",
    message: "Select the type of license you would like for your project:",
    choices: [
      "MIT",
      "Apache 2.0 License",
      "IBM Public License Version 1.0",
      "Mozilla Public License 2.0",
      "The Unlicense",
    ],
    name: "license",
  },
  // User github handle input
  {
    type: "input",
    message: "What is your GitHub handle?",
    name: "github",
  },
  // User email handle input
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const data = generateMarkdown(answers)
     writeToFile('README.md', data)
  });
}

// Function call to initialize app
init();
