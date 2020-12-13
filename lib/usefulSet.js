class UsefulSet {
  constructor(iterable) {
    this.set = {}
    if (iterable) iterable.forEach((item) => (this.set[item] = true))
  }

  union(other, { destructive } = { destructive: false }) {
    if (destructive) other.forEach((item) => (this.set[item] = true))
    else
      return new UsefulSet([
        ...Object.keys(this.set),
        ...Object.keys(other.set),
      ])
  }

  intersection(other, { destructive } = { destructive: false }) {
    if (destructive)
      other.forEach((item) => item in this.set || delete this.set[item])
    else
      return new UsefulSet(
        Object.keys(this.set).filter((item) => item in other.set),
      )
  }

  minus(other, { destructive } = { destructive: false }) {
    if (destructive)
      other.forEach((item) => item in this.set && delete this.set[item])
    else
      return new UsefulSet(
        Object.keys(this.set).filter((item) => !(item in other.set)),
      )
  }

  map(func) {
    return new UsefulSet(Object.keys(this.set).map(func))
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
    if (item in this.set) delete this.set[item]
  }

  has(item) {
    if (item in this.set) return item in this.set
  }

  size() {
    return Object.keys(this.set).length
  }

  toString() {
    return `UsefulSet(${Object.keys(this.set).join(', ')})`
  }
}

module.exports = UsefulSet
