const fs = require('fs')
const path = require('path')

let input
const getInput = () => {
  if (!input) {
    input = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf-8')
  }
  return input
}

const partOne = () => undefined
const partTwo = () => undefined

module.exports = { partOne, partTwo }
