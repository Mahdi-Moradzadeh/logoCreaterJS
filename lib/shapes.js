
class shape {
    constructor (text, textColour, colour){
        this.text = text;
        this.textColour = textColour;
        this.colour = colour;
        this.width = '300px';
        this.height = '200px';
        this.textX = '150px';
        this.textY = '125px';
        this.textSize = '60px';
        this.textAnchor = 'middle';
    }
}
        
class triangle extends shape {
    constructor (text, textColour, colour){
        super(text, textColour, colour);
        this.textY = '150px';
        this.polyPoints = '150, 18 244, 182 56, 182';
    }
    logoCreater (text, textColour, colour){
        return `<svg version="1.1" width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">
        
        <polygon points="${this.polyPoints}" fill="${colour}" />
        
        <text x="${this.textX}" y="${this.textY}" font-size="${this.textSize}" text-anchor="${this.textAnchor}" fill="${textColour}">${text.toUpperCase()}</text>
        
        </svg>`;
    }
}
class circle extends shape {
    constructor (text, textColour, colour){
        super(text, textColour, colour);
        this.cy = '100px';
        this.cx = '150px';
        this.r = '80px';
    }
    logoCreater (text, textColour, colour){
        return `<svg version="1.1" width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">
        
        <circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${colour}" />
        
        <text x="${this.textX}" y="${this.textY}" font-size="${this.textSize}" text-anchor="${this.textAnchor}" fill="${textColour}">${text.toUpperCase()}</text>
        
        </svg>`;
    }
}

class square extends shape {
    constructor (text, textColour, colour){
        super(text, textColour, colour);
        this.rectX = '75px';
        this.rectY = '35px';
        this.rectHeight = '150px';
        this.rectWidth = '150px';
    }
    logoCreater (text, textColour, colour){
        return `<svg version="1.1" width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">
        
        <rect x="${this.rectX}" y="${this.rectY}" height="${this.rectHeight}" width="${this.rectWidth}" fill="${colour}" />
        
        <text x="${this.textX}" y="${this.textY}" font-size="${this.textSize}" text-anchor="${this.textAnchor}" fill="${textColour}">${text.toUpperCase()}</text>
        
        </svg>`;
    }
}


module.exports = {
    triangle,
    circle,
    square
}