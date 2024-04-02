// https://developer.mozilla.org/fr/docs/Web/API/MutationObserver

const targetNode = document.getElementById('root');

const config = { 
    attributes: true, 
    childList: true,
    characterData: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true
};

const callback = function(mutationsList) {
    for(var mutation of mutationsList) {
        console.log(mutation);
    }
};

const observer = new MutationObserver(callback);

observer.observe(targetNode, config);