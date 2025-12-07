// Test for Task 2: Variables & Data Types - PI constant

describe('Task 2: PI Constant', () => {
  let task2;
  
  beforeEach(() => {
    // Clear the require cache to ensure fresh imports
    delete require.cache[require.resolve('../tasks/task2.js')];
    try {
      task2 = require('../tasks/task2.js');
    } catch (error) {
      task2 = {};
    }
  });

  test('should export a PI constant', () => {
    expect(task2).toHaveProperty('PI');
  });

  test('PI should be a number', () => {
    if (task2.PI !== undefined) {
      expect(typeof task2.PI).toBe('number');
    }
  });

  test('PI should equal 3.14', () => {
    expect(task2.PI).toBe(3.14);
  });
});