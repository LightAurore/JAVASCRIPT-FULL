
const numberTool = {

    round: (value, precision) => {
        const nb = 10 ** precision;
        return Math.round(value * nb) / nb;
    }

};

module.exports = numberTool;

