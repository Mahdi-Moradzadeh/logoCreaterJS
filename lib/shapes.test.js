const Shapes = require('./shapes.js');
const triangle = Shapes.triangle;
const circle = Shapes.circle;
const square = Shapes.square;

describe('triangle', () => {
    describe('constructor', () => {
        it('should create a new triangle object', () => {
            const newTriangle = new triangle('test', 'test', 'test');
            expect(typeof newTriangle).toBe('object');
        });
    });
    describe('logoCreater', () => {
        it('should return a string', () => {
            const newTriangle = new triangle('test', 'test', 'test');
            expect(typeof newTriangle.logoCreater('text','blue','red')).toBe('string');
        });
    });
    describe('logoCreater', () => {
        it('should return an exact', () => {
            const newTriangle = new triangle('test', 'test', 'test');
            expect(newTriangle.logoCreater('text','blue','red')).toEqual(`<svg version="1.1" width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">
        
        <polygon points="150, 18 244, 182 56, 182" fill="red" />
        
        <text x="150px" y="150px" font-size="60px" text-anchor="middle" fill="blue">TEXT</text>
        
        </svg>`);
        });
    });
});
describe('circle', () => {
    describe('constructor', () => {
        it('should create a new circle object', () => {
            const newCircle = new circle('test', 'test', 'test');
            expect(typeof newCircle).toBe('object');
        });
    });
    describe('logoCreater', () => {
        it('should return a string', () => {
            const newCircle = new circle('test', 'test', 'test');
            expect(typeof newCircle.logoCreater('text','blue','red')).toBe('string');
        });
    });
    describe('logoCreater', () => {
        it('should return an exact', () => {
            const newCircle = new circle('test', 'test', 'test');
            expect(newCircle.logoCreater('text','blue','red')).toEqual(`<svg version="1.1" width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">
        
        <circle cx="150px" cy="100px" r="80px" fill="red" />
        
        <text x="150px" y="125px" font-size="60px" text-anchor="middle" fill="blue">TEXT</text>
        
        </svg>`);
        });
    });
});
describe('square', () => {
    describe('constructor', () => {
        it('should create a new square object', () => {
            const newSquare = new square('test', 'test', 'test');
            expect(typeof newSquare).toBe('object');
        });
    });
    describe('logoCreater', () => {
        it('should return a string', () => {
            const newSquare = new square('test', 'test', 'test');
            expect(typeof newSquare.logoCreater('text','blue','red')).toBe('string');
        });
    });
    describe('logoCreater', () => {
        it('should return an exact', () => {
            const newSquare = new square('test', 'test', 'test');
            expect(newSquare.logoCreater('text','blue','red')).toEqual(`<svg version="1.1" width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">
        
        <rect x="75px" y="35px" height="150px" width="150px" fill="red" />
        
        <text x="150px" y="125px" font-size="60px" text-anchor="middle" fill="blue">TEXT</text>
        
        </svg>`);
        });
    });
});
