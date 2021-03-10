
const swap = (array, i, j) => {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

const getMedian = (array, left, right) => {
  const center = Math.floor((left + right) / 2)
  if (array[left] > array[center]) {
    swap(array, left, center)
  }
  if (array[left] > array[right]) {
    swap(array, left, right)
  }
  if (array[center] > array[right]) {
    swap(array, center, right)
  }
  swap(array, center, right - 1)

  return array[right - 1]
}

const recursion = (array, left, right) => {
  if (left >= right) return
  
  const pivot = getMedian(array, left, right)

  let i = left
  let j = right - 1
  // while(true) {
  while(i < j) {
    while (array[++i] < pivot) {}
    while (array[--j] > pivot) {}
    if (i < j) {
      swap(array, i, j)
    } else {
      break
    }
  }
  swap(array, i, right - 1)

  recursion(array, left, i - 1)
  recursion(array, i + 1, right)
}

const quickSort = (array) => {
  recursion(array, 0, array.length - 1)
  return array
}

console.log(quickSort([100, 2, 9, 66, 5, 18, 21, 96, 1, 10, 55]))
// console.log(quickSort([81, 94, 11, 96, 12, 35, 17, 95, 28, 58, 41, 75, 15]))
