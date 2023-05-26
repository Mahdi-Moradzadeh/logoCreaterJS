class shape {
    constructor (text, textColour, colour, shape){
        this.cy = '100px';
        this.cx = '150px';
        this.r = '80px';
        this.polyPoints = '150, 18 244, 182 56, 182'; 
        this.rectX = '75px';
        this.rectY = '35px';
        this.rectHeight = '150px';
        this.rectWidth = '150px';
        this.textX = '150px';
        this.textY = '125px';
        this.textSize = '60px';
        this.textAnchor = 'middle';
        this.text = text;
        this.textColour = textColour;
        this.colour = colour;
        this.shape = shape;
        this.width = '300px';
        this.height = '200px';
    }
    triangleCreater (width, height, colour, text, textColour){
        return `<svg version="1.1" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        
            <polygon points="${this.polyPoints}" fill="${colour}" />
        
            <text x="${this.textX}" y="${this.textY}" font-size="${this.textSize}" text-anchor="${this.textAnchor}" fill="${textColour}">${text.toUpperCase()}</text>
    
        </svg>`;
    }
    circleCreater (width, height, colour, text, textColour){
        return `<svg version="1.1" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    
            <circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${colour}" />
    
            <text x="${this.textX}" y="${this.textY}" font-size="${this.textSize}" text-anchor="${this.textAnchor}" fill="${textColour}">${text.toUpperCase()}</text>
        
        </svg>`;
    }
    squareCreater (width, height, colour, text, textColour){
        return `<svg version="1.1" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        
            <rect x="${this.rectX}" y="${this.rectY}" height="${this.rectHeight}" width="${this.rectWidth}" fill="${colour}" />
        
            <text x="${this.textX}" y="${this.textY}" font-size="${this.textSize}" text-anchor="${this.textAnchor}" fill="${textColour}">${text.toUpperCase()}</text>
        
        </svg>`;
    }
    logoCreater (text, textColour, colour, shape, width, height){
        if (shape==='circle'){
            return this.circleCreater(width, height, colour, text, textColour);
        }
        else if (shape==='triangle'){
            return this.triangleCreater(width, height, colour, text, textColour);
        }
        else if (shape==='square'){
            return this.squareCreater(width, height, colour, text, textColour);
        }
    }
}

module.exports = shape;