//Import shape classes from shapes.js
const { Triangle, Square, Circle } = require('./shapes');

// Function to create the SVG file

function createShapes(answers) {
    // Create a new instance of the shape class based on the user's choice
    if (answers.shapeChoice === 'Triangle') {
        var createdShape = new Triangle(answers.shapeColor);

    } else if (answers.shapeChoice === 'Square') {
        var createdShape = new Square(answers.shapeColor);

    } else if (answers.shapeChoice === 'Circle') {
        var createdShape = new Circle(answers.shapeColor);

    } else {
        console.log('Something went wrong!');
    }
    // Return the SVG file
    return `
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${createdShape.render()} 
    <text x="50%" y="50%" text-anchor="middle" fill="${answers.textColor}" font-size="48px">${answers.letterChoice}</text>
    </svg>`;
}
//Export the createShapes function
module.exports = createShapes;