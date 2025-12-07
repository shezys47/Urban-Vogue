// Test for Task 10: Arrays & Objects - countProperties function

describe('Task 10: CountProperties Function', () => {
  let task10;
  
  beforeEach(() => {
    // Clear the require cache to ensure fresh imports
    delete require.cache[require.resolve('../tasks/task10.js')];
    try {
      task10 = require('../tasks/task10.js');
    } catch (error) {
      task10 = {};
    }
  });

  test('should export a countProperties function', () => {
    expect(task10).toHaveProperty('countProperties');
    expect(typeof task10.countProperties).toBe('function');
  });

  test('should count properties in simple object', () => {
    if (typeof task10.countProperties === 'function') {
      const obj1 = { name: "John", age: 30, city: "New York" };
      expect(task10.countProperties(obj1)).toBe(3);

      const obj2 = { a: 1, b: 2 };
      expect(task10.countProperties(obj2)).toBe(2);
    }
  });

  test('should return 0 for empty object', () => {
    if (typeof task10.countProperties === 'function') {
      expect(task10.countProperties({})).toBe(0);
    }
  });

  test('should count properties with different data types', () => {
    if (typeof task10.countProperties === 'function') {
      const obj = {
        string: "hello",
        number: 42,
        boolean: true,
        array: [1, 2, 3],
        object: { nested: true },
        func: function() {},
        nullValue: null,
        undefinedValue: undefined
      };
      expect(task10.countProperties(obj)).toBe(8);
    }
  });

  test('should handle object with single property', () => {
    if (typeof task10.countProperties === 'function') {
      expect(task10.countProperties({ only: "property" })).toBe(1);
    }
  });

  test('should not count inherited properties', () => {
    if (typeof task10.countProperties === 'function') {
      const obj = Object.create({ inherited: "property" });
      obj.own = "property";
      expect(task10.countProperties(obj)).toBe(1);
    }
  });
});