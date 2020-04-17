const merge = (arr1, arr2) => {
  const newArr = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < arr1.length && rightIndex < arr2[rightIndex]) {
    if (arr1[leftIndex] < arr2[rightIndex]) {
      newArr.push(arr1[leftIndex]);
      leftIndex++;
    } else {
      newArr.push(arr2[rightIndex]);
      rightIndex++;
    }
  }

  return newArr;
};

const split = (arr) => {
  if (arr.length <= 1) {
    return arr;
  } else {
    const middle = arr.length / 2;
    const firstHalf = arr.slice(0, middle);
    const secondHalf = arr.slice(middle);
    return merge(split(firstHalf), split(secondHalf));
  }
};
