// console.log("hello world")

// /---------------------->>>>      01- find even number...
// filter method

// var arr  = [0,1,2,3,4,5,6,7,8,9,]
// var even =arr.filter(number => number % 2 == 0 )
// console.log(even);

// /-------- for loop method

// var array = [0, 1, 2, 3, 4, 5, 6, 7, 18, 9];
// for (var i = 0; i < array.length; i++) {
//   if (array[i] % 2 == 0) {
//     console.log(array[i]);
//   }
// }

// ///////////////////////////////////////////////////////
// / for each loop method

// var array = [ 1, 2, 3, 4, 5, 6, 7, 18, 9];
// for (num of array) {
//     if(num % 2 == 0){
//         console.log(num)
//     }
// }

////////////////
// for in loop

// var array = [ 1, 2, 3, 4, 5, 6, 7, 18, 9];
// for (num in array) {
//     if(num % 2 == 0){
//         console.log(num)
//     }
// }

// /--------------------------   02- find odd numbers...

// var arr  = [0,1,2,3,4,5,6,7,8,9,]
// var odd =arr.filter(number => number % 2 == 1 )
// console.log(odd);

// /----------------------------- 03- find fictorials...

// var num = 5;
// var f = 1;
// for (var i = 1; i <= num; i++) {
//   f = f * i;
//   console.log(f)
// }
// console.log(f);

// ---------------------------- 04- find minimum numbers

// var arr = [40,50,10,15,90,20]
// var min = Math.min.apply(null,arr);
// console.log(min)

// /------ ---------------------------    05- find 2nd minimum number...

// var arr = [40,50,10,15,90,20]
// var min = Math.min.apply(null,arr);
// console.log(min)
// arr.splice(arr.indexOf(min),1)
// var min2nd = Math.min.apply(null,arr);
// console.log(min2nd)

// /-----------------------------     06- find maximum number...

// var arr = [40,50,10,15,90,20]
// var max = Math.max.apply(null,arr);
// console.log(max)

// /-------------------------------      07- find 2nd maximum number...

// var arr = [40,50,10,15,90,20]
// var max = Math.max.apply(null,arr);
// console.log(max)
// arr.splice(arr.indexOf(max),1)
// console.log(Math.max.apply(null,arr))

// /---------------------          08- find average number...

// var list = [10, 90, 50, 40, 20];
// var sum = 0;
// for (var i = 0; i < list.length; i++) {
//   sum += list[i];
// }
// console.log(sum);
// var avg = sum/list.length
// console.log(avg)

// /---------------           09- ascending / descendig order...

// var list = [10, 90, 50, 40, 20];
// var ascend = list.sort();
// console.log(ascend)
// var desc = list.reverse();
// console.log(desc)

// //////////////////////////>>>

// var list= [1,2,3,4,5,6,7,8,9];
// var arr =[];
// for(var i=list.length-1; i>0 ;i--){
//         var values = list[i];
//         arr.push(values)
// }console.log(arr)

// //////////////////////////>>>
// bubble sorting>>>

// function ascending(array) {
//   var done = false;
//   while (!done) {
//     done = true;
//     for (var i = 1; i < array.length; i++) {
//       if (array[i - 1] > array[i]) {
//         done = false;
//         var tmp = array[i - 1];  
//         array[i - 1] = array[i]; 
//         array[i] = tmp;           
//       }
//     }
//   }
//   return array;
// }
// console.log(ascending([12, 10, 15, 11, 14, 13, 16]));

// /--------      10- find 2 consecutive same number from array

// var arr = [1,2,3,4,5,6,7,8,8,9,10]
// for (var i=1; i<arr.length; i++) {
//     if (arr[i] === arr[i-1]) {
//         console.log(`we have that same match = ${arr[i]}`);
//     }
// }

// /-------11- loop timeout

// for (let i = 1; i <= 5; i++) {
//     setTimeout( () => console.log(i), 0);
// }

// /------------------    12- callback method

// function sum(data) {
//     console.log("hello sum")
//     console.log("data= ",data);
// }
// function chil(){
//     console.log("hello chil")
// }
// function foo(a, b, gril,chiller ) {
//   var sum = a + b;
//   console.log("sum")
//   gril(sum);
//   chiller();
// }

// foo(5, 5, sum,chil)

// --------------------------           13- reverse method

// var arr = [1,2,3]
// var reverse = [];
// for(var i=arr.length -1 ;i>=0;i--){
//     var value = arr[i];
//     reverse.push(value)
// }
// console.log(reverse)

// /--------14- double name first letter capitalize...

// var city = "faisalabad tandaliyanwala";
// var arr = city.split(" ")
// for(var i=0;i<arr.length;i++){
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
// }
// var mainCity = arr.join(" ")
// console.log(mainCity);

// /----------------------------        15- swap numbars...

// var a = 5;
// var b =  9;
// [a,b] = [b,a]
// console.log(a+ " " +b)

// /////////////-----------

// let a = 1, b = 2;
// a = a ^ b;
// b = a ^ b; 
// a = a ^ b;
// console.log('a is now:', a);
// console.log('b is now:', b);

// /-----------------------          16- sum difference

// sumOfDifferences([2, 1, 10]) Returns 9
// Descending order: [10, 2, 1]
// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9    1 2 5 7 10

// seq = 1,2,5,7,10;
// 2-1 + 5-2 + 7-5 + 10-7= 1+3+2+3= 9

// let arr = [2, 1,5,7, 10];
// arr.sort((a,b) => b - a);
// let sum = 0;
// for (let i = 0; i < arr.length - 1; i++) {
//     sum += arr[i] - arr[i + 1];
// }
// console.log(sum);

// //////////////////----------

// function sumOfDifferences(arr) {
//   return arr
//   .sort((a, b) => b - a)
//   .reduce((total, curr, index, arre) => {
//       const next = arre[index + 1];
//       if (!isNaN(curr - next)) {
//         total += curr - next;
//       }
//       return total;
//     }, 0);
// }
// console.log(sumOfDifferences([10, 1, 2]));

///-----------------     17- find repeated/frequent words

// const arry = [1, 2, 1, 3, 4, 3, 5];
// const toFindDuplicates = (list) => list.filter((item, index) => list.indexOf(item) !== index)
// const duplicateElements = toFindDuplicates(arry);
// console.log(duplicateElements);

/////////////////////////////

// function toFindDuplicates(arry) {
//   const uniqueElements = new Set(arry);
//   const filteredElements = arry.filter((item) => {
//     if (uniqueElements.has(item)) {
//       uniqueElements.delete(item);
//     } else {
//       return item;
//     }
//   });
//   return filteredElements;
// }
// const duplicateElements = toFindDuplicates([1, 2, 1, 3, 3, 5,4,5]);
// console.log(duplicateElements);

///--------     18- top most repeat/frequent letter and count the repeat...

// var arr =[1,2,4,3,5,6,7,8,9,90];
// var mf = 0;
// var m = 0;
// var item;
// for (var i=0; i<arr.length; i++)
// {
//         for (var j=i; j<arr.length; j++)
//         {
//                 if (arr[i] == arr[j])
//                  m++;
//                 if (mf<m)
//                 {
//                   mf=m;
//                   item = arr[i];
//                 }
//         }
//         m=0;
// }
// console.log(item+" :: " +mf +" times ");

///------------------    19- Kth largest value in array...

// function K(arr, k) {
//         for (var i = 0; i < k; i++) {
//           var max_index = i,
//             tmp = arr[i];

//           for (var j = i + 1; j < arr.length; j++) {
//             if (arr[j] > arr[max_index]) {
//               max_index = j;
//             }
//           }
//           arr[i] = arr[max_index];
//           arr[max_index] = tmp;
//         }
//         return arr[k -1];
//       }
//       console.log(K([1,4,6,2,5], 4))

//////////////////////////////////////     20- fibonacci series

// const number = 5
// let n1 = 0, n2 = 1, nextTerm;
// console.log('Fibonacci Series:');
// for (let i = 1; i <= number; i++) {
//     console.log(n1);     //0, 1,1,2,3
//     nextTerm = n1 + n2;// 1,2, 3,5
//     n1 = n2;         //  1,1,2,3
//     n2 = nextTerm;    // 1,2,3,5
// }

////  result : 0,1,1,2

/////////////////////// 21- IIFY / IIFE //Immediately Invoked Function Expression

// (function() {
//     console.log("hello world")
// }) ()


// /////////////////////////////////////////////////////// testing


