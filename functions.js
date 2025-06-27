// function summation(a,b,c){
//     let sum = 0;
//     for(let i=a; i<=b; i+=c){
//         sum = sum+i;
//     }
//     return sum;
// }

// console.log(summation(1,300,3))



// Sum of numbers in an Array
// -----------------------------------------

// function sumOfNumbers(numbers){
//     console.log(numbers)
//     let s = 0;
//     for (number of numbers){
//         console.log(number)
//         s = s + number;
//     }
//     return s;
// }

// let a  = [1,2,3,4,5,6];
// const sum = sumOfNumbers(a);
// console.log('Sum of numbers is', sum);


// return even and odd number from an array
// ----------------------------------------------------------

function evenOddSeparate(array){
    let a = [], b = [];
    for (number of array){
        if(number%2===0){
            a.push(number);
        }
        else{
            b.push(number);
        }
    }
    return {a,b}
}

arr = [1,2,3,4,5,6,7,8,9,10];
twoArray = evenOddSeparate(arr)
console.log(twoArray)

evensStr = twoArray.a.join(', ');
oddsStr = twoArray.b.join(', ');

console.log('Even numbers:',evensStr)
console.log('Even numbers:',oddsStr)
