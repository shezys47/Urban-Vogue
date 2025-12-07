// Test for Task 1: Variables & Data Types - name variable


describe('Task 1: Name Variable', () => {
  let task1;

  beforeEach(() => {
    // Clear the require cache to ensure fresh imports
    delete require.cache[require.resolve('../tasks/task1.js')];
    try {
      task1 = require('../tasks/task1.js');
    } catch (error) {
      task1 = {};
    }
  });

  test('name should be a string', () => {
    if (task1.name !== undefined) {
      expect(typeof task1.name).toBe('string');
    }
  });

  test('name should not be empty', () => {
    if (task1.name !== undefined) {
      expect(task1.name.length).toBeGreaterThan(0);
    }
  });

  test('name should not be the placeholder text', () => {
    if (task1.name !== undefined) {
      expect(task1.name).not.toBe('Your Name Here');
      expect(task1.name).not.toBe('');
    }
  });

  test('name should contain at least a first name', () => {
    if (task1.name !== undefined) {
      expect(task1.name.trim()).toMatch(/\S+/);
    }
  });

  test('name should be properly formatted (no leading/trailing whitespace)', () => {
    if (task1.name !== undefined) {
      expect(task1.name).toBe(task1.name.trim());
    }
  });

  test('should export only the name property', () => {
    const exportedKeys = Object.keys(task1);
    expect(exportedKeys).toEqual(['name']);
  });

  test('name should contain alphabetic characters', () => {
    if (task1.name !== undefined) {
      expect(task1.name).toMatch(/[a-zA-Z]/);
    }
  });
});


