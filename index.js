// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = ["ENTER PROJECT TITLE:", "ENTER PROJECT DESCRIPTION", "ENTER INSTALLATION INSTRUCTIONS", "ENTER USAGE INFORMATION", "ENTER CONTRIBUTION GUIDELINES", "ENTER TEST INSTRUCTIONS", "CHOOSE A LICENSE", "ENTER YOUR GITHUB USERNSME", "ENTER YOUR EMAIL ADDRESS"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type : 'input',
            message : questions[0],
            name : "title", 
        },
        {
            type : 'input',
            message : questions[1],
            name : "projectDescription",
        },
        {
            type : 'input',
            message : questions[2],
            name : "installation",
        },
        {
            type : 'input',
            message : questions[3],
            name : "usage",
        },
        {
            type : 'input',
            message : questions[4],
            name : "contribution",
        },
        {
            type : 'input',
            message : questions[5],
            name : "testing",
        },
        {
            type : 'list',
            message : questions[6],
            name : "license",
            choices : [ "MIT", "Artistic 2.0", "APACHE 2.0", "Bsl-1.0", "No license"]
        },
        {
            type : 'input',
            message : questions[7],
            name : "git",
        },
        {
            type : 'input',
            message : questions[8],
            name : "email",
        }
    ]).then(function(message) {
        console.log(message);
        return message;
    })
}

// Function call to initialize app
init();
