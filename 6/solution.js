const path = require('path')
const getInput = require('../lib/getInput')

const inputPath = path.resolve(__dirname, './input.txt')

const input = getInput(inputPath)
const parsedInput = input
  .trim()
  .split('\n\n')
  .map((group) => group.split('\n').map((person) => person.split('')))

const partOne = () => {
  const countQuestions = (group) => {
    const questions = new Set()
    group.forEach((person) => {
      person.forEach((question) => questions.add(question))
    })
    return questions.size
  }

  return parsedInput
    .map(countQuestions)
    .reduce((total, current) => total + current, 0)
}

const intersection = (setA, setB) => {
  if (setA === null) return setB
  if (setB === null) return setA
  const result = new Set()
  setA.forEach((item) => setB.has(item) && result.add(item))
  return result
}

const partTwo = () => {
  const countQuestions = (group) =>
    group.reduce((questions, person) => {
      return intersection(new Set(person), questions)
    }, null).size
  return parsedInput
    .map(countQuestions)
    .reduce((total, current) => total + current, 0)
}

module.exports = { partOne, partTwo }
