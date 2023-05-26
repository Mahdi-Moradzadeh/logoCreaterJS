const inquirer = require('inquirer');
const fs = require('fs');
const shape = require('./lib/shapes.js');

function promptUser() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'What is the text for your logo?'
        },
        {
            type: 'input',
            name: 'textColour',
            message: 'What color would you like your text to be?'
        },
        {
            type: 'rawlist',
            name: 'shape',
            message: 'What shape would you like to use?',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'colour',
            message: 'What color would you like your shape to be?'
        },
    ])
    .then((answers) => {
        const newShape = new shape(answers.text, answers.textColour, answers.colour, answers.shape);
        const svg = newShape.logoCreater(answers.text, answers.textColour, answers.colour, answers.shape, newShape.width, newShape.height);
        writetoFile(`logo.svg`,svg);
    });
}


function writetoFile (filename, data){
    fs.writeFile(filename, data, (err) => {
        if (err){
            throw err;
        }
        console.log('Generated logo.svg');
    });
}

promptUser();