var isPalindrome = function(x) {
    const string = x.toString();
    const reversed_string = string.split('').reverse().join('');

    if(string === reversed_string){
        return true
    }else{
        return false
    }
};