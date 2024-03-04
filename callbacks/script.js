//This function takes two parameters (a and b) and prints the sum of these two numbers to the console.
function sum(a,b){
console.log(a+b);
}
// This function takes three parameters (a, b, and sum). It calls the sum function, passing the values of a and b to it.
function calcu(a,b,sum){
    sum(a,b);
}
calcu(4,6,sum);
//This line of code calls the calcu function with the values 4, 6, and the sum function. As a result, it effectively calls sum(4, 6).

