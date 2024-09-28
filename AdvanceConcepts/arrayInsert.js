const inserNumberInArry = (arr, ins, pos) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i >= pos) {
      arr[i + 1] = arr[i];
      if (i === pos) {
        arr[i] = ins;
      }
    } else if (pos === i + 1) {
      arr[i + 1] = ins;
    }
  }
  return arr;
};

const arr = [2, 3, 4, 5, 6];
console.log(inserNumberInArry(arr, 7, 1));
