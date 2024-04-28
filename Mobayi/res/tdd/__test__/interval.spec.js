const intervalToObj = require("../function/interval-to-obj");


describe('', () => {

    it('should handle seconds', () => {
        const a = intervalToObj(15 * 1000);

        expect(a).toEqual({
            days: 0,
            hours : 0,
            minutes : 0,
            seconds : 15
        })
    })

    it('should handle minutes', () => {
        const a = intervalToObj(3 * 60 * 1000 + 15 * 1000);

        expect(a).toEqual({
            days: 0,
            hours : 0,
            minutes : 3,
            seconds : 15
        })
    })

    it('should handle hours', () => {
        const a = intervalToObj(15 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000 + 3 * 60 * 1000 + 15 * 1000);

        expect(a).toEqual({
            days: 15,
            hours : 3,
            minutes : 3,
            seconds : 15
        })
    })

})