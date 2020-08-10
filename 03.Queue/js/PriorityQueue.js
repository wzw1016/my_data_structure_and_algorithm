/* 封装优先级队列(基于数组实现) */
// 1. 基于数组实现
// 2. 基于链表实现
(function() {
  function PriorityQueue() {
    
    this.items = []

    function PriorityElement(data, priority) {
      this.data = data
      this.priority = priority
    }

    PriorityQueue.prototype.enqueue = function(data, priority) {
      const queueElement = new PriorityElement(data, priority)

      if (this.items.length === 0) {
        return this.items.push(queueElement)
      }

      let added = false
      for (let index = 0; index < this.items.length; index++) {
        // 1. 遍历比较
        if (queueElement.priority < this.items[index].priority) {
          this.items.splice(index, 0, queueElement)
          // 2. 标识已经添加
          added = true
          return this.items.length
        }
      }

      // 3. 如果没有添加的话
      if (!added) {
        return this.items.push(queueElement)
      }
    }

    PriorityQueue.prototype.dequeue = function() {
      return this.items.shift()
    }

    PriorityQueue.prototype.front = function() {
      return this.items[0]
    }

    PriorityQueue.prototype.size = function() {
      return this.items.length
    }

    PriorityQueue.prototype.isEmpty = function() {
      return this.items.length === 0
    }

    PriorityQueue.prototype.toString = function() {
      let resultString = ''
      for (let index = 0; index < this.items.length; index++) {
        resultString += this.items[index].data + '-' + this.items[index].priority + ' '
      }
      return resultString.slice(0, -1)
    }

  }

  window.PriorityQueue = PriorityQueue
})()