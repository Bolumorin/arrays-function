// NUMBER 1 Difference between Mutating methods and non-mutating methods

// Mutating methods  are methods that modify the array they are called on. It means that these methods can add,delete or modify these existing elements in the array called on.
// Examples includes : pop(), unshift(), shift(), push(), splice().

//                  WHILE
// Non-mutating methods are those that don't modify the array they are called on. If you call a non-mutating array method , the original array will remain unchanged because these methods crearte a new array from the elements of the original array,but do not modify the original array. Non-mutataing methods are slower, but can be easier to understand and debug.               
// Examples are : slice(), map(), concat(), filter(), reduce() .

// NUMBER 2
let programmingLanguages = ['C#' , 'Javascript', 'Ruby', 'PHP', 'Python'];
    //  i
programmingLanguages.splice(5 ,0 , 'Kotlin');
console.log(programmingLanguages);

    //  ii
programmingLanguages.splice(3, 0, 'Java');
console.log(programmingLanguages);    

//     iii
programmingLanguages.splice(0,1);
console.log(programmingLanguages);

    //  iv
 programmingLanguages.splice(0, 0 , 'Scala', 'Swift');
 console.log(programmingLanguages);   
  
    //  v
 programmingLanguages.splice(5, 1, 'Go' , 'Rust');
 console.log(programmingLanguages);   

//   NUMBER 3
let fruit = ['apple', 'mango', 'banana'];
 function changeFruit(fruit) {
    fruit[2] = 'orange';
    return fruit;
 }

 console.log(fruit);

//  ANS is ['apple' ,'mango' , 'banana'] 

//  NUMBER 4
function maxNum(arr) {
    let max = arr[0];

    for(let i = 1; i < arr.length; i++) {
        if (arr[i] >max){
            max = arr[i];
        }
    }return 'Maximum value is '+ max;
}
 let arr = [8,15,67,55,31];
 console.log(maxNum(arr));

//  NUMBER 5
function valTimesIndex (val,index) {
    return result;
}
let numbers = [2,5,7]
let result = numbers.map((val,index) => val*index)
console.log(result);