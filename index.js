// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = ["Hi, what's your name?", "How are you?", "Can I get you a glass of water?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type : 'input',
            message : "Hi, what's your name?",
            name : "myName", 
        },
        {
            type : 'input',
            message : questions[1],
            name : "haalHavaal",
        },
        {
            type : 'list',
            message : "Can I get you a glass of water?",
            name : "isWater",
            choices : [ "yes", "no", "maybe"]
        }
    ])
}

// Function call to initialize app
init();
