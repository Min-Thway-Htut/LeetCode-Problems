var defangIPaddr = function(address) {
    let myString = address.replaceAll(/\./g,"[.]");
    return myString;
};