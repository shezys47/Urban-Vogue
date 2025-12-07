// Test for Task 9: Arrays & Objects - findMax function

describe('Task 9: FindMax Function', () => {
  let task9;
  
  beforeEach(() => {
    // Clear the require cache to ensure fresh imports
    delete require.cache[require.resolve('../tasks/task9.js')];
    try {
      task9 = require('../tasks/task9.js');
    } catch (error) {
      task9 = {};
    }
  });

  test('should export a findMax function', () => {
    expect(task9).toHaveProperty('findMax');
    expect(typeof task9.findMax).toBe('function');
  });

  test('should find maximum in array of positive numbers', () => {
    if (typeof task9.findMax === 'function') {
      expect(task9.findMax([1, 2, 3, 4, 5])).toBe(5);
      expect(task9.findMax([10, 50, 30, 20])).toBe(50);
      expect(task9.findMax([7, 2, 9, 1])).toBe(9);
    }
  });

  test('should handle negative numbers', () => {
    if (typeof task9.findMax === 'function') {
      expect(task9.findMax([-1, -2, -3])).toBe(-1);
      expect(task9.findMax([-10, -5, -15])).toBe(-5);
    }
  });

  test('should handle mixed positive and negative numbers', () => {
    if (typeof task9.findMax === 'function') {
      expect(task9.findMax([-5, 3, -2, 8, 1])).toBe(8);
      expect(task9.findMax([0, -1, 5, -10])).toBe(5);
    }
  });

  test('should handle decimal numbers', () => {
    if (typeof task9.findMax === 'function') {
      expect(task9.findMax([1.5, 2.7, 1.2])).toBe(2.7);
    }
  });

  test('should handle single element array', () => {
    if (typeof task9.findMax === 'function') {
      expect(task9.findMax([42])).toBe(42);
      expect(task9.findMax([-7])).toBe(-7);
    }
  });

  test('should handle empty array gracefully', () => {
    if (typeof task9.findMax === 'function') {
      const result = task9.findMax([]);
      expect(result).toBeUndefined();
    }
  });

  test('should handle array with duplicates', () => {
    if (typeof task9.findMax === 'function') {
      expect(task9.findMax([5, 5, 5])).toBe(5);
      expect(task9.findMax([3, 7, 7, 2])).toBe(7);
    }
  });
});