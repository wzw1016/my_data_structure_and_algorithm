/* 封装队列(基于数组实现) */
// 1. 基于数组实现
// 2. 基于链表实现
(function() {
  function Queue() {
    this.items = []

    Queue.prototype.enqueue = function(element) {
      return this.items.push(element)
    }

    Queue.prototype.dequeue = function() {
      return this.items.shift()
    }

    Queue.prototype.front = function() {
      return this.items[0]
    }

    Queue.prototype.size = function() {
      return this.items.length
    }

    Queue.prototype.isEmpty = function() {
      return this.items.length === 0
    }

    Queue.prototype.toString = function() {
      let resultString = ''
      for (let index = 0; index < this.items.length; index++) {
        resultString += this.items[index] + ' '
      }
      return resultString.slice(0, -1)
    }
  }
  window.Queue = Queue
})()