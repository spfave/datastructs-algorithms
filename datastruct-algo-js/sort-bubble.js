// Algorithm: Bubble Sort
/*  Loop through array. If this item > next item swap items and indicate
 *  swap occurred. Continue loop till no swap occurred
 */
function bubbleSort(array) {
  let swapOccurred = false;
  do {
    swapOccurred = false;
    array.forEach((item, index) => {
      console.log(`array: `, array.join(' '));
      if (item > array[index + 1]) {
        const tempItem = item;
        array[index] = array[index + 1];
        array[index + 1] = tempItem;
        swapOccurred = true;
      }
    });
  } while (swapOccurred);
  return array;
}

// Demo
const array = [10, 3, 7, 5, 1, 0, 4, 6, 2, 8, 9];
bubbleSort(array);
