const path = require('path')
const getInput = require('../lib/getInput')

const inputPath = path.resolve(__dirname, './input.txt')

const input = getInput(inputPath)

let parsedInput = input
  .trim()
  .split('\n')
  .map((num) => parseInt(num, 10))

let partOneResult

const executePartOne = () => {
  const preambleSize = 25
  const set = parsedInput
    .slice(0, 25)
    .reduce(
      (acc, val) => ({ ...acc, [val]: val in acc ? acc[val] + 1 : 1 }),
      {},
    )
  for (let i = preambleSize; i < parsedInput.length; i++) {
    const target = parsedInput[i]
    const isGood = Object.keys(set).filter((val) => {
      if (target - val === val) return set[val] > 1
      else return target - val in set && set[target - val] > 0
    })
    if (!(isGood.length > 0)) return target
    set[parsedInput[i - preambleSize]] -= 1
    if (target in set) set[target] += 1
    else set[target] = 1
  }
}

const partOne = () => {
  if (partOneResult === undefined) {
    partOneResult = executePartOne()
  }
  return partOneResult
}

const partTwo = () => {
  const sums = {}

  parsedInput.forEach((_, rangeLen) => {
    if (rangeLen === 0)
      parsedInput.forEach(
        (num, start) => (sums[[start, start + rangeLen + 1]] = num),
      )
    else
      parsedInput.forEach((_, start) => {
        if (rangeLen + start > parsedInput.length) return
        sums[[start, start + rangeLen + 1]] =
          sums[[start, start + rangeLen]] + parsedInput[start + rangeLen]
      })
  })

  const target = partOne()
  const ranges = Object.keys(sums)
    .filter((range) => sums[range] === target)
    .map((pair) => pair.match(/(?<i>[0-9]+),(?<j>[0-9]+)/).groups)
    .map(({i, j}) => [parseInt(i, 10), parseInt(j, 10)])
    .filter(([i, j]) => j > i + 1)
  const range = ranges.length > 0 && ranges[0]
  const nums = parsedInput.slice(range[0], range[1])
  return Math.min(...nums) + Math.max(...nums)
}

module.exports = { partOne, partTwo }
