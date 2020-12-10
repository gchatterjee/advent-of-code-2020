const path = require('path')
const getInput = require('../lib/getInput')

let inputPath = path.resolve(__dirname, './input.txt')

const parsedInput = getInput(inputPath).trim().split('\n')

const binarySearch = (lo, hi, code) => {
  if (hi - lo === 1) return lo
  const mid = lo + Math.trunc((hi - lo) / 2)
  return code[0] === 'F' || code[0] === 'L'
    ? binarySearch(lo, mid, code.slice(1))
    : binarySearch(mid, hi, code.slice(1))
}

const binaryPartitionToId = (binaryPartition) => {
  const rowCode = binaryPartition.slice(0, 7)
  const seatCode = binaryPartition.slice(7, 10)
  const row = binarySearch(0, 128, rowCode)
  const seat = binarySearch(0, 8, seatCode)
  return row * 8 + seat
}

const partOne = () => Math.max(...parsedInput.map(binaryPartitionToId))
const partTwo = () => {
  const idSet = new Set()
  parsedInput.forEach((partition) => idSet.add(binaryPartitionToId(partition)))
  const isMissingNext = (id) => !idSet.has(id + 1) && idSet.has(id + 2)
  const missingIds = []
  idSet.forEach((id) => {
    if (isMissingNext(id)) missingIds.push(id + 1)
  })
  return missingIds.length > 0 && missingIds[0]
}

module.exports = { partOne, partTwo }
