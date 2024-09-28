const deleteNumberInArry = (arr, pos) => {
  for (let i = pos; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return arr;
};

const arr = [2, 3, 4, 5, 6];
console.log(deleteNumberInArry(arr, 1));
