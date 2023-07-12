const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const createShapes = require('./lib/createShapes');

// Prompts for inquirer
const prompts =
    [
        { // Prompt for shape text
            type: 'input',
            name: 'letterChoice',
            message: 'What 3 letter would you like your shape to contain?',
            // Validate that the user entered 3 letters
            validate: function (letterChoice) {
                if (letterChoice.length === 0 || letterChoice.length > 3) {
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
                if (isValidColorName(textColor) || isValidHexadecimal(textColor)) {
                    return true;
                }
                
                throw new Error('Please enter a valid color or hexadecimal');
            }
        },
        {
            type: 'list',
            name: 'shapeChoice',
            message: 'What shape would you like to create?',
            choices: ['Triangle', 'Square', 'Circle']
        },
        {


        }





]