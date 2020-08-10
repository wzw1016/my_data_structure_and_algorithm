(function() {
  function LinkedList() {
    this.head = null
    this.length = 0

    function Node(data) {
      this.data = data
      this.next = null
    }

    LinkedList.prototype.append = function(data) {
      const newNode = new Node(data)
      if (this.length === 0) {
        this.head = newNode
      } else {
        let current = this.head
        while (current.next) {
          current = current.next
        }
        current.next = newNode
      }
      this.length++
      return this
    }
  
    LinkedList.prototype.toString = function() {
      let resultString = ''
      let current = this.head
      while (current) {
        resultString += current.data + ' '
        current = current.next
      }
      return resultString.slice(0, -1)
    }
  
    LinkedList.prototype.insert = function(position, data) {
      
      if (position < 0 || position > this.length) return false
  
      const newNode = new Node(data)
  
      if (position === 0) {
        newNode.next = this.head
        this.head = newNode
      } else {
        let previosNode = null,
            currentNode = this.head
            index = 0
        while (index++ < position) {
          previosNode = currentNode
          currentNode = currentNode.next
        }
        previosNode.next = newNode
        newNode.next = currentNode
      }
      this.length++
      return true
    }

    LinkedList.prototype.get = function(position) {
      if (position < 0 || position >= this.length) return null

      let current = this.head
          index = 0
      while (index++ < position) {
        current = current.next
      }
      return current.data
    }

    LinkedList.prototype.indexOf = function(data) {

      let current = this.head
          index = 0
      while (current) {
        if (data === current.data) {
          return index
        }
        index++
        current = current.next
      }
      return -1
    }

    LinkedList.prototype.update = function(position, data) {
      if (position < 0 || position >= this.length) return false

      let current = this.head
          index = 0
      while (index++ < position) {
        current = current.next
      }
      current.data = data
      return true
    }

    LinkedList.prototype.removeAt = function(position) {
      if (position < 0 || position >= this.length) return null

      this.length--
      if (position === 0) {
        let oldHead = this.head
        this.head = this.head.next
        return oldHead
      } else {
        let current = this.head
            previos = null
            index = 0
        while (index++ < position) {
          previos = current
          current = current.next
        }
        previos.next = current.next
        return current
      }
    }

    LinkedList.prototype.remove = function(data) {
      const position = this.indexOf(data)

      return this.removeAt(position)
    }

    LinkedList.prototype.isEmpty = function() {
      return this.length === 0
    }

    LinkedList.prototype.size = function() {
      return this.length
    }
  }

  window.LinkedList = LinkedList
})()