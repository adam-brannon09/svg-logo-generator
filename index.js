//Import required modules
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const createShapes = require('./lib/createShapes');
const {isValidColorName, isValidRGB } = require('is-valid-css-color');


    

// Prompts for inquirer
const prompts =
    [
        { // Prompt for shape text
            type: 'input',
            name: 'letterChoice',
            message: 'What 3 letter would you like your shape to contain?',
            // Validate that the user entered 3 letters
            validate: function (letterChoice) {
                if (letterChoice.length !== 3) {
                    throw new Error('Please enter 3 letters');
                }
                return true;
            }
        },
        { // Prompt for text color
            type: 'input',
            name: 'textColor',
            message: 'What color or hexadecimal would you like your text to be?',
            // Validate that the user entered a color or hexadecimal
            validate: function (textColor) {
                if (!textColor) {
                    throw new Error('Please enter a color or hexadecimal');
                }
                // Check if the user entered a valid color name or hexadecimal
                if (isValidColorName(textColor) || isValidRGB(textColor)) {
                    return true;
                }

                throw new Error('Please enter a valid color or hexadecimal');
            }
        },
        { // Prompt for Shape selection
            type: 'list',
            name: 'shapeChoice',
            message: 'What shape would you like to create?',
            choices: ['Triangle', 'Square', 'Circle']
        },
        { // Prompt for shape color
            type: 'input',
            name: 'shapeColor',
            message: 'What color or hexadecimal would you like your shape to be?',
            validate: function (shapeColor) {
                if (!shapeColor) {
                    throw new Error('Please enter a color or hexadecimal');
                }
                if (isValidColorName(shapeColor) || isValidRGB(shapeColor)) {
                    return true;
                }
                throw new Error('Please enter a valid color or hexadecimal');
            }

        }

    ]

function writeToFile(filename, data) {
    fs.writeFile(filename, data, err => {
        if (err) {
            console.log(err);
        }
        console.log('Your logo has been created!');
    });
}
const writeFileAsync = util.promisify(writeToFile);
    
// Function that starts the application
async function init() {
    try {
        // Prompt the user for information
        const answers = await inquirer.prompt(prompts);
        const shapeFile = createShapes(answers);
        await writeFileAsync('logo.svg', shapeFile);
    } catch (err) {
        console.log(err);
    }
}

init();