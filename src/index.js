
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let resultArr = [];
  let tempArr = [];
  let flag = true;
  if (typeof matrix !== "undefined") {
    if (matrix.length !== 0) {
      for (let i = 0; i < matrix.length; i++) {
        if (flag === true) {
          let swp = 0;
          tempArr = matrix[i];
          for (let j = 0; j < tempArr.length - 1; j++) {
            for (let t = tempArr.length - 1; t > j; t--) {
              if (tempArr[j] > tempArr[t]) {
                swp = tempArr[t];
                tempArr[t] = tempArr[j];
                tempArr[j] = swp;
              }
            }
          }
          for (let el of tempArr) {
            resultArr.push(el);
          }
          flag = !flag;
        } else {
          let swp = 0;
          tempArr = matrix[i];
          for (let j = 0; j < tempArr.length - 1; j++) {
            for (let t = tempArr.length - 1; t > j; t--) {
              if (tempArr[j] < tempArr[t]) {
                swp = tempArr[t];
                tempArr[t] = tempArr[j];
                tempArr[j] = swp;
              }
            }
          }
          for (let el of tempArr) {
            resultArr.push(el);
          }
          flag = !flag;
        }
      }
    }
  }
  return resultArr;
}
