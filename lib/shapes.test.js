// import { Triangle, Square, Circle } from './shapes';
const { Triangle, Square, Circle } = require('./shapes');

describe('Validate', () => {

    //Test triangles
    describe('Triangle test:', () => {
        it('Should render correctly.', () => {
            const shape = new Triangle();
            shape.color = 'red';
            expect(shape.render()).toEqual(`<polygon fill= "${shape.color}" height="100%" width="100%" points="0, 200 300, 200 150, 0"/>`);
        });
    })

    //Test Squares
    describe('Square test:', () => {
        it('Should render correctly.', () => {
            const shape = new Square();
            shape.color = 'green';
            expect(shape.render()).toEqual(`<rect fill= "${shape.color}" x="0" y="0" width="100%" height="100%"/>`);
        });
    });

    //Test Circles
    describe('Circle test:', () => {
        it('Should render correctly.', () => {
            const shape = new Circle();
            shape.color = 'yellow';
            expect(shape.render()).toEqual(`<circle fill= "${shape.color}" cx="150" cy="100" r="80"/>`);
        });
    });


});

