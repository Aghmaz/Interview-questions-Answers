// i will provide you a string and you have to write your answer one letter next eg abc is a string so ans should bcd

const alpha = (str) => {
  let minAlpha;
  let arr = str
    .split("")
    .map((elem) => {
      if (elem === "z") {
        minAlpha = 97;
        let result = String.fromCharCode(minAlpha);
        minAlpha = minAlpha + 1;
        return result;
      } else {
        return String.fromCharCode(elem.charCodeAt() + 1);
      }
    })
    .join("");
  return arr;
};

console.log(alpha("xyz"));
