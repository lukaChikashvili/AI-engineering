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
    if(n == 1) return n;

   return n * factorial(n-1);

}



console.log(factorial(4));
