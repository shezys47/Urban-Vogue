// Test for Task 4: Operators & Expressions - isEven function

describe('Task 4: IsEven Function', () => {
  let task4;
  
  beforeEach(() => {
    // Clear the require cache to ensure fresh imports
    delete require.cache[require.resolve('../tasks/task4.js')];
    try {
      task4 = require('../tasks/task4.js');
    } catch (error) {
      task4 = {};
    }
  });

  test('should export an isEven function', () => {
    expect(task4).toHaveProperty('isEven');
    expect(typeof task4.isEven).toBe('function');
  });

  test('should return true for even numbers', () => {
    if (typeof task4.isEven === 'function') {
      expect(task4.isEven(2)).toBe(true);
      expect(task4.isEven(4)).toBe(true);
      expect(task4.isEven(10)).toBe(true);
      expect(task4.isEven(100)).toBe(true);
    }
  });

  test('should return false for odd numbers', () => {
    if (typeof task4.isEven === 'function') {
      expect(task4.isEven(1)).toBe(false);
      expect(task4.isEven(3)).toBe(false);
      expect(task4.isEven(7)).toBe(false);
      expect(task4.isEven(99)).toBe(false);
    }
  });

  test('should handle zero correctly', () => {
    if (typeof task4.isEven === 'function') {
      expect(task4.isEven(0)).toBe(true);
    }
  });

  test('should handle negative numbers correctly', () => {
    if (typeof task4.isEven === 'function') {
      expect(task4.isEven(-2)).toBe(true);
      expect(task4.isEven(-1)).toBe(false);
      expect(task4.isEven(-10)).toBe(true);
      expect(task4.isEven(-7)).toBe(false);
    }
  });
});