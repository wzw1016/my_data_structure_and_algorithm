const selectSort = (array) => {
  
  let i = 0; while (i < array.length - 1) {
    let minIndex = i
    let j = i; while (j < array.length) {
      if (array[j] < array[minIndex]) {
        minIndex = j
      }
      j += 1
    }
    let tem = array[i]
    array[i] = array[minIndex]
    array[minIndex] = tem

    i += 1
  }
  return array
}

console.log(selectSort([10, 5, 18, 21, 46, 1]))