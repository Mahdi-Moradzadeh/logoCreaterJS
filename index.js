const inquirer = require('inquirer');
const fs = require('fs');
class Logo {
    constructor (text, colour,shape)
    {
        this.text = text;
        this.colour = colour;
        this.shape = shape;
        this.height = 300;
        this.width = 200;
    }
    logoCreater (text, colour,shape, height, width){
        return `<svg version="1.1" width=${width} height=${height} xmlns="http://www.w3.org/2000/svg">
        <${shape} cx="150" cy="100" r="80" fill=${colour} />
        <${text} x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
        </svg>`;
    }
}

// WHEN I am prompted for text
function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'What is the text for your logo?',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color would you like your text to be?',
        },
        {
            type: 'rawlist',
            name: 'shape',
            message: 'What shape would you like to use?',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color would you like your shape to be?',
        },
    ]);
}

const logoDesign = new Logo(promptUser.text,promptUser.colour,promptUser.shape);


fs.writeFile('logo.svg', 'utf8', (err) => {
    
    if (err) throw err;
    logoDesign.logoCreater();
    console.log('The file has been saved!');

});