const fs = require('fs')
const path = require('path')

let input
const getInput = () => {
  if (!input) {
    input = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf-8')
  }
  return input
}

let parsedInput
const getParsedInput = () => {
  const regex = /(?<num1>[0-9]+)-(?<num2>[0-9]+) (?<character>.): (?<password>.*)/
  if (!parsedInput) {
    parsedInput = getInput()
      .trim()
      .split('\n')
      .map((line) => regex.exec(line).groups)
  }
  return parsedInput
}

const countCompliant = (isCompliant) => {
  const entries = getParsedInput()
  const compliant = entries.filter((entry) => isCompliant(entry))
  return compliant.length
}

const partOne = () => {
  const isCompliant = ({ num1, num2, character, password }) => {
    const count = password.split('').filter((pwdchar) => pwdchar === character)
      .length
    return num1 <= count && count <= num2
  }

  return countCompliant(isCompliant)
}

const partTwo = () => {
  const isCompliant = ({ num1, num2, character, password }) => {
    const explodedPassword = password.split('')
    const char1 = explodedPassword[num1 - 1] === character ? 1 : 0
    const char2 = explodedPassword[num2 - 1] === character ? 1 : 0
    return char1 + char2 === 1
  }
  return countCompliant(isCompliant)
}

module.exports = { partOne, partTwo }
