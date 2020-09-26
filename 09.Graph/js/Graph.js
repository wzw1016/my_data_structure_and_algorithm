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
}