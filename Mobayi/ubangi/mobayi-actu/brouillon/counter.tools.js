

function createCounter(){
    const counter = {
        value: 0
    };

    function increment(){
        counter.value++;
    }

    function decrement(){
        counter.value--;
    }

    function getCount(){
        console.log(`Current count ${counter.value}`);
    }

    return {
        increment, decrement, getCount
    }
}

module.exports = createCounter;