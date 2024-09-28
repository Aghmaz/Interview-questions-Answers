// take a union of two arrays and take intersect of two arrays

const unionFunc = () => {
  const arr1 = [1, 2, 3, 4];
  const arr2 = [3, 4, 5, 6];
  const unionArr = [...arr1, ...arr2];
  let arr = [];
  for (let i = 0; i < unionArr.length; i++) {
    for (let j = i + 1; j < unionArr.length; j++) {
      console.log(unionArr[i], unionArr[j]);
    }
  }
  return arr;
};
console.log(unionFunc());
