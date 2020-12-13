class TreeNode {
  constructor(val, lchild = null, rchild = null) {
    this.val = val
    this.lchild = lchild
    this.rchild = rchild
  }

  print(
    { level = 0, valToString = (val) => val } = {
      level: 0,
      valToString: (val) => val,
    },
  ) {
    const padding = [...new Array(level)].map(() => '--').join('')
    console.log(`${padding}${valToString(this.val)}`)
    this.lchild && this.lchild.print({ level: level + 1, valToString })
    this.rchild && this.rchild.print({ level: level + 1, valToString })
  }
}

module.exports = TreeNode
