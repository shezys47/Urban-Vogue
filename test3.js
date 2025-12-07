// Test for Task 3: Operators & Expressions - add function

describe('Task 3: Add Function', () => {
  let task3;
  
  beforeEach(() => {
    // Clear the require cache to ensure fresh imports
    delete require.cache[require.resolve('../tasks/task3.js')];
    try {
      task3 = require('../tasks/task3.js');
    } catch (error) {
      task3 = {};
    }
  });

  test('should export an add function', () => {
    expect(task3).toHaveProperty('add');
    expect(typeof task3.add).toBe('function');
  });

  test('should add two positive numbers correctly', () => {
    if (typeof task3.add === 'function') {
      expect(task3.add(5, 3)).toBe(8);
      expect(task3.add(10, 15)).toBe(25);
    }
  });

  test('should add negative numbers correctly', () => {
    if (typeof task3.add === 'function') {
      expect(task3.add(-5, -3)).toBe(-8);
      expect(task3.add(-10, 5)).toBe(-5);
    }
  });

  test('should add decimal numbers correctly', () => {
    if (typeof task3.add === 'function') {
      expect(task3.add(2.5, 3.7)).toBeCloseTo(6.2);
      expect(task3.add(0.1, 0.2)).toBeCloseTo(0.3);
    }
  });

  test('should handle zero correctly', () => {
    if (typeof task3.add === 'function') {
      expect(task3.add(0, 5)).toBe(5);
      expect(task3.add(5, 0)).toBe(5);
      expect(task3.add(0, 0)).toBe(0);
    }
  });
});