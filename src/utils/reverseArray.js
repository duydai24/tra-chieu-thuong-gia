export function reverseArray(array) {
  var first = null;
  var last = null;
  var tmp = null;
  var length = array.length;

  for (first = 0, last = length - 1; first < length / 2; first++, last--) {
    tmp = array[first];
    array[first] = array[last];
    array[last] = tmp;
  }
}
