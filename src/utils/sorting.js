
function swap(arr, a, b) {
  // replace more than 1 element value in array using 1 line
  // this ability is 'ES6 destructuring swap',
  // only specific for Javascript language
  // but VERY VERY SLOW, almost 3 times slower !
  //[arr[a], arr[b]] = [arr[b], arr[a]];
  // normal way for many programming language
  var _swap_temp = arr[a];
  arr[a] = arr[b];
  arr[b] = _swap_temp;
}
function selectPivot(arr, startIndex, endIndex, doSwap) {
  // find a pivot value which not the lowest value within the range 
  // Get 2 UNIQUE elements, if failed then it means all elements are same value.
  var pivot = arr[startIndex]; // get first element from the first position
  // try to find a different element value
  var j = endIndex;
  while (pivot == arr[j] && j >= startIndex) {
    j--;
  }
  if (startIndex > j) {
    //console.log('selectPivot(arr, ' + startIndex + ',' + endIndex + '), all elements are equal, nothing to sort');
    return pivot;
  }
  // check which element is lower? 
  // use the lower value as pivot and swap the position with the last position (endIndex)   
  if (pivot > arr[j]) {
    pivot = arr[j];
    if (doSwap) {
      swap(arr, j, endIndex);
    }
  } else {
    if (doSwap) {
      swap(arr, startIndex, endIndex);
    }
  }
  return pivot;
}

function partition_by_Tony_Hoare(arr, startIndex, endIndex) {
  // original partitioning scheme by creator of QuickSort 
  // https://en.wikipedia.org/wiki/Tony_Hoare
  // WARNING: if selected pivot is the last position (endIndex)
  // AND it is the largest value then INFINITE LOOP problem occurred!
  //var pivot = arr[startIndex];
  var pivot = selectPivot(arr, startIndex, endIndex, false);
  let left = startIndex, right = endIndex;
  let isLoop = true;
  do {
    // find bigger than pivot value from bottom
    while (pivot > arr[left]) {
      left++;
    }
    // find lower than pivot value from top
    while (arr[right] > pivot) {
      right--;
    }
    // are positions valid for swap ?
    if (left >= right) {
      // not valid, so exit
      isLoop = false;
      return right;
    }
    swap(arr, left, right);
    left++;
    right--;
  } while (isLoop); // loop forever until break
}

export function quickSort_by_Tony_Hoare(arr, startIndex, endIndex) {
  // this is the original of QuickSort algorithm by Tony Hoare
  if (endIndex > startIndex) {
    var partitionIndex = partition_by_Tony_Hoare(arr, startIndex, endIndex);
    // the item at partitionIndex will be included in recursive sorting lower values.
    // recursion to sort lower values
    quickSort_by_Tony_Hoare(arr, startIndex, partitionIndex);
    // recursion to sort higher values
    quickSort_by_Tony_Hoare(arr, partitionIndex + 1, endIndex);
  }
  return arr;
}
export function quickSort_by_Tony_Hoare_non_recursive(arr) {
  'use strict'
    ;
  if (!arr || 1 > arr.length) {
    return null;
  }
  var arrLength
    =
    arr.length;
  var startIndex
    =
    0, endIndex
      =
      arrLength - 1;
  // don't use Array.push() and Array.pop() because too slow
  // use 2 arrays instead of 1 to avoid unnecessary increasing and reducing stackLength
  var stackStartIndex
    =
    [], stackEndIndex
      =
      [];
  var stackLength
    =
    0;
  var partitionIndex;
  //var i, j, is_key;
  do {
    partitionIndex = partition_by_Tony_Hoare(arr, startIndex, endIndex);
    if (partitionIndex > startIndex) {
      // there is lower values to partition 
      // is there higher values?
      if (endIndex > partitionIndex + 1) {
        // we don't do it now, push it into stack for later 
        stackStartIndex[stackLength] = partitionIndex + 1;
        stackEndIndex[stackLength] = endIndex;
        stackLength++; // increase counter for next slot
      }
      // set new parameter to partition lower values 
      endIndex = partitionIndex;
    } else if (endIndex > partitionIndex + 1) {
      // there is no lower values, only higher value, this is worst case!
      // set new parameter for next partitioning
      startIndex = partitionIndex + 1;
    } else {
      // no valid partitioning index, so we get from stack (if any)
      if (stackLength > 0) {
        stackLength--;
        startIndex = stackStartIndex[stackLength];
        endIndex = stackEndIndex[stackLength];
      } else {
        break; // finished !
      }
    }
  } while (endIndex > startIndex);
  return arr;
}