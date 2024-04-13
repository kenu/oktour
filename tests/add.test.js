// const obj = require('./calc');
import obj from './calc'

test('add', () => {
  expect(obj.add(1, 3)).toBe(4)
})
