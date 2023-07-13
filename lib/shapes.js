
// The shape class is the base class for all shapes.
// The constructor method takes a color parameter and assigns it to the fill color of the shape.
class Shape {
    constructor(color) {
        this.color = color;
    }
}
// The Triangle class extends the Shape class and inherits its properties and methods. The render method returns an SVG polygon element with the color attribute set to the color property of the Triangle instance.
class Triangle extends Shape {
    render() {
        return `<polygon fill= "${this.color}" height="100%" width="100%" points="0, 200 300, 200 150, 0"/>`;
    }
}
// The Square class extends the Shape class and inherits its properties and methods. The render method returns an SVG rectangle element with the color attribute set to the color property of the Square instance.
class Square extends Shape {
    render() {
        return `<rect fill= "${this.color}" x="0" y="0" width="100%" height="100%"/>`;
    }
}
// The Circle class extends the Shape class and inherits its properties and methods. The render method returns an SVG circle element with the color attribute set to the color property of the Circle instance.
class Circle extends Shape {
    render() {
        return `<circle fill= "${this.color}" cx="150" cy="100" r="80"/>`;

    }
}
// Export the classes
module.exports = { Triangle, Square, Circle };