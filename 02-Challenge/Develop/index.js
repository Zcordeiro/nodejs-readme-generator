// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const userPrompt = () => {
  return inquirer.prompt([
    {
        type: "input",
        name: "projectOwner",
        message: "Who owns this project? If none, skip or type N/A",
      },
    {
      type: "input",
      name: "projectName",
      message: "What is the project name?",
    },
    {
      type: "input",
      name: "projectDescription",
      message: "Give a brief description of the project.",
    },
    {
      type: "input",
      name: "projectSetup",
      message: "How is this project installed?",
    },
    {
      type: "input",
      name: "projectInstructions",
      message: "How does a user use this project?",
    },
    {
      type: "input",
      name: "projectCollab",
      message: 'List your collaborators, if any. If none, skip or type "N/A":',
    },
    {
      type: "list",
      name: "projectLicense",
      message: "Choose the license for this project:",
      choices: ["None", "Apache", "MIT", "Mozilla", "Eclipse", "The Unlicense"],
    },
    {
      type: "input",
      name: "test",
      message: 'Are there any tests needed to be run on this project?',
    },
    {
      type: "input",
      name: "projectQuestions",
      message: 'Are there any questions or unfinished information on this project?',
    },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log("Successfully created index.html!")
  );
}

// TODO: Create a function to initialize app
function init() {
  userPrompt().then((data) => {
    writeToFile("README.md", data);
  });
}

// Function call to initialize app
init();
