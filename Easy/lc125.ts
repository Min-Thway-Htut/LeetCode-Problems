function isPalindrome(s: string): boolean {
    let firstString = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
   let secondString = firstString.split('').reverse().join('');

   if(firstString === " " || firstString === secondString){
       return true;
   }else{
       return false;
   }
};