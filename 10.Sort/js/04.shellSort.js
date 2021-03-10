
const shellSort = (array) => {
  const length = array.length

  let gap = Math.floor(length / 2); while (gap >= 1) {
    
    let i = gap; while (i < length) {
      let current = array[i]

      let j = i; while (array[j - gap] > current && j > 0) {
        array[j] = array[j - gap]
        j -= gap
      }
      array[j] = current
      i += 1
    }
    gap = Math.floor(gap / 2)
  }

  return array
}


console.log(shellSort([100, 2, 9, 66, 5, 18, 21, 96, 1, 10, 55]))
// console.log(shellSort([81, 94, 11, 96, 12, 35, 17, 95, 28, 58, 41, 75, 15]))