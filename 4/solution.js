const path = require('path')
const getInput = require('../lib/getInput')

let inputPath = path.resolve(__dirname, './input.txt')

const fields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid', 'cid']

const getPassports = () => {
  const fieldRegex = fields.join('|')
  const regex = new RegExp(`(?<field>${fieldRegex}):(?<value>\\S*)`)
  return getInput(inputPath)
    .trim()
    .split('\n\n')
    .map((passport) =>
      passport
        .split(/[ \n]/)
        .map((elem) => elem.match(regex).groups)
        .reduce(
          (accumulator, { field, value }) => ({
            ...accumulator,
            [field]: value,
          }),
          {},
        ),
    )
}

const checkFields = (passport, exclude = null, validation = null) => {
  const validFieldCount = fields.filter((field) => {
    if (exclude && exclude.includes(field)) return true
    if (!(field in passport)) return false
    const isValid =
      !validation ||
      !(field in validation) ||
      validation[field](passport[field])
    return isValid
  }).length
  return validFieldCount === fields.length
}

const partOne = () =>
  getPassports().filter((passport) => checkFields(passport, ['cid'])).length

const isBetween = (lo, hi) => (num) => {
  const n = parseInt(num, 10)
  return lo <= n && n <= hi
}

const validateHgt = (hgt) => {
  const props = hgt.match(/^(?<numString>[0-9]+)(?<unit>cm|in)$/)
  if (!props) return false

  const { numString, unit } = props.groups
  if (unit === 'cm') return isBetween(150, 193)(numString)
  if (unit === 'in') return isBetween(59, 76)(numString)
  return false
}

const partTwo = () => {
  const validation = {
    byr: isBetween(1920, 2002),
    iyr: isBetween(2010, 2020),
    eyr: isBetween(2020, 2030),
    hgt: validateHgt,
    hcl: (hcl) => /^#[a-f0-9]{6}$/.test(hcl),
    ecl: (ecl) => /^amb|blu|brn|gry|grn|hzl|oth$/.test(ecl),
    pid: (pid) => /^[0-9]{9}$/.test(pid),
  }
  return getPassports().filter((passport) =>
    checkFields(passport, ['cid'], validation),
  ).length
}

module.exports = { partOne, partTwo }
