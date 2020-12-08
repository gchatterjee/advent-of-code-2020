const Day1 = require('./1/solution.js')

const printDay = (day) => console.log(`\n=== Day ${day} ===`)
const printSolution = (part, solution) =>
  console.log(`    Part ${part}: ${solution()}`)

const solutions = [
  {
    day: 1,
    parts: {
      One: Day1.partOne,
      Two: Day1.partTwo,
    },
  },
]

function run() {
  console.log('SOLUTIONS')
  solutions.forEach(({ day, parts }) => {
    printDay(day)
    Object.entries(parts).forEach(([part, solution]) =>
      printSolution(part, solution),
    )
  })
}

run()
