// Test for Task 11: Switch - getDayName function

describe('Task 11: GetDayName Function', () => {
  let task11;
  
  beforeEach(() => {
    // Clear the require cache to ensure fresh imports
    delete require.cache[require.resolve('../tasks/task11.js')];
    try {
      task11 = require('../tasks/task11.js');
    } catch (error) {
      task11 = {};
    }
  });

  test('should export a getDayName function', () => {
    expect(task11).toHaveProperty('getDayName');
    expect(typeof task11.getDayName).toBe('function');
  });

  test('should return correct day names for valid numbers', () => {
    if (typeof task11.getDayName === 'function') {
      expect(task11.getDayName(1)).toBe('Monday');
      expect(task11.getDayName(2)).toBe('Tuesday');
      expect(task11.getDayName(3)).toBe('Wednesday');
      expect(task11.getDayName(4)).toBe('Thursday');
      expect(task11.getDayName(5)).toBe('Friday');
      expect(task11.getDayName(6)).toBe('Saturday');
      expect(task11.getDayName(7)).toBe('Sunday');
    }
  });

  test('should return "Invalid day" for numbers outside 1-7', () => {
    if (typeof task11.getDayName === 'function') {
      expect(task11.getDayName(0)).toBe('Invalid day');
      expect(task11.getDayName(8)).toBe('Invalid day');
      expect(task11.getDayName(-1)).toBe('Invalid day');
      expect(task11.getDayName(10)).toBe('Invalid day');
    }
  });

  test('should handle non-integer inputs', () => {
    if (typeof task11.getDayName === 'function') {
      expect(task11.getDayName(1.5)).toBe('Invalid day');
      expect(task11.getDayName('1')).toBe('Invalid day');
      expect(task11.getDayName(null)).toBe('Invalid day');
      expect(task11.getDayName(undefined)).toBe('Invalid day');
    }
  });
});