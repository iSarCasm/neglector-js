const neglect = require('../neglector');

test('does something useful', () => {
  expect(neglect('')).not.toBe(undefined);
})

describe('doesnt modify code witout Constant Folding needs', () => {
  test('test 1', () => {
    expect(neglect('')).toBe('');
  })

  test('test 2', () => {
    expect(neglect('var a = 3;')).toBe('var a = 3;');
  })

  test('test 3', () => {
    expect(neglect('var b = "string"; var d = false;')).toBe('var b = "string"; var d = false;');
  })
})

describe('doesnt code with errors', () => {
  test('test 1', () => {
    expect(neglect('xcv')).toBe('xcv');
  })

  test('test 2', () => {
    expect(neglect('var a = b;')).toBe('var a = b;');
  })

  test('test 3', () => {
    expect(neglect('var 31 = 32')).toBe('var 31 = 32');
  })
})
