// Algorithm: Insertion Sort
/*  Uses nested loop. Starts with assumed sort list of length 1. Compares the next item
 *  and inserts it before or after depending on value comparison.
 */
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      console.log(`array: `, array.join(' '));
      if (array[i] < array[j]) {
        const [item] = array.splice(i, 1);
        array.splice(j, 0, item);
      }
    }
  }

  console.log(`array: `, array.join(' '));
  return array;
}

// Demo
const array = [10, 3, 7, 5, 1, 0, 4, 6, 2, 8, 9];
insertionSort(array);
