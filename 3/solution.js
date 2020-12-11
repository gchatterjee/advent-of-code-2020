const path = require('path')
const getInput = require('../lib/getInput')

const inputPath = path.resolve(__dirname, './input.txt')

const TREE = '#'

const countTrees = (right, down, initRow = 0, initCol = 0) => {
  const rows = getInput(inputPath)
    .trim()
    .split('\n')
    .map((row) => row.split(''))

  const width = rows[0].length

  const trees = rows.filter((row, i) => {
    if ((i - initRow) % down !== 0) return false
    const move = (i - initRow) / down
    const index = (initCol + move * right) % width
    return row[index] === TREE
  })

  return trees.length
}

const partOne = () => countTrees(3, 1, 0, 0)
const partTwo = () =>
  countTrees(1, 1, 0, 0) *
  countTrees(3, 1, 0, 0) *
  countTrees(5, 1, 0, 0) *
  countTrees(7, 1, 0, 0) *
  countTrees(1, 2, 0, 0)

module.exports = { partOne, partTwo }
