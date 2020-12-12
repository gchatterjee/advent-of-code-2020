const path = require('path')
const getInput = require('../lib/getInput')

const Interpreter = require('../lib/interpreter')

const inputPath = path.resolve(__dirname, './input.txt')
const input = getInput(inputPath)

const opCodes = ['acc', 'jmp', 'nop']
const opCodeRegex = `(?<opcode>${opCodes.join('|')}) \\+?(?<number>-?[0-9]+)`

const parsedInput = input
  .trim()
  .split('\n')
  .map((instruction, line) => {
    const {opcode, number} = instruction.match(opCodeRegex).groups
    return {line, opcode, number: parseInt(number, 10)}
  })

const partOne = () => new Interpreter().execute(parsedInput).acc
const partTwo = () => {
  let finalAcc
  const interpreter = new Interpreter()
  parsedInput.forEach(({ line, opcode, number }) => {
    if (opcode === 'jmp' || opcode === 'nop') {
      const before = parsedInput.slice(0, line)
      const current = {line, opcode: opcode === 'jmp' ? 'nop' : 'jmp', number}
      const after = parsedInput.slice(line + 1)
      const fixedCode = [...before, current, ...after]
      const {loop, acc} = interpreter.execute(fixedCode, ({line}) => line === parsedInput.length)
      if (!loop) finalAcc = acc
    }
  })
  return finalAcc
}

module.exports = { partOne, partTwo }
