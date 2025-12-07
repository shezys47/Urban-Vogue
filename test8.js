// Test for Task 8: Loops - factorial function

describe('Task 8: Factorial Function', () => {
  let task8;
  
  beforeEach(() => {
    // Clear the require cache to ensure fresh imports
    delete require.cache[require.resolve('../tasks/task8.js')];
    try {
      task8 = require('../tasks/task8.js');
    } catch (error) {
      task8 = {};
    }
  });

  test('should export a factorial function', () => {
    expect(task8).toHaveProperty('factorial');
    expect(typeof task8.factorial).toBe('function');
  });

  test('should calculate factorial correctly for positive numbers', () => {
    if (typeof task8.factorial === 'function') {
      expect(task8.factorial(1)).toBe(1);
      expect(task8.factorial(2)).toBe(2);
      expect(task8.factorial(3)).toBe(6);
      expect(task8.factorial(4)).toBe(24);
      expect(task8.factorial(5)).toBe(120);
      expect(task8.factorial(6)).toBe(720);
    }
  });

  test('should return 1 for factorial of 0', () => {
    if (typeof task8.factorial === 'function') {
      expect(task8.factorial(0)).toBe(1);
    }
  });

  test('should handle larger numbers correctly', () => {
    if (typeof task8.factorial === 'function') {
      expect(task8.factorial(7)).toBe(5040);
      expect(task8.factorial(8)).toBe(40320);
    }
  });
});