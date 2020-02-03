import * as _ from "lodash";
export function getBubbleSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = _.cloneDeep(array);
  bubbleSort(auxiliaryArray, array, array.length + 1, animations);
  return animations;
}
function bubbleSort(arr, orig, n, animations) {
  let i, j;
  for (i = 0; i < n - 1; i++) {
    for (j = 0; j < n - i - 1; j++) {
      // 2 index being compared, show in animation
      animations.push([i, j]);
      animations.push([i, j]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        // New values after swapping, show in animation by modifying the height
        animations.push([j, arr[j]]);
        animations.push([j + 1, arr[j + 1]]);
      } else {
        // Values at this iteration, show in animation
        animations.push([j, arr[j]]);
        animations.push([j + 1, arr[j + 1]]);
      }
    }
  }
}
