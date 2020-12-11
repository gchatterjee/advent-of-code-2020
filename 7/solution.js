const path = require('path')
const getInput = require('../lib/getInput')
const UsefulSet = require('../lib/usefulSet')

const inputPath = path.resolve(__dirname, './input.txt')

const input = getInput(inputPath)

const bagRegex = '(?<descriptor>\\S+) (?<color>\\S+) bags?'
const ruleRegex = `${bagRegex} contain (?<contents>.*)`
const contentsRegex = `no other bags|(?<quantity>[0-9]+) ${bagRegex}`

const parsedInput = input
  .trim()
  .split('\n')
  .map((rule) => {
    const { descriptor, color, contents } = rule.match(
      new RegExp(ruleRegex),
    ).groups
    const bags = contents
      .split(',')
      .map((bag) => bag.trim().match(contentsRegex).groups)
    return { descriptor, color, contents: bags }
  })

const invert = (bags) => {
  const result = {}
  Object.entries(bags).map(([wrapperId, contents]) =>
    contents.forEach((innerId) =>
      innerId in result
        ? result[innerId].push(wrapperId)
        : (result[innerId] = [wrapperId]),
    ),
  )
  return result
}

const traverse = (graph) => (frontier, visited) => {
  if (frontier.size() === 0) return visited
  visited.union(frontier, { destructive: true })
  const newFrontier = new UsefulSet()
  frontier.forEach((id) =>
    newFrontier.union(new UsefulSet(graph[id]), { destructive: true }),
  )
  newFrontier.minus(visited, { destructive: true })
  return traverse(graph)(newFrontier, visited)
}

const partOne = () => {
  const bags = {}
  parsedInput.forEach(
    ({ descriptor, color, contents }) =>
      (bags[`${descriptor} ${color}`] = contents.map(
        ({ descriptor, color }) => `${descriptor} ${color}`,
      )),
  )

  const result = traverse(invert(bags))(
    new UsefulSet(['shiny gold']),
    new UsefulSet(),
  )
  return result.size() - 1
}

const countBags = (bagMap, bags, count = 0) => {
  if (bags.length === 0) return count
  let runningTotal = count
  const newBags = []
  bags.forEach(([bagId, multiplier]) => {
    const innerBags = bagMap[bagId]
    if (innerBags) {
      Object.entries(innerBags).forEach(([id, amount]) => {
        newBags.push([id, amount * multiplier])
        runningTotal += amount * multiplier
      })
    }
  })
  return countBags(bagMap, newBags, runningTotal)
}

const partTwo = () => {
  const bags = {}
  parsedInput.forEach(({ descriptor, color, contents }) => {
    const inner = {}
    contents.forEach(({ descriptor, color, quantity }) => {
      if (descriptor && color) {
        inner[`${descriptor} ${color}`] = parseInt(quantity, 10)
      }
    })
    bags[`${descriptor} ${color}`] = inner
  })
  return countBags(bags, [['shiny gold', 1]])
}

module.exports = { partOne, partTwo }
