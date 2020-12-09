const Day1 = require('./1/solution')
const Day2 = require('./2/solution')
const Day3 = require('./3/solution')

const printDay = (day) => console.log(`\nDay ${day} ===`)
const printSolution = (part, solution) =>
  console.log(`    Part ${part}: ${solution()}`)

const solutions = [Day1, Day2, Day3]

const run = () => {
  console.log('SOLUTIONS')
  solutions.forEach((solutions, day) => {
    printDay(day)
    printSolution('One', solutions.partOne)
    printSolution('Two', solutions.partTwo)
  })
}

run()
