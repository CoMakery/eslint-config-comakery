const config = require('../')
const test = require('tape')

const isObject = function(obj) {
  return typeof obj === 'object' && obj !== null
}

test('test basic properties of config', (t) => {
  t.ok(isObject(config.parserOptions))
  t.ok(isObject(config.env))
  t.ok(isObject(config.globals))
  t.ok(isObject(config.rules))
  t.end()
})
