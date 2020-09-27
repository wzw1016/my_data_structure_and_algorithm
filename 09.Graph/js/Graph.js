class Graph {
  constructor() {
    this.vertexs = []
    this.edges = {}
  }

  addVertex(vertex) {
    if (this.vertexs.indexOf(vertex) !== -1) 
      return false

    this.vertexs.push(vertex)
    this.edges[vertex] = []
    return true
  }

  addEdge(vertextA, vertextB) {
    if(this.vertexs.indexOf(vertextA) === -1 || this.vertexs.indexOf(vertextB) === -1)
      return false
    
    this.edges[vertextA].push(vertextB)
    this.edges[vertextB].push(vertextA)
    return true
  }

  toString() {
    let resultString = ''
    for (const i in this.edges) {
      resultString += `${i} => `
      for (const j of this.edges[i]) {
        resultString += `${j} `
      }
      resultString += '\n'
    }
    return resultString
  }

  initializeColor() {
    let color = {}
    for (const i of this.vertexs) {
      color[i] = 'white'
    }
    return color
  }

  breadthFirstSearch(originVetex, handler) {

    const color = this.initializeColor()

    const queue = new Queue()
    queue.enqueue(originVetex)
    
    while(!queue.isEmpty()) {
      const dequeueVertex =  queue.dequeue()

      const relationalVertexs = this.edges[dequeueVertex]
      color[dequeueVertex] = 'gray'
      for (const relationalVertex of relationalVertexs) {
        if (color[relationalVertex] === 'white') {
          color[relationalVertex] = 'gray'
          queue.enqueue(relationalVertex)
        }
      }

      handler(dequeueVertex)

      color[dequeueVertex] = 'black'
    }
  }
}