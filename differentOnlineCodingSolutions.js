function countCounterfeit(serialNumber) {
  let totalValue = 0;
  const Years = Array(120).fill().map((_, i) => i + 1900);
  const Notes = ['10', '20', '50', '100', '200', '500', '1000'];
  serialNumber.forEach(str => {
    if(str.length > 9 && str.length < 13) {
      let charCheck = str.substr(0, 3);
      let arr = [];
      for(let i = 0; i < 3; i++) {
        let charCode = charCheck.charCodeAt(i);
        if(charCode > 64 && charCode < 91) {
          arr.push(charCode);
        }
      }
      if((arr.length === new Set(arr).size) && arr.length === 3) {
        let year = str.substr(3, 4);
        if(!isNaN(year) && Years.includes(parseInt(year))) {
          let note = str.substring(7, str.length - 1);
          if(Notes.includes(note)) {
            let lastCharCode = str.charCodeAt(str.length - 1);
            if( lastCharCode > 64 && lastCharCode < 91) {
              totalValue += parseInt(note);
            }
          }
        }
      }
    }
  })
  return totalValue;
}

function moves(arr) {
  let count = 0;
  let i = 1;
  let j = arr.length - 1;
  while(i < j) {
    let left = arr[i];
    let right = arr[j];
    if(left%2 && right%2) {
      j--;
    } else if (!left%2 && !right%2) {
      i++;
    } else if (!left%2 && right%2) {
      i++;
      j--;
    } else {
      [left, right] = [right, left];
      count++;
      i++;
      j--;
    }
  }
  return count;
}
function moves2(arr) {
  let count = 0;
  let i = 0;
  let j = arr.length - 1;
  do {
    let left = arr[i];
    let right = arr[j];
    if(checkOdd(left) && checkOdd(right)) {
      j--;
    } else if (!checkOdd(left) && !checkOdd(right)) {
      i++;
    } else if (!checkOdd(left) && checkOdd(right)) {
      i++;
      j--;
    } else if (checkOdd(left) && !checkOdd(right)){
      [arr[i], arr[j]] = [arr[j], arr[i]];
      count++;
      i++;
      j--;
    }
  } while (i <= j)
  return count;
}

function getSmallest(arr) {
  const smallest = arr.sort((a,b) => a - b);
  return smallest[0];
}

function getMoneySpent(keyboards, drives, b) {
  /*
   * Write your code here.
   */
  let maxSpend = 0;
  if(getSmallest(keyboards) + getSmallest(drives) > b) return -1;
  for(let i = 0; i < keyboards.length; i++) {
    for(let j = 0; j < drives.length; j++) {
      let sum = keyboards[i] + drives[j];
      if(sum > maxSpend && sum <= b) maxSpend = sum;
    }
  }
  return maxSpend;
}

function difference(a,b) {
  return Math.abs(a-b);
}

function catAndMouse(x, y, z) {
  if(!x || !y || !z) return
  if(difference(x,z) < difference(y,z)) return 'Cat A';
  if(difference(x,z) > difference(y,z)) return 'Cat B';
  if(difference(x,z) === difference(y,z)) return 'Mouse C';
}

function nextFive(a) {
  let num = 5 - a%5;
  if (num === 0){
    return a;
  } else {
    return a + num;
  }

}
function gradingStudents(grades) {
  // Write your code here
  const newGrades = [];
  grades.forEach(grade => {
    if((grade > 37) && (nextFive(grade) - grade) < 3) {
      newGrades.push(nextFive(grade));
    } else {
      newGrades.push(grade);
    }
  });
  return newGrades;
}

function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  if(x1 === x2) return 'YES';
  if(x2 > x1 && v2 >= v1) return 'NO';
  let count = 0;
  while(count < 10000) {
    let pos1 = x1 + v1 * count;
    let pos2 = x2 + v2 * count;
    if( pos1 === pos2) {
      return 'YES'
    } else {
      count++;
    }
  }
  return 'NO';
}
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  const result = [0, 0];
  apples.forEach(d => {
    if(d > 0 && (a + d >= s && a + d <= t)) {
      result[0] += 1;
    }
  });
  oranges.forEach(d => {
    if(d < 0 && (b + d >= s && b + d <= t)) {
      result[1] += 1;
    }
  });
  return result.join();
}

function angryProfessor(k, a) {
  // Write your code here
  let count = 0;
  a.forEach(st => {
    if(st <= 0) {
      count++;
    }
  });
  if(count < k) {
    return 'YES';
  } else {
    return 'NO';
  }
}

function reverseNum(n) {
  let str = n + '';
  let rev = parseInt([...str].reverse().join(''), 10);
  return rev;
}

function beautifulDays(i, j, k) {
  // Write your code here
  let range = Array.from({length: Math.abs(i-j) + 1}, (_, a) => a + i);
  let count = 0;
  range.forEach(num => {
    if(Math.abs(num - (reverseNum(num))) % k === 0) {
      count++;
    }
  });
  return count;
}

function utopianTree(n) {
  // Write your code here
  let totalHeight = 1;
  let i = 0;
  while(i < n) {
    if(i % 2 === 0) {
      totalHeight *= 2;
      i++;
    } else if (i % 2 === 1) {
      totalHeight += 1;
      i++
    }
  }
  return totalHeight;
}

function countSignals(frequencies, filterRanges) {
  // Write your code here
  let count = 0;
  const uFr =[... new Set(frequencies)];
  uFr.forEach(fr => {
    filterRanges.every(filter => {
      if(fr >= filter[0] && fr <= filter[1]) count++;
    });
  });
  return count;
}

function findDigits(n) {
  // Write your code here
  let count = 0;
  const arr = n.toString().split('');
  arr.forEach(d => {
    if(n % parseInt(d) === 0) count++;
  });
  return count;
}

function extraLongFactorials(n) {
  // Write your code here
  let fact = 1;
  if( n === 1) return fact;
  for(let i = 0; i < n; i++) {
    fact *= n - i;
  }
  return fact;
}

function pickingNumbers(a) {
  // Write your code here
  let maxLength = 1;
  for (let i = 0; i< a.length - 1; i++) {
    const sub = [a[i]];
    for (let j = i + 1; j < a.length; j++) {
      if(Math.abs(a[i] - a[j] > 2)) {
        sub.push(a[j]);
        length++;
        console.log(('length', length));
        if(maxLength < length) maxLength = length;
        console.log(('maxlength', maxLength));
      } else {
        break;
      }
    }
  }
  console.log(('maxlength f', maxLength));
  return maxLength;
}

function squares(a, b) {
  // Write your code here
  const arr = [];
  for (let i = a; i <= b; i++) {
    if(Number.isInteger(Math.sqrt(i))) {
      arr.push(i);
    }
  }
  return arr.length;
}

function countSquares(a, b){
  return (Math.floor(Math.sqrt(b)) -  Math.ceil(Math.sqrt(a)) + 1);
}


function libraryFine(d1, m1, y1, d2, m2, y2) {
  // Write your code here
  let fine = 0;
  if(y1 > y2) {
    return fine = 10000;
  } else if(y1 === y2 && m1 === m2) {
    return fine = (d1 - d2) * 15;
  } else if (y1 === y2 && m1 !== m2) {
    return fine = (m1 - m2) * 500;
  } else {
    return fine;
  }
}

function cutTheSticks(arr) {
  let result = [];
  while (arr.length > 0) {
      result.push(arr.length);
      arr.sort((a, b) => (a - b));
      let front = arr[0];
      arr.reduce((target, value, index) => {
          arr[index] -= front;
          return target;
      }, []);
      let remove = arr.lastIndexOf(0) + 1;
      arr.splice(0, remove);
  }
  return result;
}

function chocolateFeast(n, c, m) {
  // Write your code here
  let bars = Math.floor(n / c);
  let w = bars;
  while(w >= m) {
    let more = Math.floor(w / m);
    bars += more
    w = more + w % m;
  }
  return bars;
}

function maximumProfit(price) {
  if(price.length <= 1) return 0;
  let profit = 0;
  let max = 0;
  let maxP = 0;
  let maxI = 0;
  for(let i = 1; i > price.length -1; i++) {
   if(maxP < price[i]) {
    maxp = price[i];
    maxI = i;
   }
  }
  let j = 0;
  let count = 0;
  while(j < maxI) {
    count++;
    profit -= price[j];
    j++;
  }
  max = profit + price[maxI] * count;
  return max;
}

function taumBday(b, w, bc, wc, z) {
  let B = BigInt(b);
  let W = BigInt(w);
  let BC = BigInt(bc);
  let WC = BigInt(wc);
  let Z = BigInt(z);
  // Write your code here
  if (WC > BC + Z) {
    return (B + W) * BC + B *Z;
  } else if (BC > WC + Z) {
    return (B + W) * WC + B * Z;
  } else { 
    return B * BC + W * WC;
  }
}

9007199254740991
714782523241122198

function superReducedString(s) {
  // Write your code here
  if(s.length === 0) return 'Empty string';
  if(s.length === 1) return s;
  const arr = s.split('');
  let p1 = 0;
  while(p1 !== arr.length - 1) {
    if(arr[p1] === arr[p1 + 1]) {
      arr.splice(p1,2);
      if(arr.length === 0) return 'Empty String';
      if(p1 > 0) p1--;
    } else {
      p1++;
    }
  }
  return arr.join('');
}

function gameOfThrones(s) {
  // Write your code here
  const obj = {};
  for(let i = 0; i < s.length; i++) {
    obj[s[i]] ? obj[s]++ : obj[s] = 1;
  }
  if(s.length % 2 === 0) {
    return (Object.keys(obj).reduce((acc, el) => acc + el, 0)) % 2 === 0;
  } else {
    const arr = Object.keys(obj).filter(el => el % 2 === 1);
    if(arr.length === 1) return true;
  }
  return false;
}

function charMap (str) {
  const obj = {};
  for(let char of str) {
    obj[char] ? obj[char]++ : obj[char] = 1
  }
  return obj;
}
function anagram(s) {
  // Write your code here
  if(s.length % 2 === 1) return -1;
  let middle = s.length / 2;
  let str1 = s.substr(0, middle);
  let str2 = s.substr(middle);
  obj1 = charMap(str1);
  obj2 = charMap(str2);
  let count = 0;
  for( let el in obj1) {
    if(!obj2.hasOwnProperty(el)) count++;
  }
  return count;
}

function makingAnagrams(s1, s2) {
  // Write your code here
  let arr1 = [];
  let arr2 = [];
  if(s1.length < s2.length) {
    arr1 = s1.split('');
    arr2 = s2.split('');
  } else {
    arr2 = s1.split('');
    arr1 = s2.split('');
  }
  let p1 = 0;
  while(p1 < arr1.length) {
    let ind = arr2.indexOf(arr1[p1]);
    if(ind !== -1) {
      arr1.splice(p1, 1);
      arr2.splice(ind, 1);
    } else {
      p1++;
    }
  }
  return [...arr1, ...arr2].length;
}

function camelcase(s) {
  // Write your code here
  let count = 1;
  for(let i = 0; i < s.length; i++) {
    if(s.charCodeAt(i) > 64 && s.charCodeAt(i) < 91) {
      count++;
    }
  }
  return count;
}

function pangrams(s) {
  // Write your code here
  const abc = 'abcdefghijklmnopqrstuvwxyz';
  if (s.length < 26) return 'not pangram'
  for(let char in abc) {
    if(s.indexOf(char) === -1) return 'not pangram'
  }
  return 'pangram';
}

function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong
  const numbers = "0123456789";
  const lower_case = "abcdefghijklmnopqrstuvwxyz";
  const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const special_characters = "!@#$%^&*()-+";
  let count = 0;
  let check = 0;
  if(password.length < n) count += n - password.length;
  for(let i = 0; i < lower_case.length; i++) {
    if(password.indexOf(lower_case[i]) === -1 && check >= count) {
      count++;
    } else check++;
  }
  for(let i = 0; i < numbers.length; i++) {
    let check = 0; 
    if(password.indexOf(numbers[i]) === -1 && check >= count) {
      count++;
    } else check++;
  }
  for(let i = 0; i < upper_case.length; i++) {
    let check = 0; 
    if(password.indexOf(upper_case[i]) === -1 && check >= count) {
      count++;
    } else check++;
  }
  for(let i = 0; i < special_characters.length; i++) {
    let check = 0; 
    if(password.indexOf(special_characters[i]) === -1 && check >= count) {
      count++;
    } else check++;
  }
  return count;
}

function compareTriplets(a, b) {
  // Write your code here
  let alice = 0;
  let bob = 0;
  for(let i = 0; i < 3; i++) {
    a[i] > b[i] ? alice++ : bob++;
  }
  return [alice, bob];
}

function timeConversion(s) {
  // Write your code here
  arr = s.split(':');
  if(arr[2].includes('PM') && arr[0] !== '12') {
    arr[0] += 12;
  }
  if(arr[2].includes('AM') && arr[0] === '12') {
    arr[0] = '0';
  }
  console.log('arr', arr);
  return arr.join(':');
}

function morganAndString(a, b) {
  // Write your code here
  let result = [];
  let p = 0;
  let arr1 = a.split('');
  let arr2 = b.split('')
  while(arr1.length > 0 && arr2.length > 0) {
    if(arr1[0].charCodeAt(0) <= arr2[0].charCodeAt(0)) {
      result.push(arr1[0]);
      arr1.splice(0, 1);
    } else {
      result.push(arr2[0]);
      arr2.splice(0, 1);
    }
  }
  result = [...result, ...arr1, ...arr2];
  return result.join('');
}

function twoStrings(s1, s2) {
  let lettersMap = {};
  for (const letter of s1) {
    if (!lettersMap[letter]) {
      lettersMap[letter] = 1;
    }
  }

  for (const letter of s2) {
    if (lettersMap[letter]) {
      return 'YES';
    }
  }
  return 'NO';
}

function marsExploration(s) {
  // Write your code here
  let p1 = 0;
  let p2 = 1;
  let p3 = 2;
  let count = 0;
  while(p3 < s.length) {
    if (s.charAt(p1) !== 'S') {
      count++;
      p1++;
    } else {
      p1++;
    }
    if (s.charAt(p2) !== 'O') {
      count++;
      p2++;
    } else {
      p2++;
    }
    if (s.charAt(p3) !== 'S') {
      count++;
      p3++;
    } else {
      p3++;
    }
  }
  return count;
}

function rotation(arr) {
  let last = arr.pop(arr.length - 1);
  arr = arr.unshift(last);
  return arr;
}

function balancedSums(arr) {
  // Write your code here
  let p1 = 0;
  let p2 = arr.length - 1;
  if(arr.length < 3) return 'NO';
  let sumLeft = arr[p1];
  let sumRight = arr[p2];
  while(p1 < p2) {
    if(sumLeft < sumRight) {
      p1++;
      sumLeft += arr[p1];
    } else if (sumLeft > sumRight) {
      p2++;
      sumRight += arr[p2];
    } else {
      if(p1 + 1 === p2) {
        return 'YES';
      } else {
        p1++;
        p2++;
        sumLeft += arr[p1];
        sumRight += arr[p2];
      }
    }
  }
  return 'NO';
}

function pairs(k, arr) {
  // Write your code here
  let pairs = 0;
  for(let i = 0; i < arr.length - 1; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(Math.abs(arr[i] - arr[j] === k)) pairs++;
    }
  }
  return pairs;
}

function missingNumbers(arr, brr) {
  // Write your code here
  for (let i = 0; i < arr.length; i++) {
    let ind = brr.findIndex(index => index === arr[i]);
      if(ind !== -1) {
        brr.splice(ind, 1);
      }
  }
  return brr.sort((a,b) => a - b);
}

function frequencyMap(arr) {
  const obj = {};
  for(let num of arr) {
    obj[num] ? obj[num]++ : obj[num] = 1;
  }
  return obj;
}

function hackerlandRadioTransmitters(x, k) {
  // Write your code here
  let houses = x.map(Number).sort((a,b) => a - b);
  var house = houses[0], transmitter = houses[0], i = 0, towers = 0;
  let  n = houses.length;
  while( i < n) {
      transmitter = houses[i];
      house = houses[i];
      towers++;
      while(i < n && (houses[i] - house) <= k){
          i++;
      }
      transmitter = houses[i-1];
      while(i < n && houses[i] <= transmitter + k){
          i++;
      }
  }
  console.log(towers);
  return towers;
}

function icecreamParlor(m, arr) {
  // Write your code here.
  const result = [0, 0];
  let biggest = 0;
  for(let i = 0; i < arr.length - 1; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      let sum = arr[i] + arr[j];
      console.log('sum', sum);
      biggest = Math.max(sum, biggest);
      console.log('biggest', biggest);
      result = [i, j];
      console.log('result', result);
    }
  }
  console.log('result f', result);
  return result.sort((a,b) => a - b);
}
function minimumLoss(price) {
  // Write your code here
  let min = 0;
  for(let i = 0; i < price.length - 1; i++) {
    let cur = Math.abs(price[i] - price[i+1]);
    min > cur ? min = cur : min;
  }
  return min;
}

function reverseArray(a) {
  // Write your code here
  let newArr = [];
  for(let i = a.length - 1; i === 0; i--) {
    newArr.push(a[i]);
  }
  return newArr;
}

function caesarCipher(s, k) {
  // Write your code here
  let newStr = [];
  const arr = s.split('');
  for(let i = 0; i < arr.length; i++) {
    let check = arr[i].charCodeAt(0);
    console.log('check', check);
    if((check >= 65 && check <= 90 - k) || (check >= 97 && check <= 122 - k)) {
      newStr[i] = String.fromCharCode(check + k);
      console.log('newstr', newStr[i]);
    } else if ((check > 90 - k && check <= 90) || check > 122 - k && check <= 122) {
      newStr[i] = String.fromCharCode(check + k - 26);
      console.log('newstr', newStr[i]);
    } else {
      newStr[i] = arr[i];
      console.log('newstr', newStr[i]);
    }
  }
  console.log('newstrf', newStr);
  return newStr;
}

function introTutorial(V, arr) {
  // Write your code here
  return arr.findIndex(el => el === V);
}
function closestNumbers(arr) {
  // Write your code here
  let p1 = 0;
  const newArr = arr.sort();
  let result = [];
  let minDif = 0;
  while(p1 < arr.length - 1) {
    let diff = Math.abs(newArr[p1] - newArr[p1 + 1]);
    if(diff < minDif) {
      minDif = dif;
      result.length = 0;
      result.push(newArr[p1], newArr[p1 + 1]);
      console.log('result', p1, result)
      p1++;
    } else if(diff === minDif) {
      result.push(newArr[p1], newArr[p1 + 1]);
      console.log('result', p1, result)
      p1++;
    } else {
      console.log('result', p1, result)
      p1++;
    }
  }
  console.log('result f', p1, result)
  return result;
}

function lonelyinteger(a) {
  a.forEach(item => {
    if(a.indexOf(item) === a.lastIndexOf(item)) {
      return item;
    }
  });
}

function stringConstruction(s) {
    // Write your code here
  for(let char in s) {
    if(s.indexOf(char) === s.lastIndexOf(char)) {
      
    }
  }
}

function flippingBits(n) {
  let binary = '';
  let arr = [];
  let decimal = 0;
  arr = Number(n).toString(2).split('');
  console.log(arr)
  arr.map(item => item === '0' ? item = '1' : item = '0');
  binary = arr.join('');
  console.log(binary)
  decimal = parseInt(binary, 2);
  console.log(decimal);
  return decimal;
}