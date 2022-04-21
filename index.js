// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const genMDjs = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
  "ENTER PROJECT TITLE:",
  "ENTER PROJECT DESCRIPTION",
  "ENTER INSTALLATION INSTRUCTIONS",
  "ENTER USAGE INFORMATION",
  "ENTER CONTRIBUTION GUIDELINES",
  "ENTER TEST INSTRUCTIONS",
  "CHOOSE A LICENSE",
  "ENTER YOUR GITHUB USERNAME",
  "ENTER YOUR EMAIL ADDRESS",
];

function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: questions[0],
        name: "title",
        validate: (inputvalue) => {
          if (inputvalue) {
            return true;
          } else {
            console.log(" PLEASE ENTER A VALID TITLE");
            return false;
          }
        },
      },
      {
        type: "input",
        message: questions[1],
        name: "projectDescription",
        validate: (inputvalue) => {
          if (inputvalue) {
            return true;
          } else {
            console.log(" PLEASE ENTER A VALID DESCRIPTION");
            return false;
          }
        },
      },
      {
        type: "input",
        message: questions[2],
        name: "installation",
        validate: (inputvalue) => {
          if (inputvalue) {
            return true;
          } else {
            console.log(" PLEASE ENTER VALID INSTRUCTIONS");
            return false;
          }
        },
      },
      {
        type: "input",
        message: questions[3],
        name: "usage",
        validate: (inputvalue) => {
          if (inputvalue) {
            return true;
          } else {
            console.log(" PLEASE ENTER VALID INSTRUCTIONS");
            return false;
          }
        },
      },
      {
        type: "input",
        message: questions[4],
        name: "contribution",
        validate: (inputvalue) => {
          if (inputvalue) {
            return true;
          } else {
            console.log(" PLEASE ENTER ALL CONTRIBUTOR NAMES");
            return false;
          }
        },
      },
      {
        type: "input",
        message: questions[5],
        name: "testing",
        validate: (inputvalue) => {
          if (inputvalue) {
            return true;
          } else {
            console.log(" PLEASE ENTER A GUIDE FOR TESTING");
            return false;
          }
        },
      },
      {
        type: "list",
        message: questions[6],
        name: "license",
        choices: [
          "MIT",
          "Boost software license 1.0",
          "APACHE 2.0",
          "Eclipse Public License 1.0",
          "No license",
        ],
      },
      {
        type: "input",
        message: questions[7],
        name: "git",
        validate: (inputvalue) => {
          if (inputvalue) {
            return true;
          } else {
            console.log(" PLEASE ENTER A VALID USERNAME");
            return false;
          }
        },
      },
      {
        type: "input",
        message: questions[8],
        name: "email",
        validate: (inputvalue) => {
          if (inputvalue) {
            return true;
          } else {
            console.log(" PLEASE ENTER A VALID EMAIL");
            return false;
          }
        },
      },
    ])
    .then(function (answers) {
      console.log(answers);
      renderLicenseBadge(answers);
    });
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app

// Function call to initialize app
init();
