// A digit product sequence is a type of sequence where the next number in the sequence is calculated by adding the product of each digit of the number and the number.
//For example:
//1, 2, 4, 8, 16, 22, 26, 38, 62
// The above are the first 9 numbers of the sequence.
// Write a function, digitProduct, that takes a number, n, as an argument and calculates the nth number in the sequence.
// digitProduct(3) // returns 4
// digitProduct(6) // returns 22
// digitProduct(9) // returns 62
// Implement it iteratively
// Implement it recursively
// Benchmark the results


console.time('benchmark');
console.time('benchmarkRec');
arr = []
start = 1;
for (let i = 1; i < 20; i++) {
   arr.push(start);
   start = number(start);
}

function number(n) {

   let result = 0;
   let m = parseInt(n);

   let arr = []
   let a = JSON.stringify(n).split('');
   for (let i = 0; i < a.length; i++) {
       if (i == 0)
           z = 1
       x = a[i]
       if (x == 0) {
           x = 1;
       }
       z *= x
   }
   if (n >= 10) {
       result = (z + n);
   } else {
       result = (n + n);
   }
   return result
}

//---------------------------
function digiProduct(index) {
   return arr[index - 1];
}

console.log(`The number is digiProduct:(9) => ${digiProduct(9)}`);
console.log(`The number is digiProduct:(10) => ${digiProduct(10)}`);
console.log(`The number is digiProduct:(11) => ${digiProduct(11)}`);
console.timeEnd('benchmark');

//----------------------------

function digiProductRec(n) {
   if (n == 1) {
       return n;
   } else {
       return number(digiProductRec(n - 1));
   }
}


console.log(`The number is digiProductRec:(6) => ${digiProductRec(6)}`);
console.log(`The number is digiProductRec:(7) => ${digiProductRec(7)}`);
console.log(`The number is digiProductRec: (8) => ${digiProductRec(8)}`);
console.timeEnd('benchmarkRec');


//----------------------------

console.log(`Digit Product Sequence: ${arr}`);
