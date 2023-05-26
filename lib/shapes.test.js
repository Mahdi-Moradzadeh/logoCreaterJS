const { describe } = require('node:test');
const Shapes = require('./shapes.js');

describe('Shapes', () => {
    describe('constructor', () => {
        it('should create a new shape object', () => {
            const newShape = new Shapes('text', 'textColour', 'colour', 'shape');
            expect(newShape).toBeInstanceOf(Shapes);
        });
    });

    describe('triangleCreater', () => {
        it('should create a triangle', () => {
            const text = 'text';
            const textColour = '#ffffff';
            const colour = '#000000';
            const shape = 'triangle';
            const newShape = new Shapes(text, textColour, colour, shape);
            expect(newShape.triangleCreater(newShape.width,newShape.height,newShape.colour,newShape.text,newShape.textColour)).toBe('<svg version="1.1" width="width" height="height" xmlns="http://www.w3.org/2000/svg"><polygon points="150,0 0,150 300,150" fill="colour" /><text x="150px" y="125px" font-size="60px" text-anchor="middle" fill="textColour">TEXT</text></svg>');
        });
    });

    describe('circleCreater', () => {
        it('should create a circle', () => {
            const text = 'text';
            const textColour = '#ffffff';
            const colour = '#000000';
            const shape = 'circle';
            const newShape = new Shapes(text, textColour, colour, shape);
            expect(newShape.circleCreater(newShape.width,newShape.height,newShape.colour,newShape.text,newShape.textColour)).toBe('<svg version="1.1" width="width" height="height" xmlns="http://www.w3.org/2000/svg"><circle cx="150px" cy="100px" r="80px" fill="colour" /><text x="150px" y="125px" font-size="60px" text-anchor="middle" fill="textColour">TEXT</text></svg>');
        });
    });

    describe('squareCreater', () => {
        it('should create a square', () => {
            const text = 'text';
            const textColour = '#ffffff';
            const colour = '#000000';
            const shape = 'square';
            const newShape = new Shapes(text, textColour, colour, shape);
            expect(newShape.squareCreater(newShape.width,newShape.height,newShape.colour,newShape.text,newShape.textColour)).toBe('<svg version="1.1" width="width" height="height" xmlns="http://www.w3.org/2000/svg"><rect x="75px" y="35px" height="150px" width="150px" fill="colour" /><text x="150px" y="125px" font-size="60px" text-anchor="middle" fill="textColour">TEXT</text></svg>');
        });
    });

    describe('logoCreater', () => {
        it('should create a logo', () => {
            const text = 'text';
            const textColour = '#ffffff';
            const colour = '#000000';
            const shape = 'triangle';
            const newShape = new Shapes(text, textColour, colour, shape);
            expect(newShape.logoCreater(newShape.text,newShape.textColour,newShape.colour,newShape.shape,newShape.width,newShape.height)).toBe('<svg version="1.1" width="width" height="height" xmlns="http://www.w3.org/2000/svg"><polygon points="150,0 0,150 300,150" fill="colour" /><text x="150px" y="125px" font-size="60px" text-anchor="middle" fill="textColour">TEXT</text></svg>');
        });
    });
});