const inquirer = require('inquirer');
const fs = require('fs');
const Shape = require('./lib/shapes.js');


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
        if (answers.shape === 'circle'){
            const newCircle = new Shape.circle(answers.text, answers.textColour, answers.colour);
            writetoFile('logo.svg', newCircle.logoCreater(answers.text, answers.textColour, answers.colour));
        }
        else if (answers.shape === 'triangle'){
            const newTriangle = new Shape.triangle(answers.text, answers.textColour, answers.colour);
            writetoFile('logo.svg', newTriangle.logoCreater(answers.text, answers.textColour, answers.colour));
        }
        else if (answers.shape === 'square'){
            const newSquare = new Shape.square(answers.text, answers.textColour, answers.colour);
            writetoFile('logo.svg', newSquare.logoCreater(answers.text, answers.textColour, answers.colour));
        }

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