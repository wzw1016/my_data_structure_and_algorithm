(function() {

  function HashTable () {
    this.storage = []
    this.count = 0
    this.limit = 7

    // 对传入标识进行散列化的函数
    HashTable.prototype.hashFunction = function (key, size) {
      let hashCode = 0

      //利用霍纳法则（秦九韶算法）将计算hashCode的时间复杂度由O(N^2)降低到O(N)
      for (let index = 0; index < key.length; index++) {
        hashCode = 37 * hashCode + key.charCodeAt(index)
      }
      const index = hashCode % size
      return index
    }


    // 新增 / 修改
    HashTable.prototype.put = function (key, value) {
      const index = this.hashFunction(key, this.limit)
      let bucket = this.storage[index]

      if (!bucket) bucket = this.storage[index] = []
      // 修改
      for (let index = 0; index < bucket.length; index++) {
        const tuple = bucket[index]
        if (tuple[0] === key) {
          tuple[1] = value
          return true
        }
      }
      // 新增
      this.storage[index].push([key, value])
      this.count += 1
      
      // 判断 是否需要执行扩容操作，扩容后的散列表容量仍为质数（当loadFactor大于0.75时）
      if ((this.count / this.limit) * 100 > 75) {
        this.limit = this.getPrime(this.limit * 2 + 1)
        this.resize(this.limit)
      }
      
      return true
    }

    // 查询
    HashTable.prototype.get = function(key) {
      const index = this.hashFunction(key, this.limit)
      const bucket = this.storage[index]

      if (!bucket) return null
      for (let index = 0; index < bucket.length; index++) {
        const tuple = bucket[index]
        if (tuple[0] === key) {
          return tuple[1]
        }
      }
      return null
    }

    // 删除
    HashTable.prototype.remove = function(key) {
      const index = this.hashFunction(key, this.limit)
      const bucket = this.storage[index]

      if (!bucket) return null
      for (let index = 0; index < bucket.length; index++) {
        const tuple = bucket[index]
        if (tuple[0] === key) {
          const value = tuple[1]
          bucket.splice(index, 1)
          this.count -= 1
          if (bucket.length === 0) {
            this.storage[index] = null
          }

          // 判断 是否需要执行减容操作，减容后的散列表容量仍为质数（当loadFactor小于0.25时）
          if (this.limit > 7 && (this.count / this.limit) * 100 < 25) {
            this.limit = this.getPrime(Math.floor(this.limit / 2))
            this.resize(this.limit)
          }
          return value
        }
      }
      return null
    }

    HashTable.prototype.isEmpty = function() {
      return this.count === 0
    }

    HashTable.prototype.size = function() {
      return this.count
    }

    HashTable.prototype.resize = function(newLimit) {
      const oldStorage = this.storage

      // 重置散列表
      this.storage = [] 
      this.count = 0
      this.limit = newLimit
      
      // 将原来的数据以新的映射关系put到新的散列表中
      for (let index = 0; index < oldStorage.length; index++) {
        const oldBucket = oldStorage[index]
        if (!oldBucket) continue
        for (let i = 0; i < oldBucket.length; i++) {
          const oldTuple =  oldBucket[i]
          this.put(oldTuple[0], oldTuple[1])
        }
      }
    }

    // 判断传入数字是否是质数的辅助方法
    HashTable.prototype.isPrime = function(num) {
      if (num <= 1) return false
      for (let index = 2; index < Math.floor(Math.sqrt(num)); index++) {
        if (num % index === 0) return false
      }
      return true
    }

    // 获取第一个大于所传入数字的质数的辅助方法
    HashTable.prototype.getPrime = function(num) {
      while(!this.isPrime(num)) {
        num += 1
      }
      return num
    }
  }

  window.HashTable = HashTable
})(window)