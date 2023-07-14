const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document');

var circle = document.getElementById("circle");
var square = document.getElementById("square");
var triangle = document.getElementById("triangle");

const circle = require('./Assets/circle.svg');
const square = require('./Assets/square.svg')
const triangle = require('./Assets/triangle.svg')




const questions = [
    {
        type: "input",
        name: "charachter",
        message: "Input up to three characters.",
    },
    {
        type: "input",
        name: "color",
        message: "Input name of color or a hexadecimal number.",
        choices:["red, blue, green"]
    },
    {
        type: "input",
        name: "shape",
        message: "Input shape.",
        choices: ["circle, triangle, square"]
    },
    {
        type: "input",
        name: "shape color",
        message: "Input shape color or a hexadecimal number.",
        choices:["red, blue, green"]
    },
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Generated logo.svg")
  );
}
function init() {
    inquirer.prompt(questions)
    .then((awnsers) => {
        console.log(awnsers)
        const template = generateMarkdown(awnsers)
        console.log(template)
        writeToFile("./product/logo.svg", template )
    })
}


.then Text
.then text color 
.then color keyword

.then shape 
.then shapescolor 
.then color keyword

.then svg created named `logo.svg`
.then console.log("Generated logo.svg") 












function init() {
    inquirer.prompt(questions)
    .then((awnsers) => {
        console.log(awnsers)
        const template = generateMarkdown(awnsers)
        console.log(template)
        writeToFile("./Finished/readme.md", template )
    })
}