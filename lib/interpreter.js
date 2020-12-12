class Interpreter {
  interpret({line, opcode, number}, acc) {
    switch(opcode) {
      case 'nop':
        return {acc, line: line + 1}
      case 'acc':
        return {acc: acc + number, line: line + 1}
      case 'jmp':
        return {acc, line: line + number}
      default:
        throw new Error(`unrecognized opcode \`${opcode}\` on line ${line}`)
    }
  }

  execute(instructions, isExitCondition = () => false) {
    let line = 0
    let acc = 0
    const states = {}
    let loop = false
    while (!isExitCondition({line, acc}) && !(line in states)) {
      states[line] = true
      let result
      result = this.interpret(instructions[line], acc)
      line = result.line
      acc = result.acc
    }
    if (!isExitCondition({line, acc})) loop = true
    return {line, acc, loop}
  }
}

module.exports = Interpreter