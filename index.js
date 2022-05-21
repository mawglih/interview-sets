// file with differeent js tasks

const arrayofProducts = [
    {id: '2100', name: 'item A', price: 50, quantity: 2}
]


const discountsID = [ {id:2100, func: 'discountA'}, 3300, 4400];
function discountA(quantity, spPrice, price) {
    if(quantity > 1) {
        let discountedProds = Math.floor(quantity / 2 ) * spPrice + quantity%2 * price;
        return discountedProds;
    }
    return price;
  
}
function discountB(quantity, price) {
    let total = 0;
    let count = Math.floor(quantity / 3)
    total = price * 2 * count;
    let res = quantity % 3;
    total += res * price;
    return total;

}
function discountC(quantity, price, beta, num){}
function calcPrice(cart) {
    let cartWithDiscounts = [];
    let cartWithoutDiscounts = [];
    for( let i = 0; i < cart.length; i++) {
        if(discountsId.includes(cart[i].id)) { 
            cartWithDiscounts.push(cart[i]);
            //CALCULATE DISCOUNT
        } else {
            // Calculaet regular products
            cartWithoutDiscounts.push(cart[i]);
        }
    }
    let price1  = calculateWithDiscounts(cartWithDiscounts);
    let price2 = calculateWithoutDiscounts(cartWithoutDiscounts);
    return price1 +  price2;
}

function calculateWithoutDiscounts(arr) {
    let price = 0;
    for(let i = 0; i < arr.length; i++) {
        let ItemPrice = arr[i].price * arr[i].quantity;
        price += ItemPrice;
    }
    return price;
}
const discounts = [
    {id: 2100, type: 3},
    {id: 3100, type: 2},
    {id: 4100, type: 3},

]

function calculateWithDiscounts(arr) {
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
        let currItem = discounts.find(item => item.id === arr[i].id);
        if( currItem.type === 1){
            let price = discountA(arr[i].quantity, 70, arr[i].price);
            total += price;
        }
        if(arr[i].id === 3100) {
            let price = discountB(arr[i].quantity, arr[i].price)
            total += price;
        }
    }
    return total;
}


// const students = [
//     {
//         name: 'MaryAnn',
//         results: [
//             {id: '345', score: '56'},
//             {id: '478', score:'69.4'},
//             {id: '00345', score: '8.9'},
//             {id: '312334', score: '99.3'}
//         ]
//     },
//     {
//         name: 'Peter',
//         results: [
//             {id: '345', score: '56.1'},
//             {id: '478', score:'64'},
//             {id: '00345', score: '80'},
//             {id: '312334', score: '16'}
//         ]
//     },
//     {
//         name: 'Joseph',
//         results: [
//             {id: '345', score: '37'},
//             {id: '478', score:'98.23'},
//             {id: '00345', score: '21'},
//             {id: '312334', score: '57.43'}
//         ]
//     },
// ];

// // min, max, average in obj

// function findResult(name) {
//     let scores = students.find(student => student.name === name).results.map(item => parseFloat(item.score), 2);
//     const obj = {};
//     obj.min = Math.min(...scores).toFixed(2);
//     obj.max = Math.max(...scores).toFixed(2);
//     obj.average = (scores.reduce((acc, num) => acc + num, 0) / scores.length).toFixed(2);
//     return obj;
// }

// console.log(findResult('MaryAnn'));
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// function solution(today, limit) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     today = new Date(today);
//     let table = document.querySelector('table');
//     let count = 0;
//     let rowCount = table.rows.length;
//     console.log(rowCount)
//     for(let i = 0; i < rowCount; i++) {
//         let row = table.rows[i];
//         let rowColorStyle = row.style.backgroundColor;
//         let returned = table.rows[i].cells[2];
//         if(returned.innerHTML) {
//             if(rowColorStyle==='red') {
//                 count++;
//                 console.log('++++++++++++++++++++++++')
//                 console.log(count)
//                 console.log('returned but red, index: ', i);
//                 console.log('++++++++++++++++++++++++')
//             }

//         } else {
//             let returnDate = addDays(table.rows[i].cells[1].innerHTML, limit);
//             if(today > returnDate && !(rowColorStyle==='red')) {
//                 count++;
//                 console.log('++++++++++++++++++++++++')
//                 console.log(count)
//                 console.log('not returned but red, index: ', i);
//                 console.log('++++++++++++++++++++++++')
//             }
//         }
//     }
//     return count;
// }


// function addDays(date, days) {
//     let result = new Date(date);
//     result.setDate(result.getDate() + days);
//     return result;
// }

//   console.log(solution('2016-10-11', 10));

// console.log(Math.floor(Date.now(2012-03-14) / 1000))
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// function solution(S) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     const obj = {};
//     for(let char of S) {
//         if(obj[char]) {
//             return char
//         } else {
//             obj[char] = 1
//         }
//     }
// }
// var table = document.getElementsByTagName('table');
// for (var r = 0, n = table.rows.length; r < n; r++) {
//     for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
//         console.log(table.rows[r].cells[c].innerHTML);
//     }
// }

// function charMap (str) {
//     const obj = {};
//     for(let char of str) {
//       obj[char] ? obj[char]++ : obj[char] = 1
//     }
//     return obj;
//   }
1634243591
1634243611
//   console.log(solution('codilitu'))
// function changeToZeros(arr) {
//   let indexi;
//   let indexj;
//   for(let i = 0; i < arr.length; i++) {
//       for(let j = 0; j < arr[i].length; j++) {
//           if(arr[i][j] === 0) {
//               indexj = j;
//               indexi = i;
//           }
//       }
//   }
//   for(let i = 0; i < arr.length; i++) {
//       if(i === indexi) {
//         console.log(arr[i])
//         arr[i] = arr[i].map(item => item = 0);
//       } else {
//         arr[i][indexj] = 0;
//       }   
//   }
//   console.log('arr', arr);
//   console.log('indx', indexi)
//   return arr;
// }

// const arr4 = [
//   [1,2,3,4],
//   [3,2,0,4],
//   [3,4,5,7],
//   [1,2,1,2]
// ]
// console.log(changeToZeros(arr4));


// function solution(N) {
//     let arr = [];
//     if(N === 1) {
//         return [0];
//     }
//     console.log('arr1', arr)
//     if(N % 2 !== 0) {
//         console.log('arr2', arr)
//         arr.push(0);
//         console.log('arr1', arr)
//     }
//     for( let i = 0; i <= N / 2; i++) {
//         console.log('arr13', arr)
//         arr.push(i, i * -1);
//         console.log('arr4', arr)
//     }
//     console.log('arr', arr)
//     return arr;
//     // write your code in JavaScript (Node.js 8.9.4)
// }
// console.log(solution(4));


// export default function LoginForm({ onSubmit }) {
//     const usernameRef = React.useRef();
//     const passwordRef = React.useRef();
//     const handleSubmit = e => {
//         e.preventDefault();
//         const data = {
//             username: usernameRef.current.value,
//             password: passwordRef.current.value
//         };
//         onSubmit(data);
//     };
//     return (
//       <form onSubmit={handleSubmit} >
//           <label>Username
//           <input
//             name="username"
//             type="text"
//             id="username-input"
//             ref={usernameRef}
//             onChange={e => onChange(e)}
//           />
//         </label>
//         <label>Password
//           <input
//             name="password"
//             type="password"
//             id="password-input"
//             ref={passwordRef}
//             onChange={e => onChange(e)}
//           />
//         </label>
//           <button disabled={!usernameRef.current.value && !passwordRef.current.value} type="submit">Submit</button>
//       </form>
//     );
// };
// function solution(A) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     const arr = A.sort((a, b) => a - b);
//     console.log('arr', arr);
//     let current = arr[0];
//     let index = 1;
//     while(current != arr[arr.length -1]) {
//         if(arr[index] - current > 1) {
//             if(current + 1  > 0) {
//                 return current + 1;
//             } else {
//                 return 1
//             }
            
//         } else {
//             current = arr[index];
//             index++;
//         }
//     }
//     if(arr[arr.length - 1] > 0) {
//         return arr[arr.length - 1] + 1;
//     } else {
//         return 1;
//     }
// }

// function solution2(A) {
//     // only positive values, sorted
//     A = A.filter(x => x >= 1).sort((a, b) => a - b)

//     let x = 1

//     for(let i = 0; i < A.length; i++) {
//         // if we find a smaller number no need to continue, cause the array is sorted
//         if(x < A[i]) {
//             return x
//         }
//         x = A[i] + 1
//     }

//     return x
// }

// function solution3(A) { 
//     return Array.from(new Set(A.filter((a)=>a=>1))).sort((a,b)=>a-b).reduce((prev,n,i)=>{
//         if (n===prev) {
//             return n+1;
//         } else {
//             return prev;
//         }},1) 
// }
// console.log(solution([1,2,3,7,6]));

// const findLongestReapatedSubstring = str => {
//     if(str.length < 2) {
//         return -1;
//     }
//     let longest = '';
//     for(let i = 0; i < str.length/2; i++) {
//         let toTest = str.substring(0, i + 1);
//         let toCheck = str.substring(i + 1);
//         if(toCheck.includes(toTest)) {
//             longest = toTest;
//         }
//     }

//     return longest ? longest : -1;
// }

// const x = 'abcabc';
// const y = 'abcdeabcd';
// const c = 'c';
// const d = 'asdfghjklqwertyuio';
// console.log(findLongestReapatedSubstring(c));
// console.log(findLongestReapatedSubstring(d));


// function validTime(time) {
//     const arr = time.split(':');
//     if(parseInt(arr[0]) > 24 || parseInt(arr[0]) < 0) {
//         return false;
//     } else if(parseInt(arr[1]) < 0 || parseInt(arr[1]) > 59) {
//         return false;
//     } else {
//         return true;
//     }
// }

// console.log(validTime('13:58'));
// console.log(validTime('25:51'));
// console.log(validTime('02:76'));
// function slowFib(n) {
//     if (n < 2) {
//         return n;
//     }
//     return fib(n-1) + fib(n-2);
// }

// function memoize(fn) {s
//     const cache = {};
//     return function(...args) {
//         if(cache[args]) {
//             return cache[args];
//         }
//         const result = fn.apply(this, args);
//         cache[args] = result;
//         return result;
//     }
// }
// const fib = memoize(slowFib);

// console.log(fib(100));
// function vowels(str) {
//     const vowels = /^[aeiou]$/g;
//     let count = 0;
//     let testStr = str.toLowerCase();
//     console.log('teststr', testStr);
//     for(let char of testStr) {
//         console.log('char', char)
//         if(vowels.test(char)) {
//             count++;
//             console.log('char and  count: ', char, count)
//         }
//     }
//     return count;
// }

// console.log(vowels('Number in the row'));

// const numsArray = [1,3,7,9,2];
// const targetToFind = 11;

// const findTargetSum = (arr, target) => {
// for (let i = 0; i < arr.length; i++) {
//   const numberToFind = target - arr[i];
//   console.log(numberToFind)
//   for (let j = i + 1; j < arr.length; j++) {
//     console.log('j', arr[j])
//     if( arr[j] === numberToFind) {
//       return [i, j]
//     }
//   }
// }

//   return null;
// }

// const findTargetSum2 = () => {
//   for(var i = 0; i < 3; i++) {
//     setTimeout(function(){
//       alert(i);
//     }, 1000 + 1);
//   }
// }

// console.log(findTargetSum2());
// function reverse(str) {

// return str.split('').reduce((a, b) => b + a);
// }

// console.log(reverse('abcd'));
// console.log('3', anagram('abc'));
// console.log('3', anagram('mnop'));
// console.log('4', anagram('xyyx')); 
// console.log('5', hackerrankInString('abcdefghijklmnopqrstuvwxyz'));
// console.log(alternate('beabeefeab'));

// const url = 'https://coderbyte.com/api/challenges/json/rest-get-simple'
//   // console.log(resp);
// const fetchData = async () => {
//   const resp = await axios.get(url);
//   const hobbies = resp.data.hobbies;

//   console.log(hobbies.join(','));
// }
// fetchData();
