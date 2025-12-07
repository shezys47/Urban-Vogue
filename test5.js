// Test for Task 5: Conditional Statements - getGrade function

describe('Task 5: GetGrade Function', () => {
  let task5;
  
  beforeEach(() => {
    // Clear the require cache to ensure fresh imports
    delete require.cache[require.resolve('../tasks/task5.js')];
    try {
      task5 = require('../tasks/task5.js');
    } catch (error) {
      task5 = {};
    }
  });

  test('should export a getGrade function', () => {
    expect(task5).toHaveProperty('getGrade');
    expect(typeof task5.getGrade).toBe('function');
  });

  test('should return "A" for scores 90-100', () => {
    if (typeof task5.getGrade === 'function') {
      expect(task5.getGrade(90)).toBe('A');
      expect(task5.getGrade(95)).toBe('A');
      expect(task5.getGrade(100)).toBe('A');
    }
  });

  test('should return "B" for scores 80-89', () => {
    if (typeof task5.getGrade === 'function') {
      expect(task5.getGrade(80)).toBe('B');
      expect(task5.getGrade(85)).toBe('B');
      expect(task5.getGrade(89)).toBe('B');
    }
  });

  test('should return "C" for scores 70-79', () => {
    if (typeof task5.getGrade === 'function') {
      expect(task5.getGrade(70)).toBe('C');
      expect(task5.getGrade(75)).toBe('C');
      expect(task5.getGrade(79)).toBe('C');
    }
  });

  test('should return "D" for scores 60-69', () => {
    if (typeof task5.getGrade === 'function') {
      expect(task5.getGrade(60)).toBe('D');
      expect(task5.getGrade(65)).toBe('D');
      expect(task5.getGrade(69)).toBe('D');
    }
  });

  test('should return "F" for scores below 60', () => {
    if (typeof task5.getGrade === 'function') {
      expect(task5.getGrade(59)).toBe('F');
      expect(task5.getGrade(45)).toBe('F');
      expect(task5.getGrade(0)).toBe('F');
    }
  });

  test('should handle edge cases correctly', () => {
    if (typeof task5.getGrade === 'function') {
      expect(task5.getGrade(89.9)).toBe('B');
      expect(task5.getGrade(90.1)).toBe('A');
    }
  });
});