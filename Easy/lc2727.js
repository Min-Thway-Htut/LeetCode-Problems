var isEmpty = function(obj) {
    if(Object.keys(obj).length === 0 && obj.constructor === Object){
        return true;
    }else if (Array.isArray(obj)) {
        // For arrays, check if the length is 0
        return obj.length === 0;
    }else{
        return false;
    }
};