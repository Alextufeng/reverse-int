module.exports = function reverse (n) {
    let result = '';
    
    while(n>0){
     result = result + (n%10);
     n = parseInt(n/10);
    }
    
    return result;
}

//console.log(reverse(n));
