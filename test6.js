// Test for Task 6: Conditional Statements - isAdult function

describe('Task 6: IsAdult Function', () => {
  let task6;
  
  beforeEach(() => {
    // Clear the require cache to ensure fresh imports
    delete require.cache[require.resolve('../tasks/task6.js')];
    try {
      task6 = require('../tasks/task6.js');
    } catch (error) {
      task6 = {};
    }
  });

  test('should export an isAdult function', () => {
    expect(task6).toHaveProperty('isAdult');
    expect(typeof task6.isAdult).toBe('function');
  });

  test('should return "Adult" for ages 18 and above', () => {
    if (typeof task6.isAdult === 'function') {
      expect(task6.isAdult(18)).toBe('Adult');
      expect(task6.isAdult(21)).toBe('Adult');
      expect(task6.isAdult(65)).toBe('Adult');
      expect(task6.isAdult(100)).toBe('Adult');
    }
  });

  test('should return "Minor" for ages below 18', () => {
    if (typeof task6.isAdult === 'function') {
      expect(task6.isAdult(17)).toBe('Minor');
      expect(task6.isAdult(16)).toBe('Minor');
      expect(task6.isAdult(5)).toBe('Minor');
      expect(task6.isAdult(0)).toBe('Minor');
    }
  });

  test('should handle edge case of exactly 18', () => {
    if (typeof task6.isAdult === 'function') {
      expect(task6.isAdult(18)).toBe('Adult');
      expect(task6.isAdult(17.9)).toBe('Minor');
    }
  });
});