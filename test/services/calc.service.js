
const calcService = {
    
    // add: (v1, v2, ...vals) => {
    add: ( ...vals) => {

        if(vals.length < 2){
            throw new Error('Add must be have 2 numbers');
        }

        // let result = v1 + v2;
        let result = 0;

        for(const val of vals) {
            result = result + val;
        }
        return result;
    },

    sub: (v1, v2) => {
        return v1 - v2;
    },

    mul: (v1, v2) => {
        return v1 * v2;
    },

    div: (v1, v2) => {
        return v1 / v2;
    }
    


};


module.exports = calcService;