const calcService = require("../services/calc.service.js");


describe('Calc Service', ()=> {


    // test('Hello World', () => {
    //     expect(true).toBe(true)
    // });


    // test('Hello World', () => {
    //     expect(false).toBe(true)
    // });


    // test('Hello World', () => {
    //     expect(true).toBeNull()
    // });


    describe('Addition', () => {

        test('Two number', () => {
            
            // Arrange
            const nb1 = 2;
            const nb2 = 3;
            const expected = 5;

            // Action
            const actual = calcService.add(nb1, nb2);
            
            // Asset
            expect(actual).toBe(expected);
        });


        test('Five number', () => {

            // Arrange
            const nb1 = 5;
            const nb2 = 3;
            const nb3= 45;
            const nb4 = -6;
            const nb5 = 7;
            const expected = 54;

            // Action
            const actual = calcService.add(nb1, nb2, nb3, nb4, nb5);
            
            // Assert
            expect(actual).toEqual(expected);
        });

        test('Error if less 2 number', () =>{

            // Arrange
            const nb1 = 18;

            // Action + Assert
            expect(() => {
                // zone qui doit provoquer une erreur
                calcService.add(nb1);
            }).toThrow('Add must have 2 numbers');
        })

    })

    



});