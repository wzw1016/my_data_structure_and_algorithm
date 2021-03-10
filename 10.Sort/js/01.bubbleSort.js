const bubbleSort = (array) => {

  let i = 0; while (i < array.length - 1) {
    let j = 0; while (j < array.length - i) {
      if (array[j] > array[j + 1]) {
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
      j += 1
    }
    i += 1
  }

  return array
}

console.log(bubbleSort([110, 5, 18, 21, 46, 3]))