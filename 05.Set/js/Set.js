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
  }

  window.Set = Set
})(window)