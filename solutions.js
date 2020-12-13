const Day1 = require('./1/solution')
const Day2 = require('./2/solution')
const Day3 = require('./3/solution')
const Day4 = require('./4/solution')
const Day5 = require('./5/solution')
const Day6 = require('./6/solution')
const Day7 = require('./7/solution')
const Day8 = require('./8/solution')
const Day9 = require('./9/solution')

const printDay = (day) => console.log(`\nDay ${day} ===`)
const printSolution = (part, solution) =>
  console.log(`    Part ${part}: ${solution()}`)

const solutions = [Day1, Day2, Day3, Day4, Day5, Day6, Day7, Day8, Day9])

const run = () => {
  console.log('SOLUTIONS')
  solutions.forEach((solutions, day) => {
    printDay(day + 1)
    printSolution('One', solutions.partOne)
    printSolution('Two', solutions.partTwo)
  })
}

run()
