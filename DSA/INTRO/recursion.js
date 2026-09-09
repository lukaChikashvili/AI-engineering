// recursion basic example

const recursion = (num) => {
     if (num == 0) return;

    console.log(num);
    num = num - 1;
    recursion(num);


}

let a = 5;
//recursion(a);


// sum of first n numbers
const sum = (n) => {
   if(n == 0) return 0;

   return n + sum(n-1);

}

//console.log(sum(10));

// factorial
const factorial = (n) => {
    if(n == 1) return 1;

   return n * factorial(n-1);

}



console.log(factorial(4));

// power of two -231. Power of Two

var isPowerOfTwo = function(n) {

    if(n == 1) return true;
    else if((n%2 != 0) || n < 1) return false;
     
     return isPowerOfTwo(n / 2);
};

console.log(isPowerOfTwo(n = 1))