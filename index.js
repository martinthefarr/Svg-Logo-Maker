const inquirer = require('inquirer');
const {Circle} = require('./lib/shapes')
const {Triangle} = require('./lib/shapes')
const {Square} = require('./lib/shapes')

const fs = require('fs');


const questions = [
    {
        type: "input",
        name: "character",
        message: "Input up to three characters.", 
    },
    {
        type: "list",
        name: "color",
        message: "Input name of color or a hexadecimal number.",
        choices:["red", "blue", "green"]
    },
    {
        type: "list",
        name: "shape",
        message: "Input shape.",
        choices: ["circle", "triangle", "square"]
    },
    {
        type: "list",
        name: "shapecolor",
        message: "Input shape color or a hexadecimal number.",
        choices:["red", "blue", "green"]
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Generated logo.svg")
  );
}
function init() {
    inquirer.prompt(questions)
    .then((awnsers) => {
        console.log(awnsers)
        let logo;
        if (awnsers.shape === "circle"){
            logo = new Circle()
        }
        else if (awnsers.shape === "triangle"){
            logo = new Triangle()}
        
        else {logo = new Square()}
            
        
        logo.settext(awnsers.character)
        logo.setshapecolor(awnsers.shapecolor)
        logo.settextcolor(awnsers.color)

        const template = logo.render()
        console.log(template)
        writeToFile("./product/logo.svg", template )
    })
};

init()
// .then Text
// .then text color 
// .then color keyword

// .then shape 
// .then shapescolor 
// .then color keyword

// .then svg created named `logo.svg`
// .then console.log("Generated logo.svg") 











