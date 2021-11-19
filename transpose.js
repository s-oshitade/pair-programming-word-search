const transpose = function(matrix) {
  let result = [];
  let innerArray = [];
  let counter = 0;
  while (counter < matrix[0].length) {
  for (let item of matrix) {
    innerArray.push(item[counter]);
  }
  result.push(innerArray);
  innerArray = [];
  counter++;
}
  return result;
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
      for (const el of row) {
          process.stdout.write(el + " ");
      }
      process.stdout.write('\n')
  }
}



module.exports = transpose;