const numsArray = [1,3,7,9,2];
const targetToFind = 11;

const findTargetSum = function(arr, target) {
  const numsMap = {};
  
  for(let p = 0; p < arr.length; p++) {
    const currentMapVal = numsMap[arr[p]];

    if(currentMapVal >= 0) {
      return [currentMapVal, p];
    } else {
      const numberToFind = target - arr[p];
      numsMap[numberToFind] = p;
    }
  }

  return null;
}

console.log(findTargetSum(numsArray, targetToFind));