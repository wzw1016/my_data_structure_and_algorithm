(function(window) {
  function Set() {
    this['[[Entries]]'] = {}
    this.length = 0

    Set.prototype.add = function(data) {
      if(this.has(data)) {
        return false
      }
      this['[[Entries]]'][data] = data
      this.length += 1
      return true
    }

    Set.prototype.remove = function(data) {
      if(!this.has(data)) return false
      this.length -= 1
      return delete this['[[Entries]]'][data]
    }

    Set.prototype.values = function() {
      return Object.keys(this['[[Entries]]'])
    }

    Set.prototype.size = function() {
      return this.length
    }

    Set.prototype.has = function(data) {
      return this['[[Entries]]'].hasOwnProperty(data)
    }

    Set.prototype.clear = function(data) {
      return this['[[Entries]]'] = {}
    }

    Set.prototype.union = function(set) {
      const unionSet = new Set()
      for (const key in this['[[Entries]]']) {
        unionSet.add(key)
      }

      for (const key in set['[[Entries]]']) {
        unionSet.add(key)
      }
      return unionSet
    }

    Set.prototype.intersection = function(set) {
      const intersectSet = new Set()
      for (const key in this['[[Entries]]']) {
        set.has(key) && intersectSet.add(key)
      }
      
      return intersectSet
    }

    Set.prototype.residual = function(set) {
      const residualSet = new Set()
      for (const key in this['[[Entries]]']) {
        !set.has(key) && residualSet.add(key)
      }
      return residualSet
    }

    Set.prototype.subset = function(set) {
      if (this.length > set.length) return false
      for (const key in this['[[Entries]]']) {
        if (!set.has(key)) return false
      }
      return true
    }
  }

  window.Set = Set
})(window)