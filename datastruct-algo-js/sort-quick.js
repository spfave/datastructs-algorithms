// Algorithm: Merge Sort
/*  Uses recursion. Pick a pivot for an array. Items are compared to the pivot. If an
 *  item is less than the pivot push to the "left" array, else push it to the "right"
 *  array. Return the array resulting from quick sort called on the "left", the pivot,
 *  and quicksort on the "right"
 */
function quickSort(array) {
  console.log(`array: `, array.join(' '));
  if (array.length < 2) return array;

  const pivotIndex = array.length - 1;
  const pivot = array[pivotIndex];
  const left = [];
  const right = [];

  for (let i = 0; i < pivotIndex; i++) {
    const item = array[i];
    item < pivot ? left.push(item) : right.push(item);
  }

  const result = [...quickSort(left), pivot, ...quickSort(right)];
  console.log(`result: `, result.join(' '));
  return result;
}

// Demo
const array = [10, 3, 7, 5, 1, 0, 4, 6, 2, 8, 9];
quickSort(array);
