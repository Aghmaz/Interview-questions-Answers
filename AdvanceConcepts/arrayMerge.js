const mergeTwoArrays = (arr1, arr2) => {
  let arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    arr3[i] = arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    arr3[arr1.length + i] = arr2[i];
  }
  return arr3;
};
const arr1 = [1, 3, 5, 6, 7];
const arr2 = [2, 4];
console.log(mergeTwoArrays(arr1, arr2));
