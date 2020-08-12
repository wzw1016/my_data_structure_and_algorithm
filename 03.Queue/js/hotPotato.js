// 实现击鼓传花
(function () {
  function hotPotato(nameList, num) {
    const queue = new Queue()

    // 传入数组的元素依次进列
    for (let index = 0; index < nameList.length; index++) {
      queue.enqueue(nameList[index])
    }

    // 3. 只有当队列中元素为一个时，才中止
    while (queue.size() > 1) {
      // 1. 数到小于num的，依次放入队列的后端
      for (let index = 1; index < num; index++) {
        queue.enqueue(queue.dequeue())
      }
      // 2. 当数到num时，删除该元素(由于上一步操作，此时被数到的num在队列的前端)
      const eliminated = queue.dequeue()
      console.log('eliminated: ', eliminated)
    }

    return queue.front()
  }
  window.hotPotato = hotPotato
})()