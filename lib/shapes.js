
// The shape class is the base class for all shapes. It has a constructor that sets the color property to an empty string. It also has a setColor method that sets the color property to the value passed in as an argument.
class Shape {
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = 'color'
    }
}
// The Triangle class extends the Shape class and inherits its properties and methods. The render method returns an SVG polygon element with the color attribute set to the color property of the Triangle instance.
class Triangle extends Shape {
    render() {
        return `<polygon fill="${this.color}" points="200,100 100,300 300,300" />`
    }
}
// The Square class extends the Shape class and inherits its properties and methods. The render method returns an SVG rectangle element with the color attribute set to the color property of the Square instance.
class Square extends Shape {
    render() {
        return `<rect fill="${this.color}" x="100" y="100" width="200" height="200" />`
    }
}
// The Circle class extends the Shape class and inherits its properties and methods. The render method returns an SVG circle element with the color attribute set to the color property of the Circle instance.
class Circle extends Shape {
    render() {
        return `<circle fill="${this.color}" cx="200" cy="200" r="100" />`
    }
}

module.exports = { Triangle, Square, Circle };