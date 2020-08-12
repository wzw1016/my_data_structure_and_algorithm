// 1. 基于数组实现
// 2. 基于链表实现
(function (window){
  function Stack() {
    this.items = []

    Stack.prototype.push = function(element) {
      return this.items.push(element)
    }

    Stack.prototype.pop = function(element) {
      return this.items.pop(element)
    }

    Stack.prototype.peak = function() {
      return this.items[this.items.length - 1]
    }

    Stack.prototype.size = function() {
      return this.items.length
    }

    Stack.prototype.isEmpty = function() {
      return this.items.length === 0
    }

    Stack.prototype.toString = function() {
      let resultString = ''
      for (let index = 0; index < this.items.length; index++) {
        resultString += this.items[index] + ' '
      }
      return resultString.slice(0, -1)
    }
  }
  window.Stack = Stack
})(window)
