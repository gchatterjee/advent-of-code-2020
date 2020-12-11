class UsefulSet {
  constructor(iterable) {
    this.set = {}
    if (iterable) {
      iterable.forEach((item) => (this.set[item] = true))
    }
  }

  union(other, { destructive } = { destructive: false }) {
    if (destructive) {
      other.forEach((item) => (this.set[item] = true))
    } else {
      return { ...this.set, ...other }
    }
  }

  intersection(other, { destructive } = { destructive: false }) {
    if (destructive) {
      other.forEach((item) => item in this.set || delete this.set[item])
    } else {
      const result = {}
      other.forEach((item) => item in this.set && (result[item] = true))
      return result
    }
  }

  minus(other, { destructive } = { destructive: false }) {
    if (destructive) {
      other.forEach((item) => item in this.set && delete this.set[item])
    } else {
      const result = {}
      this.set.forEach((item) => item in other || (result[item] = true))
      return result
    }
  }

  map(func) {
    const result = {}
    Object.keys(this.set)
      .map(func)
      .forEach((item) => (result[item] = true))
    return result
  }

  forEach(func) {
    Object.keys(this.set).forEach(func)
  }

  reduce(func, init) {
    return Object.keys(this.set).reduce(func, init)
  }

  add(item) {
    this.set[item] = true
  }

  delete(item) {
    delete this.set[item]
  }

  size() {
    return Object.keys(this.set).length
  }

  toString() {
    return JSON.stringify(Object.keys(this.set))
  }
}

module.exports = UsefulSet
