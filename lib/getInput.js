const fs = require('fs')

const inputs = {}

const getInput = (path) => {
  if (!(path in inputs)) {
    inputs[path] = fs.readFileSync(path, 'utf-8')
  }
  return inputs[path]
}

module.exports = getInput
