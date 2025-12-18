/* eslint-disable no-undef */
const { capitalizeWords, filterActiveUsers, logAction } = require('../index');

// Capitalize the first letter of every word
test('Capitalize first letter of words for normal cases', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World');
});

test('Display nothing for empty strings', () => {
    expect(capitalizeWords('')).toBe('');
});

test('Capitalize first letter of words with special characters', () => {
    expect('hello-world').toBe('hello-world');
});

test('Capitalize first letter of single words', () => {
    expect(capitalizeWords('hello')).toBe('Hello');
});

// Display only active users
test('In an array with mixed active and inactive users display active users', () => {
    const users = [
        { name: 'Alice', isActive: true },
        { name: 'Bob', isActive: false },
    ];
    expect(filterActiveUsers(users)).toEqual([{name: 'Alice', isActive: true}]);
});

test('Display an empty array in an array with only inactive users', () => {
    const users = [
        { name: 'Alice', isActive: false },
        { name: 'Bob', isActive: false },
    ];
    expect(filterActiveUsers(users)).toEqual([]);
});

test('Display an empty array when provided an empty array', () => {
    const users = [];
    expect(filterActiveUsers(users)).toEqual([]);
});


// Log action performed by user with a timestamp
test('Logs an action performed by the user with a timestamp', () => {
    const timestamp = new Date().toISOString();
    expect(logAction('login', 'Alice')).toBe(`User Alice performed login at ${timestamp}`);
});

test('Logs undefined when username or action misses', () => {
    const timestamp = new Date().toISOString();
    expect(logAction('login')).toBe(`User ${undefined} performed login at ${timestamp}`);
});

test('Logs undefined when both username and action miss', () => {
    const timestamp = new Date().toISOString();
    expect(logAction()).toBe(`User ${undefined} performed ${undefined} at ${timestamp}`);
});