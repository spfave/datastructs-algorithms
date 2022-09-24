// Algorithm: Merge Sort
/*  Uses recursion. Divides array into two halves (left and right),and then performs a
 *  merge sort on each sub-array. Once sub-arrays have a length less than 2 they are
 *  stitched back together, and sorted in the re-stitching.
 */
function mergeSort(array) {
  if (array.length < 2) return array;

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const sorted = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  const results = [...sorted, ...left, ...right];
  console.log(`results: `, results.join(' '));
  return results;
}

// Demo
const array = [10, 3, 7, 5, 1, 0, 4, 6, 2, 8, 9];
mergeSort(array);
