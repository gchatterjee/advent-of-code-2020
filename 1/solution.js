const fs = require('fs')

let input

function getInput() {
  if (!input) {
    input = fs.readFileSync(`/input.txt`)
  }
  return input
}

function partOne() {
  const inputNums = getInput()
    .split('\n')
    .map((n) => parseInt(n, 10))
  const target = 2020

  let pairs = []
  inputNums.forEach((n1, i) => {
    inputNums.forEach((n2, j) => {
      if (i < j && n1 + n2 === target) {
        pairs.push([n1, n2])
      }
    })
  })

  const products = pairs.map(([x, y]) => x * y)

  return products.length > 0 && products[0]
}

function partTwo() {
  const inputNums = getInput()
    .split('\n')
    .map((n) => parseInt(n, 10))
  const target = 2020

  let triplets = []
  const inputMap = {}

  inputNums.forEach((n, i) => {
    if (n in inputMap) {
      inputMap[n].push(i)
    } else {
      inputMap[n] = [i]
    }
  })

  inputNums.forEach((n1, i) =>
    inputNums.forEach((n2, j) => {
      if (i !== j && i < j) {
        const diff = target - (n1 + n2)
        if (diff in inputMap) {
          for (const k of inputMap[diff]) {
            if (i < k && j < k) {
              triplets.push([n1, n2, diff])
            }
          }
        }
      }
    }),
  )

  const products = triplets.map(([x, y, z]) => x * y * z)

  return products.length > 0 && products[0]
}

module.exports = { partOne, partTwo }
