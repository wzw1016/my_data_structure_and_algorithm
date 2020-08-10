(function() {
  function DoublyLinkedList() {

    this.head = null
    this.tail = null
    this.length = 0

    function Node(data) {
      this.prev = null
      this.data = data
      this.next = null
    }

    DoublyLinkedList.prototype.append = function(data) {
      const newNode = new Node(data)
      if (this.length === 0) {
        this.head = newNode
        this.tail = newNode
      } else {
        let oldlastNode = this.tail
        oldlastNode.next = newNode
        newNode.prev = oldlastNode
        this.tail = newNode
      }
      this.length += 1
    }
  }

  window.DoublyLinkedList = DoublyLinkedList
})()