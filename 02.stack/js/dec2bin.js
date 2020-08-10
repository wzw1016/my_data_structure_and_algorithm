(function() {
  function dec2bin(decimalNumber) {
    let binaryStack = new Stack()

    while (decimalNumber > 0) {
      binaryStack.push(decimalNumber % 2)
      decimalNumber = Math.floor(decimalNumber / 2)
    }

    let binaryString = ''
    while (!binaryStack.isEmpty()) {
      binaryString += binaryStack.pop()
    }
    return parseInt(binaryString)
  }
  window.dec2bin = dec2bin
})()