const insertSort = (array) => {

  let i = 1; while (i < array.length) {
    
    let tem = array[i]
    let j = i; while (tem < array[j - 1] && j > 0) {
      array[j] = array[j - 1]
      j -= 1
    }
    array[j] = tem

    i += 1
  }

  return array
}

console.log(insertSort([100, 5, 18, 21, 96, 1]))