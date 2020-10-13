// You should implement your task here.

function towelSort(matrix) {

  if (!matrix) {
    return [];
  }


    let result = [];


    for (let i = 0; i < matrix.length; i += 1) {

        if (i % 2 != 0) {
            result = result.concat(matrix[i].reverse());
        } else {
            result = result.concat(matrix[i]);
        }

        console.log(result);
    }
    return result;
}

module.exports = towelSort;
