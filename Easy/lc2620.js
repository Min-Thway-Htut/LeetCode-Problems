var createCounter = function(n) {

    let k = n - 1;
    
    return function() {
        for(let i = 0; i < 3; i++){
            return k += 1;
        }
    };
};
