// recursion basic example

const recursion = (num) => {
     if (num == 0) return;

    console.log(num);
    num = num - 1;
    recursion(num);


}

let a = 5;
recursion(a);
